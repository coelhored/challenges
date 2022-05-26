function domainName(url){
    let domain = url.replace('https://','')
    domain = domain.replace('http://','')
    domain = domain.replace('www.','');
    domain = domain.split(".")
    return domain[0];
  }