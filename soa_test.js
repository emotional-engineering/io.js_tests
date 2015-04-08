var dns = require('dns');

dns.resolveSoa('example.org', function(err, soa){
    console.log(soa.nsname);
    dns.resolve4(soa.nsname, function (err, nameServers) {
        console.log(dns.getServers());
        dns.setServers(nameServers);
        console.log(dns.getServers());
    });
});