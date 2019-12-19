# Deploy smart contract on Kylin Testnet with LiquidApps

## Step 1: Create Account

```bash
curl http://faucet-kylin.blockzone.net/create/trinhtan1234
```

## Step 2: Faucet

```bash
curl http://faucet-kylin.blockzone.net/get_token/trinhtan1234
```

## Step 3: Create wallet by cleos

```bash
cleos wallet create -n trinhtan1234 --to-console
```

## Step 4: Unlock Wallet

```bash
cleos wallet unlock -n trinhtan1234
```

## Step 5: Import active private key

```bash
cleos wallet import -n trinhtan1234 --private-key ACTIVE_PRIVATE_KEY
```

## Step 6: Buy ram for account

```bash
cleos -u https://api.kylin.alohaeos.com:443  system buyram trinhtan1234 trinhtan1234 "50.0000 EOS" -p trinhtan1234@active
```

## Step 7: Deploy contract

```bash
cleos -u https://api.kylin.alohaeos.com:443 set contract trinhtan1234 contracts/eos/tzfe -p trinhtan1234@active
```

## Step 8: Faucet Dapp Token in https://kylin-dapp-faucet.liquidapps.io/

## Step 9: Stake for services

```bash
cleos -u https://kylin.eos.dfuse.io push transaction '{"delay_sec":0,"max_cpu_usage_ms":0,"actions":[{"account":"dappservices","name":"selectpkg","data":{"owner":"trinhtan1234","provider":"heliosselene","service":"accountless1","package":"accountless1"},"authorization":[{"actor":"trinhtan1234","permission":"active"}]}]}'

```

```bash
cleos -u https://kylin.eos.dfuse.io push transaction '{"delay_sec":0,"max_cpu_usage_ms":0,"actions":[{"account":"dappservices","name":"stake","data":{"from":"trinhtan1234","provider":"heliosselene","service":"accountless1","quantity":"10.0000 DAPP"},"authorization":[{"actor":"trinhtan1234","permission":"active"}]}]}'

```

## Step 10: Xvinit

```bash
cleos -u https://kylin.eos.dfuse.io push action trinhtan1234 xvinit '["5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"]' -p trinhtan1234
```

## Step 11: Set Permission Contract

```bash
export KYLIN_TEST_ACCOUNT=trinhtan1234
export KYLIN_TEST_PUBLIC_KEY=<ACTIVE_PUBLIC-KEY>
export EOS_ENDPOINT=https://kylin-dsp-2.liquidapps.io
```

```bash
cleos -u $EOS_ENDPOINT set account permission $KYLIN_TEST_ACCOUNT active "{\"threshold\":1,\"keys\":[{\"weight\":1,\"key\":\"$KYLIN_TEST_PUBLIC_KEY\"}],\"accounts\":[{\"permission\":{\"actor\":\"$KYLIN_TEST_ACCOUNT\",\"permission\":\"eosio.code\"},\"weight\":1}]}" owner -p $KYLIN_TEST_ACCOUNT@active

```
