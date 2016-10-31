import { UpgradeAdapter } from '@angular/upgrade';
import { NgModule } from '@angular/core';

@NgModule({})

// Bypass upgradeNg1Component cyclical problem
// https://github.com/angular/angular/issues/11069
class DummyModule{}


export let upgradeAdapter = new UpgradeAdapter(DummyModule);