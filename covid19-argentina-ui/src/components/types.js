/**
 * Covid stats
 * @typedef {Object} Stats
 * @property {number} cases
 * @property {number} recovered
 * @property {number} deaths
 */

/**
 * The data stats of each province
 * @typedef {Stats[]} provincesData
 */

/**
 * Country chronology stats
 * @typedef {(Stats & {date: string})[]} countryStats
 */

/**
 * Svg data for the map
 * @typedef {Object} mapData
 * @property {string} id the id for the dvg
 * @property {string} name the name of the country
 * @property {string} viewBox svg property
 * @property {{ id: string, name: string, d: string, cases: number}[]} layers data of each zone
 */
