var dns = require('dns');
var async = require('async');

console.log('Initial servers:', dns.getServers());     

console.log('set google dns...');
dns.setServers(['8.8.8.8', '8.8.4.4']);

setTimeout(function() { 
    
    console.log('set opendns...');
    dns.setServers(['208.67.222.222', '208.67.220.220']); 
    
}, 1000);   

setTimeout(function() { 
    
    console.log('set yandex dns...');
    dns.setServers(['77.88.8.1', '77.88.8.2', '77.88.8.3']); 
    
}, 3000);

var requests = [];

for (var i = 0; i < 100; i++)
{
    requests.push(i);
}

async.map(requests, function(request, __callback){
    
    var request_str = request + '.bing.com';
    
    var timeout = request * 40;
    
    setTimeout(function() { 
        
        dns.resolve4(request_str, function(err, addresses, family) {
                                
            if (err)
            {
                console.log('ERROR: ', err['hostname'], ', current servers:', dns.getServers());
            }
            else
            {
                console.log('RESULT: ', request_str, ':', addresses, ', current servers:', dns.getServers());                
            }            
                                   
            __callback(false, true);
            
        });
    
    }, timeout);    
    
    
}, function(err, data){
    
    console.log('FINISH');
    
}); 