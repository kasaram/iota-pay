



//export const codes = {
//PUBLIC API ERRORS
export const NO_ORIGIN_MESSAGE = 901;
export const NO_PAYMENT_MESSAGE = 902;
export const NO_COM_MESSAGE = 903;
export const NO_PAYMENT_CHANNEL = 904;
export const PREFERRED_SERVERS_DOWN = 905;
export const NO_ADDRESS = 906;
export const TERMINATED = 907;
//PUBLIC API WARNINGS
export const INVALID_SIGNATURE = 801;
export const INVALID_MESSAGESCHEMA = 802;
export const SERVER_UNREACHABLE = 803;
export const SERVER_HIGH_PING = 804;
//PUBLIC API INFO
export const PICKING_SERVERS = 501;
export const SERVERS_SELECTED = 502;
export const READING_REFERENCE = 503;
export const COM_MESSAGE_FOUND = 504;
export const PAYMENT_CHANNEL_FOUND = 505;
export const READING_PAYMENT_CHANNEL = 506;
export const PAYMENT_CHANNEL_READ = 507;
export const SELECTING_CANDIDATE = 508;
export const POTENTIAL_ADDRESS_SELECTED = 509;
export const START_VALIDATION = 510;
export const VALIDATION_STARTED = 511;
export const VALIDATION_SUCCESS = 512;
export const VALIDATION_FAILED = 513;
export const ADDRESS_SELECTED = 514;
//Private API ERROR Range = 400
export const NO_POW_SERVER_AVAILABLE = 401;
//PRIVATE API WARNING Range = 300

export const NON_JSON_TRANSACTION_FOUND = 302;
//Private API INFO Range = 100
export const PREPARING_ORIGIN_MESSAGE = 101;
export const SENDING_ORIGIN_MESSAGE = 102;
export const READING_REFERENCE_PRIVATE = 103;
export const PREPARING_COM_CONTROL_MESSAGE = 104;
export const SENDING_COM_CONTROL_MESSAGE = 105;
export const PREPARING_PAYMENT_CHANNEL_MESSAGE = 106;

export const PREPARING_ADD_LIST_MESSAGE = 107;
export const SENDING_ADD_LIST_MESSAGE = 108;

export const GENERATING_ADDRESSES = 109;
export const ADDRESS_GENERATED = 110;
export const GENERATING_ADDRESSES_DONE = 111;
export const SENDING_PAYMENT_CHANNEL_MESSAGE = 112;

export const PREPARING_SIGNAL_STOP = 113;
export const SENDING_SIGNAL_STOP = 114;
//}