#!/bin/bash

# ./deploy <account> <private> <public>

account=$1
private_key=$2
public_key=$3

cleos wallet import -n $account --private-key $private_key


cleos -u https://api.kylin.alohaeos.com:443 system buyram $account $account "50.0000 EOS" -p $account@active
cleos -u https://api.kylin.alohaeos.com:443 system buyram $account $account "50.0000 EOS" -p $account@active

cleos -u https://api.kylin.alohaeos.com:443 set contract $account contracts/eos/tzfe -p $account@active


cleos -u https://kylin.eos.dfuse.io push transaction "{\"delay_sec\":0,\"max_cpu_usage_ms\":0,\"actions\":[{\"account\":\"dappservices\",\"name\":\"selectpkg\",\"data\":{\"owner\":\"$account\",\"provider\":\"heliosselene\",\"service\":\"accountless1\",\"package\":\"accountless1\"},\"authorization\":[{\"actor\":\"$account\",\"permission\":\"active\"}]}]}"
cleos -u https://kylin.eos.dfuse.io push transaction "{\"delay_sec\":0,\"max_cpu_usage_ms\":0,\"actions\":[{\"account\":\"dappservices\",\"name\":\"stake\",\"data\":{\"from\":\"$account\",\"provider\":\"heliosselene\",\"service\":\"accountless1\",\"quantity\":\"10.0000 DAPP\"},\"authorization\":[{\"actor\":\"$account\",\"permission\":\"active\"}]}]}"


cleos -u https://kylin.eos.dfuse.io push action $account xvinit '["5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"]' -p $account


export KYLIN_TEST_ACCOUNT=$account
export KYLIN_TEST_PUBLIC_KEY=$public_key
export EOS_ENDPOINT=https://kylin-dsp-2.liquidapps.io

cleos -u $EOS_ENDPOINT set account permission $KYLIN_TEST_ACCOUNT active "{\"threshold\":1,\"keys\":[{\"weight\":1,\"key\":\"$KYLIN_TEST_PUBLIC_KEY\"}],\"accounts\":[{\"permission\":{\"actor\":\"$KYLIN_TEST_ACCOUNT\",\"permission\":\"eosio.code\"},\"weight\":1}]}" owner -p $KYLIN_TEST_ACCOUNT@active
