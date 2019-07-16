dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t safesitter-image ./bin/release/netcoreapp2.2/publish

docker tag safesitter-image registry.heroku.com/safesitter/web

docker push registry.heroku.com/safesitter/web

heroku container:release web -a safesitter

# sudo chmod 755 deploy.sh
# ./deploy.sh