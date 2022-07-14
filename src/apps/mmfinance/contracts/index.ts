import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { MmfinanceChef__factory } from './ethers';
import { MmfinanceChefV2__factory } from './ethers';
import { MmfinanceIfoChef__factory } from './ethers';
import { MmfinanceMeerkatChef__factory } from './ethers';
import { MmfinancePair__factory } from './ethers';
import { MmfinanceSmartChef__factory } from './ethers';
import { MmfinanceSyrupMeerkat__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class MmfinanceContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  mmfinanceChef({ address, network }: ContractOpts) {
    return MmfinanceChef__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  mmfinanceChefV2({ address, network }: ContractOpts) {
    return MmfinanceChefV2__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  mmfinanceIfoChef({ address, network }: ContractOpts) {
    return MmfinanceIfoChef__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  mmfinanceMeerkatChef({ address, network }: ContractOpts) {
    return MmfinanceMeerkatChef__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  mmfinancePair({ address, network }: ContractOpts) {
    return MmfinancePair__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  mmfinanceSmartChef({ address, network }: ContractOpts) {
    return MmfinanceSmartChef__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  mmfinanceSyrupMeerkat({ address, network }: ContractOpts) {
    return MmfinanceSyrupMeerkat__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { MmfinanceChef } from './ethers';
export type { MmfinanceChefV2 } from './ethers';
export type { MmfinanceIfoChef } from './ethers';
export type { MmfinanceMeerkatChef } from './ethers';
export type { MmfinancePair } from './ethers';
export type { MmfinanceSmartChef } from './ethers';
export type { MmfinanceSyrupMeerkat } from './ethers';