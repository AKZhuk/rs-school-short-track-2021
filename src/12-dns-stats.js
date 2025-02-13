/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 * let length = element.length;
      do {
        element = element.split('');
        length = element.indexOf('.');
        const substring = element.slice(length);
        element = element.splice(length + 1);
        domainsObj[substring]
          ? (domainsObj[substring] += 1)
          : (domainsObj[substring] = 1);
      } while (element.lastIndexOf('.') !== -1);
 *
 */

function getDNSStats(domains) {
  const domainsObj = {};
  if (domains.length !== 0) {
    domains.forEach((strDomains) => {
      const arrDomains = strDomains.split('.').reverse();
      let substring = '';
      let i = 0;
      while (i < arrDomains.length) {
        substring += `.${arrDomains[i]}`;
        if (domainsObj[substring]) {
          domainsObj[substring] += 1;
        } else {
          domainsObj[substring] = 1;
        }
        i++;
      }
    });
  }
  return domainsObj;
}

module.exports = getDNSStats;
