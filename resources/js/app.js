/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue'

import { keygen } from '@analog-labs/timegraph-js';
import { web3Enable,web3FromAddress } from '@polkadot/extension-dapp';
const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

const extensions = await web3Enable('my cool dapp');
// init signer based on polkadot/extension-dapp
const { signer } = await web3FromAddress( '' );
// pass signer and address to get keygen instance

console.log(signer);

const _keygen = new keygen({ signer: signer.signRaw,address: ''});
// generate api key i.e, role is optional default will be developer                             
console.log( _keygen);
//const apikey = await _keygen.createApiKey()
//Generate the session key
const sessionKey = await _keygen.createSessionkey("30000");


app.mount('#app');
