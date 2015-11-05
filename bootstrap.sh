#!/usr/bin/env bash



#install apache
apt-get update
apt-get install aptitude
aptitude install -y apache2
aptitude install -y tomcat7
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi

#install Java
aptitude install -y openjdk-7-jdk
aptitude install -y nmap
aptitude install -y vim
aptitude install -y php5
aptitude install -y mysql-server
aptitude install -y mysql-client
aptitude install -y clang
aptitude install -y build-essential
aptitude install -y curl
aptitude install -y wget
aptitude install -y nodejs
aptitude install -y nodejs-legacy
aptitude install -y npm
aptitude install -y php5-cli
aptitude install -y php5-fpm
wget https://raw.githubusercontent.com/tkuipers/dotfiles/master/.bashrc -    O /home/vagrant/.bashrc
