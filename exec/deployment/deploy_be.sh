cd dream-back
sudo docker compose down
sudo docker compose up -d --build
yes | sudo docker system prune
