
while true; do
    nc -z 127.0.0.1 8114
    if [[ $? != 0 ]]; then
	echo "Restart NFT marketplace API."
	cd /home/8114/NFT_Marketplace;
	nohup npm start &
    fi
    sleep 3;
done
