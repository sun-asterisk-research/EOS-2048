import { getClient } from '../helpers/getClient';
import * as ecc from 'eosjs-ecc';
import * as ecies from 'standard-ecies';

require('dotenv').config();
const crypto = require('crypto');

const contract = 'trintan5555';
console.log('contract', contract);
class ApiService {
  static encrypt(message) {
    let pubKey = ecc.privateToPublic(localStorage.getItem('user_key'));
    const pubBuffer = ecc
      .PublicKey(pubKey)
      .toUncompressed()
      .toBuffer();
    const messageBuffer = Buffer.from(message, 'utf8');
    const encryptedBuffer = ecies.encrypt(pubBuffer, messageBuffer);
    return encryptedBuffer;
  }

  static decrypt(encryptArr) {
    if (!encryptArr) return [];
    let decryptArr = [];
    for (let i = 0; i < encryptArr.length; i++) {
      const wif = localStorage.getItem('user_key');
      const ecdh = crypto.createECDH('secp256k1');
      const privBuffer = ecc.PrivateKey(wif).toBuffer();
      ecdh.setPrivateKey(privBuffer);
      let encryptBuffer = Buffer.from(encryptArr[i].toLowerCase(), 'hex');
      decryptArr.push(ecies.decrypt(ecdh, encryptBuffer).toString());
    }
    return decryptArr;
  }

  static async register({ username, key }) {
    const service = await (await getClient()).service('vaccounts', contract);
    return new Promise((resolve, reject) => {
      localStorage.setItem('user_account', username);
      localStorage.setItem('user_key', key);
      service
        .push_liquid_account_transaction(contract, key, 'regaccount', {
          vaccount: username
        })
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static async login() {
    const service = await (await getClient()).service('vaccounts', contract);
    var username = localStorage.getItem('user_account');
    const key = localStorage.getItem('user_key');
    return new Promise((resolve, reject) => {
      service
        .push_liquid_account_transaction(contract, key, 'login', {
          vaccount: username
        })
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static async endgame(score) {
    const service = await (await getClient()).service('vaccounts', contract);
    let key = localStorage.getItem('user_key');
    let account = localStorage.getItem('user_account');

    return new Promise((resolve, reject) => {
      service
        .push_liquid_account_transaction(contract, key, 'endgame', {
          date: '2019',
          vaccount: account,
          score: score
        })
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static async sortrank(score) {
    const service = await (await getClient()).service('vaccounts', contract);
    let key = localStorage.getItem('user_key');
    let account = localStorage.getItem('user_account');

    return new Promise((resolve, reject) => {
      service
        .push_liquid_account_transaction(contract, key, 'sortrank', {
          date: '2020',
          vaccount: account,
          score: score
        })
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static async getCharts() {
    const service = await (await getClient()).service('ipfs', contract);
    const response = await service.get_vram_row(contract, contract, 'charts', 2020);
    console.log('res', response);
    return response.row.top;
  }

  static async getScore(account) {
    const service = await (await getClient()).service('ipfs', contract);
    const response = await service.get_vram_row(contract, contract, 'users', account);
    console.log(response);
    return response;
  }
}

export default ApiService;
