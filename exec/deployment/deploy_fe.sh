cd dream-front
# yes | sudo docker system prune
tar -xvf frontend_0.1.0.tar
rm -rf frontend_0.1.0.tar
sudo docker compose down
sudo docker compose up -d --build
# sudo service nginx restart
