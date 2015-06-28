var config = {};

/**
 * irc configuration
 */

config.server = {
    'address': 'irc.mozilla.org',   // irc server address
    'port': 6667,                   // irc server port
    'nick': 'Felix',                // irc nick to use
    'chan': '#india',         // irc channel to join
    'secure': false,                // use ssl when connecting?
    'selfSigned': false,            // accept self-signed certificates?
    'certExpired': false,           // accept expired certificates?
    'debug': false                  // enable node-irc debugging?
};

// relay all messages or only hilighted ones?
config.relayAll = false;

// hilight detection regexp, with irc message as input
// message within first capturing paretheses, (.*) in default, is relayed to TG
config.hilight_re = new RegExp('^' + config.realNick + '[:,]? +(.*)$', 'i');

/**
 * telegram configuration
 */

// path to telegram-cli binary
config.tgcli_path = '/home/myuser/src/tg/bin/telegram-cli';

// path to telegram server pubkey
config.tgpubkey_path = '/home/myuser/src/tg/tg-server.pub';

// telegram group chat name
config.tgchat = 'myAwesomeGroupChat';

// telegram name used by the configured tel number, checked to prevent sending
// a message from irc -> telegram -> back to irc
config.tgnick = 'Firstname Lastname';

module.exports = config;
