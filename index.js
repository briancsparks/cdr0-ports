
const ad                      = require('./polyrepo/cdr0-active-development')(module);
const grump                   = require('./polyrepo/cdr0-grumpy');

const grumpy  = new grump.Grumpy({pkgname: '@cdr0/ports', modname: 'ports', __filename});

// --------------------------------------------------------------------------------------------------------------------
module.exports = function (name) {

  const ports = {
    kafka: {},
    omega_server: {
      development: 9880,
    },

    jimmy_neutron: 3210,    /* for tests */
  };

  const projectConfig = ports[name];
  if (!projectConfig) {
    grumpy.says(`Do not know port ${name}.`);
    return; /* undefined */
  }

  // If we have something, and it is a number, use it for all sub-types
  if (typeof projectConfig === "number") {
    return projectConfig;
  }

  if (ad.isActiveDevelopment()) {
    return projectConfig.development;
  }

  grumpy.says(`Do not know port ${name}.`);
  return; /* undefined */
}
