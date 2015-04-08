var dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

var resolve_domain = 'google.com';

dns.resolve4(resolve_domain, function(err, addresses, family) {
    
    if (err)
    {
        console.log(resolve_domain, 'resolve4 error:');
        console.log(err);
    }
    else
    {
        console.log(resolve_domain, 'resolve4:', addresses[0]);      
    }    
    
    console.log('current servers:', dns.getServers());  
        
    dns.setServers(['77.88.8.1', '77.88.8.2', '77.88.8.3']);    
    
    resolve_domain = 'google.com';
    
    dns.resolve4(resolve_domain, function(err, addresses, family) {
        
        if (err)
        {
            console.log(resolve_domain, 'resolve4 error:');
            console.log(err);
        }
        else
        {
            console.log(resolve_domain, 'resolve4:', addresses[0]);      
        }   
        
        console.log('current servers:', dns.getServers());  
                                                                
        dns.setServers(['4.3.2.2']); // Server unreachable, will give error   
            
        resolve_domain = 'google.com';
        
        console.log('wait error...');
        
        dns.resolve4(resolve_domain, function(err, addresses, family) {
                
                                                                    
            if (err)
            {
                    console.log(resolve_domain, 'resolve4 error:');
                    console.log(err);
            }
            else
            {
                    console.log(resolve_domain, 'resolve4:', addresses[0]);      
            }                    
          
            console.log('current servers:', dns.getServers());     
                                
            dns.setServers(['208.67.222.222', '208.67.220.220']);
        
            resolve_domain = 'www.v6.facebook.com';
                
            dns.resolve6(resolve_domain, function(err, addresses, family) {
            
                if (err)
                {
                    console.log(resolve_domain, 'resolve6 error:');
                    console.log(err);
                }
                else
                {
                    console.log(resolve_domain, 'resolve6:', addresses[0]);      
                }           
                
                console.log('current servers:', dns.getServers());                  
          
                //dns.setServers(['2001:4860:4860::8888']); /* ipv6 test need */  
                       
            });
        });        
    });
});
