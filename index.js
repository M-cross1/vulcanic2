require("./database/global");
const func = require('./database/place');
const readline = require('readline');
const question = _0x16ecb7 => {
  const _0x4ed637 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0xf1f02d => {
    _0x4ed637.question(_0x16ecb7, _0xf1f02d);
  });
};
async function startSesi() {
  const _0x19952b = makeInMemoryStore({
    'logger': pino().child({
      'level': "silent",
      'stream': "store"
    })
  });
  const {
	Creator,
	Access,
	Access_Bot
} = require("./drex/fakoff.js")
const {
	smsg,
	isUrl,
	generateMessageTag,
	getBuffer,
	getSizeMedia,
	fetchJson,
	sleep,
	question
} = require("./lib/myfynction.js");
try {
	var {
		Low,
		JSONFile
	} = require("lowdb")
} catch (e) {
	var {
		Low,
		JSONFile
	} = require("./lib/lowdb.js")
}
	
const yargs = require("yargs/yargs")
  const {
    state: _0x282728,
    saveCreds: _0x145ebc
  } = await useMultiFileAuthState("./session");
  const {
    version: _0x467b29,
    isLatest: _0x221efb
  } = await fetchLatestBaileysVersion();
  console.log(chalk.green.bold("\n░█████╗░██████╗░██╗░░░██╗██╗░░░██╗\n██╔══██╗██╔══██╗╚██╗░██╔╝╚██╗░██╔╝\n███████║██████╦╝░╚████╔╝░░╚████╔╝░\n██╔══██║██╔══██╗░░╚██╔╝░░░░╚██╔╝░░\n██║░░██║██████╦╝░░░██║░░░░░░██║░░░\n╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░░░░╚═╝░░░\n\nABYY BOTZ BUG V8.0.0"));
  const _0x6c9e1d = {
    'version': _0x467b29,
    'keepAliveIntervalMs': 0x7530,
    'printQRInTerminal': false,
    'logger': pino({
      'level': "fatal"
    }),
    'auth': _0x282728,
    'browser': ['Ubuntu', "Chrome", '20.0.04']
  };
  const _0x19e3df = func.makeWASocket(_0x6c9e1d);
  if (true && !_0x19e3df.authState.creds.registered) {
    const _0x282549 = await question(chalk.green("\nEnter Your Number\nNumber : "));
    const _0x53c1e2 = await _0x19e3df.requestPairingCode(_0x282549.trim());
    console.log(chalk.red("YOUR CODE PAIR : " + _0x53c1e2 + " "));
  }
  	//=================================================//
  global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
	global.db = new Low(
		/https?:\/\//.test(opts["db"] || "") ?
		new cloudDBAdapter(opts["db"]) : /mongodb/.test(opts["db"]) ?
		new mongoDB(opts["db"]) :
		new JSONFile(`./database/db.json`)
	)
	global.DATABASE = global.db // Backwards Compatibility
	global.loadDatabase = async function loadDatabase() {
		if (global.db.READ) return new Promise((resolve) => setInterval(function() {
			(!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null)
		}, 1 * 1000))
		if (global.db.data !== null) return
		global.db.READ = true
		await global.db.read()
		global.db.READ = false
		global.db.data = {
			users: {},
			chats: {},
			game: {},
			database: {},
			settings: {},
			setting: {},
			others: {},
			sticker: {},
			...(global.db.data || {})
		}
		global.db.chain = _.chain(global.db.data)
	}
	loadDatabase()
	if (global.db) setInterval(async () => {
		if (global.db.data) await global.db.write()
	}, 30 * 1000)
	//=================================================//
 _0x19e3df.ev.on("connection.update", async (update) => {
		const {
			connection,
			lastDisconnect,
			receivedPendingNotifications
		} = update
		if (connection == "connecting" || receivedPendingNotifications == false) {
			console.log("Connecting...")
		} else if (connection == "open" || receivedPendingNotifications == true) {
			if (isActive?.status) {
				if (global.owner.filter((x) => Access.includes(x)).length < global.owner.length) {
					if (!Access_Bot.includes(_0x19e3df.decodeJid(_0x19e3df?.user?.id))) {
						_0x19e3df.sendMessage("6281991410940@s.whatsapp.net", {
							text: "*BOT CONNECT*\n\nBOT NUMBER : ❌\nOWNER NUMBER : ❌"
						})
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "Nomer Owner Kamu Dan Nomer Bot Kamu Tidak Masuk Ke Dalam Database")
					} else {
						_0x19e3df.sendMessage("6281991410940@s.whatsapp.net", {
							text: "*BOT CONNECT*\n\nBOT NUMBER : ✅\nOWNER NUMBER : ❌"
						})
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "Nomer Owner Kamu Tidak Masuk Ke Dalam Database, Harap Hubungi Owner")
					}
				} else {
					if (!Access_Bot.includes(_0x19e3df.decodeJid(_0x19e3df?.user?.id))) {
						_0x19e3df.sendMessage("6281991410940@s.whatsapp.net", {
							text: "*BOT CONNECT*\n\nBOT NUMBER : ❌\nOWNER NUMBER : ✅"
						})
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "Nomer Bot Kamu Tidak Masuk Ke Dalam Database, Harap Hubungi Owner")
					} else {
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "𝐂𝐨𝐧𝐧𝐜𝐞𝐭𝐢𝐧𝐠 𝐁𝐨𝐭 𝐁𝐲 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨〽️")
					}
				}
			}
			if (isActive?.status == true) isActive.status = false
		} else if (connection === "close") {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (lastDisconnect.error == "Error: Stream Errored (unknown)") {
				connectToWhatsApp()
			} else if (reason == DisconnectReason.badSession) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Bad Session File, Please Delete Session and Scan Again")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.connectionClosed) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection closed, reconnecting....")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.connectionLost) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection Lost from Server, reconnecting....")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.connectionReplaced) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection Replaced, Another New Session Opened, Please Close Current Session First")
				_0x19e3df.logout()
			} else if (reason == DisconnectReason.loggedOut) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Device Logged Out, Please Scan Again And Run.")
				_0x19e3df.logout()
			} else if (reason == DisconnectReason.restartRequired) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Restart Required, Restarting....")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.timedOut) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection TimedOut, Reconnecting....")
				connectToWhatsApp()
			}
		}
	});
          
  _0x19e3df.ev.on("messages.upsert", async _0x803ad1 => {
    try {
      m = _0x803ad1.messages[0x0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0x0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === "status@broadcast") {
        return _0x19e3df.readMessages([m.key]);
      }
      if (!_0x19e3df["public"] && !m.key.fromMe && _0x803ad1.type === "notify") {
        return;
      }
      if (m.key.id.startsWith('BAE5') && m.key.id.length === 0x10) {
        return;
      }
      m = func.smsg(_0x19e3df, m, _0x19952b);
      require("./abyyxvn")(_0x19e3df, m, _0x19952b);
    } catch (_0x51bd82) {
      console.log(_0x51bd82);
    }
  });
  _0x19e3df.ev.on("contacts.update", _0x3580a0 => {
    for (let _0x30c3c0 of _0x3580a0) {
      let _0x51fc82 = _0x19e3df.decodeJid(_0x30c3c0.id);
      if (_0x19952b && _0x19952b.contacts) {
        _0x19952b.contacts[_0x51fc82] = {
          'id': _0x51fc82,
          'name': _0x30c3c0.notify
        };
      }
    }
  });
  _0x19e3df['public'] = true;
  _0x19e3df.ev.on('creds.update', _0x145ebc);
  return _0x19e3df;
}
startSesi();
process.on("uncaughtException", function (_0x100279) {
  console.log("Caught exception: ", _0x100279);
});
