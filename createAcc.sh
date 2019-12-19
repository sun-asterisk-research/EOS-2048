#!/bin/bash

account=$1

curl http://faucet-kylin.blockzone.net/create/$account

for value in {1..5}
do
    curl http://faucet-kylin.blockzone.net/get_token/$account
done

cleos wallet create -n $account --to-console

cleos wallet unlock -n $account

