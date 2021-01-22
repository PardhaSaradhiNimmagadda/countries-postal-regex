// Country list source: https://www.dhl.com/en/country_profile.html#.XwODEJNKjOQ
// Country source: https://planetarynames.wr.usgs.gov/codeiations
// tslint:disable-next-line: max-line-length
// Postal code: https://gist.githubusercontent.com/jamesbar2/1c677c22df8f21e869cca7e439fc3f5b/raw/21662445653ac861f8ab81caa8cfaee3185aed15/postal-codes.json
// Postal code: https://en.wikipedia.org/wiki/List_of_postal_codes

// Country/territory items with no postal code regex either do not require postal codes
// or there may not be enough information for that country/territory

import { ICountryPostalRegEx } from 'constants/countries-postal.constant';

export const globalCountryPostalRegEx: ICountryPostalRegEx[] = [
  {
    code: 'AF',
    name: 'Afghanistan',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'AL',
    name: 'Albania',
    postal: /(120|122)[0-9]{2}/g,
  },
  {
    code: 'DZ',
    name: 'Algeria',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'AS',
    name: 'American Samoa',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'AD',
    name: 'Andorra',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'AO',
    name: 'Angola',
  },
  {
    code: 'AI',
    name: 'Anguilla',
    postal: /AI-2640/g,
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
  },
  {
    code: 'AR',
    name: 'Argentina',
    postal: /[A-Z]{1}[0-9]{4}[A-Z]{3}/g,
  },
  {
    code: 'AM',
    name: 'Armenia',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'AW',
    name: 'Aruba',
  },
  {
    code: 'AU',
    name: 'Australia',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'AT',
    name: 'Austria',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'BS',
    name: 'Bahamas',
  },
  {
    code: 'BH',
    name: 'Bahrain',
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'BB',
    name: 'Barbados',
    postal: /BB[0-9]{5}/g,
  },
  {
    code: 'BY',
    name: 'Belarus',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'BE',
    name: 'Belgium',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'BZ',
    name: 'Belize',
  },
  {
    code: 'BJ',
    name: 'Benin',
  },
  {
    code: 'BM',
    name: 'Bermuda',
    postal: /[A-Z]{2}[0-9]{2}/g,
  },
  {
    code: 'BT',
    name: 'Bhutan',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'BO',
    name: 'Bolivia',
  },
  {
    code: 'BQ',
    name: 'Bonaire',
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'BW',
    name: 'Botswana',
  },
  {
    code: 'BR',
    name: 'Brazil',
    postal: /[0-9]{5}-[0-9]{3}/g,
  },
  {
    code: 'BN',
    name: 'Brunei',
    postal: /[A-Z]{2}[0-9]{4}/g,
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
  },
  {
    code: 'BI',
    name: 'Burundi',
  },
  {
    code: 'KH',
    name: 'Cambodia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'CM',
    name: 'Cameroon',
  },
  {
    code: 'CA',
    name: 'Canada',
    postal: /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/g,
  },
  {
    code: 'CI',
    name: 'Canary Islands',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'CV',
    name: 'Cape Verde',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'KY',
    name: 'Cayman Islands',
    postal: /[A-Z]{2}[0-9]-[0-9]{4}/g,
  },
  {
    code: 'CF',
    name: 'Central African Republic',
  },
  {
    code: 'TD',
    name: 'Chad',
  },
  {
    code: 'CI',
    name: 'Channel Islands',
    postal: /[A-Z]{2}[0-9]{2}/g,
  },
  {
    code: 'CL',
    name: 'Chile',
    postal: /[0-9]{7}/g,
  },
  {
    code: 'CN',
    name: 'China, Peoples Republic',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'CO',
    name: 'Colombia',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'KM',
    name: 'Comoros',
  },
  {
    code: 'CG',
    name: 'Congo',
  },
  {
    code: 'CD',
    name: 'Congo, The Democratic Republic of',
  },
  {
    code: 'CK',
    name: 'Cook Islands',
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'CI',
    name: 'Côte dIvoire',
  },
  {
    code: 'HR',
    name: 'Croatia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'CU',
    name: 'Cuba',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'CW',
    name: 'Curacao',
  },
  {
    code: 'CY',
    name: 'Cyprus',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    postal: /[0-9]{3} [0-9]{2}/g,
  },
  {
    code: 'DK',
    name: 'Denmark',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'DJ',
    name: 'Djibouti',
  },
  {
    code: 'DM',
    name: 'Dominica',
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'TL',
    name: 'East Timor',
  },
  {
    code: 'EC',
    name: 'Ecuador',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'EG',
    name: 'Egypt',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'SV',
    name: 'El Salvador',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'ER',
    name: 'Eritrea',
  },
  {
    code: 'EE',
    name: 'Estonia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'FK',
    name: 'Falkland Islands',
    postal: /FIQQ 1ZZ/g,
  },
  {
    code: 'FO',
    name: 'Faroe Islands',
    postal: /[0-9]{3}/g,
  },
  {
    code: 'FJ',
    name: 'Fiji',
  },
  {
    code: 'FI',
    name: 'Finland',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'FR',
    name: 'France',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'PF',
    name: 'French Polynesia',
    postal: /987[0-9]{2}/g,
  },
  {
    code: 'GA',
    name: 'Gabon',
  },
  {
    code: 'GM',
    name: 'Gambia',
  },
  {
    code: 'GE',
    name: 'Georgia',
  },
  {
    code: 'DE',
    name: 'Germany',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'GH',
    name: 'Ghana',
  },
  {
    code: 'GI',
    name: 'Gibraltar',
    postal: /GX11 1AA/g,
  },
  {
    code: 'GR',
    name: 'Greece',
    postal: /[0-9]{3} [0-9]{2}/g,
  },
  {
    code: 'GL',
    name: 'Greenland',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'GD',
    name: 'Grenada',
  },
  {
    code: 'GP',
    name: 'Guadeloupe',
    postal: /971[0-9]{2}/g,
  },
  {
    code: 'GU',
    name: 'Guam',
    // US postal code
    // https://stackoverflow.com/questions/2577236/regex-for-zip-code
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'GT',
    name: 'Guatemala',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'GG',
    name: 'Guernsey',
    // UK postal code
    // https://stackoverflow.com/questions/164979/regex-for-matching-uk-postcodes
    postal: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/g,
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'GQ',
    name: 'Guinea-Equatorial',
  },
  {
    code: 'GN',
    name: 'Guinea Republic',
    postal: /[0-9]{3}/g,
  },
  {
    code: 'GY',
    name: 'Guyana (British)',
  },
  {
    code: 'GF',
    name: 'Guyana (French)',
    postal: /973[0-9]{2}/g,
  },
  {
    code: 'HT',
    name: 'Haiti',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'HN',
    name: 'Honduras',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'HK',
    name: 'Hong Kong',
  },
  {
    code: 'HU',
    name: 'Hungary',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'IS',
    name: 'Iceland',
    postal: /[0-9]{3}/g,
  },
  {
    code: 'IN',
    name: 'India',
    // https://stackoverflow.com/questions/33865525/indian-pincode-validation-regex-only-six-digits-shouldnt-start-with-0
    postal: /^[1-9][0-9]{5}$/g,
  },
  {
    code: 'ID',
    name: 'Indonesia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'IR',
    name: 'Iran',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'IQ',
    name: 'Iraq',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'IE',
    name: 'Ireland, Republic of',
    // https://stackoverflow.com/questions/33391412/validation-for-irish-eircode
    postal: /(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/g,
  },
  {
    code: 'FK',
    name: 'Islas Malvinas',
    postal: /FIQQ 1ZZ/g,
  },
  {
    code: 'IL',
    name: 'Israel',
    postal: /[0-9]{5}|[0-9]{7}/g,
  },
  {
    code: 'IT',
    name: 'Italy',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'CI',
    name: 'Ivory Coast',
  },
  {
    code: 'JM',
    name: 'Jamaica',
  },
  {
    code: 'JP',
    name: 'Japan',
    postal: /[0-9]{3}-[0-9]{4}/g,
  },
  {
    code: 'JE',
    name: 'Jersey',
    postal: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/g,
  },
  {
    code: 'JO',
    name: 'Jordan',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'KE',
    name: 'Kenya',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'KI',
    name: 'Kiribati',
  },
  {
    code: 'KR',
    name: 'Korea, Republic of',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'KP',
    name: 'Korea, The D.P.R of',
  },
  {
    code: 'XK',
    name: 'Kosovo',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'KW',
    name: 'Kuwait',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'LA',
    name: 'Laos',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'LV',
    name: 'Latvia',
    postal: /LV-[0-9]{4}/g,
  },
  {
    code: 'LB',
    name: 'Lebanon',
    postal: /[0-9]{4} [0-9]{4}/g,
  },
  {
    code: 'LS',
    name: 'Lesotho',
    postal: /[0-9]{3}/g,
  },
  {
    code: 'LR',
    name: 'Liberia',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'LY',
    name: 'Libya',
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'LT',
    name: 'Lithuania',
    postal: /LT-[0-9]{5}/g,
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'MO',
    name: 'Macau',
  },
  {
    code: 'MK',
    name: 'Macedonia, Republic of',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'MG',
    name: 'Madagascar',
    postal: /[0-9]{3}/g,
  },
  {
    code: 'MW',
    name: 'Malawi',
  },
  {
    code: 'MY',
    name: 'Malaysia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'MV',
    name: 'Maldives',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'ML',
    name: 'Mali',
  },
  {
    code: 'MT',
    name: 'Malta',
    postal: /[A-Z]{3} [0-9]{4}/g,
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'MQ',
    name: 'Martinique',
    postal: /972[0-9]{2}/g,
  },
  {
    code: 'MR',
    name: 'Mauritania',
  },
  {
    code: 'MU',
    name: 'Mauritius',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'YT',
    name: 'Mayotte',
    postal: /976[0-9]{2}/g,
  },
  {
    code: 'MX',
    name: 'Mexico',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'MD',
    name: 'Moldova, Republic of',
    postal: /MD-?[0-9]{4}/g,
  },
  {
    code: 'MC',
    name: 'Monaco',
    postal: /980[0-9]{2}/g,
  },
  {
    code: 'MN',
    name: 'Mongolia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'ME',
    name: 'Montenegro',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'MS',
    name: 'Montserrat',
    postal: /MSR [0-9]{4}/g,
  },
  {
    code: 'MA',
    name: 'Morocco',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'MM',
    name: 'Myanmar',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'NA',
    name: 'Namibia',
  },
  {
    code: 'NR',
    name: 'Nauru',
  },
  {
    code: 'NP',
    name: 'Nepal',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'NL',
    name: 'Netherlands',
    // https://rgxdb.com/r/4W9GV8AC
    postal: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
  },
  {
    code: 'NC',
    name: 'New Caledonia',
    postal: /988[0-9]{2}/g,
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'NI',
    name: 'Nicaragua',
  },
  {
    code: 'NE',
    name: 'Niger',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'NG',
    name: 'Nigeria',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'NU',
    name: 'Niue',
  },
  {
    code: 'MP',
    name: 'Northern Mariana Islands',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'NO',
    name: 'Norway',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'OM',
    name: 'Oman',
    postal: /[0-9]{3}/g,
  },
  {
    code: 'PK',
    name: 'Pakistan',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'PW',
    name: 'Palau',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'PA',
    name: 'Panama',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    postal: /[0-9]{3}/g,
  },
  {
    code: 'PY',
    name: 'Paraguay',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'PE',
    name: 'Peru',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'PH',
    name: 'Philippines',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'PL',
    name: 'Poland',
    postal: /[0-9]{2}-[0-9]{3}/g,
  },
  {
    code: 'PT',
    name: 'Portugal',
    postal: /[0-9]{4}-[0-9]{3}/g,
  },
  {
    code: 'PR',
    name: 'Puerto Rico',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'QA',
    name: 'Qatar',
  },
  {
    code: 'RE',
    name: 'Réunion',
    postal: /974[0-9]{2}/g,
  },
  {
    code: 'RO',
    name: 'Romania',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'RU',
    name: 'Russian Federation',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'RW',
    name: 'Rwanda',
  },
  {
    code: 'MP',
    name: 'Saipan',
    postal: /96950/g,
  },
  {
    code: 'WS',
    name: 'Samoa',
    postal: /WS[0-9]{4}/g,
  },
  {
    code: 'ST',
    name: 'Sao Tome and Principe',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    postal: /[0-9]{5}(-[0-9]{4})?/g,
  },
  {
    code: 'SN',
    name: 'Senegal',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'RS',
    name: 'Serbia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'SC',
    name: 'Seychelles',
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
  },
  {
    code: 'SG',
    name: 'Singapore',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'SK',
    name: 'Slovakia',
    postal: /[0-9]{3} [0-9]{2}/g,
  },
  {
    code: 'SI',
    name: 'Slovenia',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
  },
  {
    code: 'SO',
    name: 'Somalia',
    postal: /[A-Z]{2} [0-9]{5}/g,
  },
  {
    code: 'ZA',
    name: 'South Africa',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'SS',
    name: 'South Sudan',
  },
  {
    code: 'ES',
    name: 'Spain',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'BL',
    name: 'St. Barthélemy',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'VI',
    name: 'St. Croix',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'SE',
    name: 'St. Eustatius',
  },
  {
    code: 'SH',
    name: 'St. Helena',
    postal: /STHL 1ZZ/g,
  },
  {
    code: 'AG',
    name: 'St. John',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'KN',
    name: 'St. Kitts and Nevis',
    postal: /[A-Z]{2}[0-9]{4}/g,
  },
  {
    code: 'LC',
    name: 'St. Lucia',
    postal: /[A-Z]{2}[0-9]{2} [0-9]{3}/g,
  },
  {
    code: 'SX',
    name: 'St. Maarten',
  },
  {
    code: 'VI',
    name: 'St. Thomas',
  },
  {
    code: 'VC',
    name: 'St. Vincent and the Grenadines',
    postal: /VC[0-9]{4}/g,
  },
  {
    code: 'SD',
    name: 'Sudan',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'SR',
    name: 'Suriname',
  },
  {
    code: 'SZ',
    name: 'Swaziland',
    postal: /[A-Z]{1}[0-9]{3}/g,
  },
  {
    code: 'SE',
    name: 'Sweden',
    postal: /[0-9]{3} [0-9]{2}/g,
  },
  {
    code: 'CH',
    name: 'Switzerland',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'SY',
    name: 'Syria',
  },
  {
    code: 'PF',
    name: 'Tahiti',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'TW',
    name: 'Taiwan',
    postal: /[0-9]{3}(-[0-9]{2})?/g,
  },
  {
    code: 'TZ',
    name: 'Tanzania',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'TH',
    name: 'Thailand',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'TG',
    name: 'Togo',
  },
  {
    code: 'TO',
    name: 'Tonga',
  },
  {
    code: 'VG',
    name: 'Tortola',
    postal: /VG[0-9]{4}/g,
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'TN',
    name: 'Tunisia',
    postal: /[0-9]{4}/g,
  },
  {
    code: 'TR',
    name: 'Turkey',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'TC',
    name: 'Turks and Caicos Islands',
    postal: /TKCA 1ZZ/g,
  },
  {
    code: 'TV',
    name: 'Tuvalu',
  },
  {
    code: 'UG',
    name: 'Uganda',
  },
  {
    code: 'UA',
    name: 'Ukraine',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    postal: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/g,
  },
  {
    code: 'US',
    name: 'United States of America',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'UY',
    name: 'Uruguay',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'VU',
    name: 'Vanuatu',
  },
  {
    code: 'VE',
    name: 'Venezuela',
    postal: /[0-9]{4}(-[A-Z]{1})?/g,
  },
  {
    code: 'VN',
    name: 'Vietnam',
    postal: /[0-9]{6}/g,
  },
  {
    code: 'VG',
    name: 'Virgin Islands (British)',
    postal: /VG[0-9]{4}/g,
  },
  {
    code: 'VI',
    name: 'Virgin Islands (US)',
    postal: /^\d{5}(?:[-\s]\d{4})?$/g,
  },
  {
    code: 'YE',
    name: 'Yemen',
  },
  {
    code: 'ZM',
    name: 'Zambia',
    postal: /[0-9]{5}/g,
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
  },
];
