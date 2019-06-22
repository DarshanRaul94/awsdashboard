
#! /bin/bash
sudo apt-get update
sudo apt install -y npm nodejs python-pip openjdk-8-jdk
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins
sudo ufw enable
sudo ufw allow 8080
sudo ufw allow 22