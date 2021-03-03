
const ad                      = require('./polyrepo/cdr0-active-development')(module);
const grump                   = require('./polyrepo/cdr0-grumpy');

const grumpy  = new grump.Grumpy({pkgname: '@cdr0/ports', modname: 'ports', __filename});

// --------------------------------------------------------------------------------------------------------------------
module.exports = function (name) {

  const ports = {
    kafka: {
      development: {
        port: 9092,
        address: 'sparksb6-wsl2.cdr0.net',
      },
    },
    omega_server: {
      development: {
        port: 9880,
        address: 'sparksb6.cdr0.net',
      },
    },

    jimmy_neutron: {
      port: 3210,
      address: 'sparksb6.cdr0.net',
    },    /* for tests */
  };

  const projectConfig = ports[name];
  if (!projectConfig) {
    grumpy.says(`Do not know port ${name}.`);
    return; /* undefined */
  }

  // If we have something, and it is a number, use it for all sub-types
  if (typeof projectConfig.port === "number") {
    return projectConfig;
  }

  if (ad.isActiveDevelopment()) {
    return projectConfig.development;
  }

  grumpy.says(`Do not know port ${name}.`);
  return; /* undefined */
}
