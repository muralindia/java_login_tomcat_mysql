From tomcat

COPY target/account-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/application.war

CMD ["catalina.sh", "run"]
