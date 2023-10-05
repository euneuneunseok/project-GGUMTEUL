cd dream-data

cp .env /home/ubuntu/dream-data/dataend/

cp googleKey.json /home/ubuntu/dream-data/dataend/

cd dataend

pip install -r requirements.txt

nohup uvicorn main:app --host 0.0.0.0 --port 8000 > myapp.log 2>&1 &



