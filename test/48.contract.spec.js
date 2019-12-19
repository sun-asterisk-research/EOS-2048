import 'mocha';
require('babel-core/register');
require('babel-polyfill');
const { assert } = require('chai'); // Using Assert style
const { getCreateKeys } = require('../extensions/helpers/key-utils');
const { getNetwork } = require('../extensions/tools/eos/utils');
var Eos = require('eosjs');
const getDefaultArgs = require('../extensions/helpers/getDefaultArgs');
const { getLocalDSPEos, getTestContract } = require('../extensions/tools/eos/utils');

const artifacts = require('../extensions/tools/eos/artifacts');
const deployer = require('../extensions/tools/eos/deployer');
const { genAllocateDAPPTokens, readVRAMData } = require('../extensions/tools/eos/dapp-services');
const { loadModels } = require('../extensions/tools/models');

var contractCode = '48';
var ctrt = artifacts.require(`./${contractCode}/`);
const delay = ms => new Promise(res => setTimeout(res, ms));

describe(`${contractCode} Contract`, () => {
    var testcontract;

    var testUser = "tt11";

    const getTestAccountName = (num) => {
        var fivenum = num.toString(5).split('');
        for (var i = 0; i < fivenum.length; i++) {
            fivenum[i] = String.fromCharCode(fivenum[i].charCodeAt(0) + 1);
        }
        fivenum = fivenum.join('');
        var s = '111111111111' + fivenum;
        var prefix = 'test';
        s = prefix + s.substr(s.length - (12 - prefix.length));
        console.log(s);
        return s;
    };
    const code = getTestAccountName(Math.floor(Math.random() * 1000));
    var account = code;
    var chainId;
    var endpoint;
    before(done => {
        (async() => {
            try {
                var deployedContract = await deployer.deploy(ctrt, code);
                const services = await loadModels('dapp-services');
                for (var i = 0; i < services.length; i++) {
                    var service = services[i];
                    await genAllocateDAPPTokens(deployedContract, service.name);
                }
                // create token
                endpoint = "http://localhost:13015";
                var testcontract = await getTestContract(code);

                let info = await rpc.get_info();
                chainId = info.chain_id;
                let res = await testcontract.xvinit({
                    chainid: chainId
                }, {
                    authorization: `${code}@active`,
                });

                var selectedNetwork = getNetwork(getDefaultArgs());
                var config = {
                    expireInSeconds: 120,
                    sign: true,
                    chainId: selectedNetwork.chainId
                };
                if (account) {
                    var keys = await getCreateKeys(account);
                    config.keyProvider = keys.active.privateKey;
                }
                var eosvram = deployedContract.eos;
                config.httpEndpoint = 'http://localhost:13015';
                eosvram = new Eos(config);

                testcontract = await eosvram.contract(code);
                done();
            }
            catch (e) {
                done(e);
            }
        })();
    });

    it('test1', done => {
        (async() => {
            try {
                done();
            }
            catch (e) {
                done(e);
            }
        })();
    });


});
