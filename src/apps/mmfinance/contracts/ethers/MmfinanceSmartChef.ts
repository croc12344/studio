/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface MmfinanceSmartChefInterface extends utils.Interface {
  functions: {
    'PRECISION_FACTOR()': FunctionFragment;
    'SMART_CHEF_FACTORY()': FunctionFragment;
    'accTokenPerShare()': FunctionFragment;
    'bonusEndBlock()': FunctionFragment;
    'deposit(uint256)': FunctionFragment;
    'emergencyRewardWithdraw(uint256)': FunctionFragment;
    'emergencyWithdraw()': FunctionFragment;
    'hasUserLimit()': FunctionFragment;
    'initialize(address,address,uint256,uint256,uint256,uint256,address)': FunctionFragment;
    'isInitialized()': FunctionFragment;
    'lastRewardBlock()': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingReward(address)': FunctionFragment;
    'poolLimitPerUser()': FunctionFragment;
    'recoverWrongTokens(address,uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewardPerBlock()': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'stakedToken()': FunctionFragment;
    'startBlock()': FunctionFragment;
    'stopReward()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updatePoolLimitPerUser(bool,uint256)': FunctionFragment;
    'updateRewardPerBlock(uint256)': FunctionFragment;
    'updateStartAndEndBlocks(uint256,uint256)': FunctionFragment;
    'userInfo(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'PRECISION_FACTOR'
      | 'SMART_CHEF_FACTORY'
      | 'accTokenPerShare'
      | 'bonusEndBlock'
      | 'deposit'
      | 'emergencyRewardWithdraw'
      | 'emergencyWithdraw'
      | 'hasUserLimit'
      | 'initialize'
      | 'isInitialized'
      | 'lastRewardBlock'
      | 'owner'
      | 'pendingReward'
      | 'poolLimitPerUser'
      | 'recoverWrongTokens'
      | 'renounceOwnership'
      | 'rewardPerBlock'
      | 'rewardToken'
      | 'stakedToken'
      | 'startBlock'
      | 'stopReward'
      | 'transferOwnership'
      | 'updatePoolLimitPerUser'
      | 'updateRewardPerBlock'
      | 'updateStartAndEndBlocks'
      | 'userInfo'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'PRECISION_FACTOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SMART_CHEF_FACTORY', values?: undefined): string;
  encodeFunctionData(functionFragment: 'accTokenPerShare', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bonusEndBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'emergencyRewardWithdraw', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values?: undefined): string;
  encodeFunctionData(functionFragment: 'hasUserLimit', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, BigNumberish, string],
  ): string;
  encodeFunctionData(functionFragment: 'isInitialized', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastRewardBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingReward', values: [string]): string;
  encodeFunctionData(functionFragment: 'poolLimitPerUser', values?: undefined): string;
  encodeFunctionData(functionFragment: 'recoverWrongTokens', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stakedToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'startBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stopReward', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'updatePoolLimitPerUser', values: [boolean, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updateRewardPerBlock', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updateStartAndEndBlocks', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'userInfo', values: [string]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'PRECISION_FACTOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SMART_CHEF_FACTORY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'accTokenPerShare', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bonusEndBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyRewardWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasUserLimit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isInitialized', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastRewardBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLimitPerUser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recoverWrongTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakedToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'startBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stopReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePoolLimitPerUser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateRewardPerBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateStartAndEndBlocks', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'AdminTokenRecovery(address,uint256)': EventFragment;
    'Deposit(address,uint256)': EventFragment;
    'EmergencyWithdraw(address,uint256)': EventFragment;
    'NewPoolLimit(uint256)': EventFragment;
    'NewRewardPerBlock(uint256)': EventFragment;
    'NewStartAndEndBlocks(uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'RewardsStop(uint256)': EventFragment;
    'Withdraw(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminTokenRecovery'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NewPoolLimit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NewRewardPerBlock'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NewStartAndEndBlocks'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardsStop'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface AdminTokenRecoveryEventObject {
  tokenRecovered: string;
  amount: BigNumber;
}
export type AdminTokenRecoveryEvent = TypedEvent<[string, BigNumber], AdminTokenRecoveryEventObject>;

export type AdminTokenRecoveryEventFilter = TypedEventFilter<AdminTokenRecoveryEvent>;

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<[string, BigNumber], EmergencyWithdrawEventObject>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface NewPoolLimitEventObject {
  poolLimitPerUser: BigNumber;
}
export type NewPoolLimitEvent = TypedEvent<[BigNumber], NewPoolLimitEventObject>;

export type NewPoolLimitEventFilter = TypedEventFilter<NewPoolLimitEvent>;

export interface NewRewardPerBlockEventObject {
  rewardPerBlock: BigNumber;
}
export type NewRewardPerBlockEvent = TypedEvent<[BigNumber], NewRewardPerBlockEventObject>;

export type NewRewardPerBlockEventFilter = TypedEventFilter<NewRewardPerBlockEvent>;

export interface NewStartAndEndBlocksEventObject {
  startBlock: BigNumber;
  endBlock: BigNumber;
}
export type NewStartAndEndBlocksEvent = TypedEvent<[BigNumber, BigNumber], NewStartAndEndBlocksEventObject>;

export type NewStartAndEndBlocksEventFilter = TypedEventFilter<NewStartAndEndBlocksEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface RewardsStopEventObject {
  blockNumber: BigNumber;
}
export type RewardsStopEvent = TypedEvent<[BigNumber], RewardsStopEventObject>;

export type RewardsStopEventFilter = TypedEventFilter<RewardsStopEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface MmfinanceSmartChef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MmfinanceSmartChefInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<[string]>;

    accTokenPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    bonusEndBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    hasUserLimit(overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    lastRewardBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<[BigNumber]>;

    recoverWrongTokens(
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    rewardPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    stakedToken(overrides?: CallOverrides): Promise<[string]>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    stopReward(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<string>;

  accTokenPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emergencyRewardWithdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _stakedToken: string,
    _rewardToken: string,
    _rewardPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    _poolLimitPerUser: BigNumberish,
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

  recoverWrongTokens(
    _tokenAddress: string,
    _tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  stakedToken(overrides?: CallOverrides): Promise<string>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  stopReward(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updatePoolLimitPerUser(
    _hasUserLimit: boolean,
    _poolLimitPerUser: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateRewardPerBlock(
    _rewardPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateStartAndEndBlocks(
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<string>;

    accTokenPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    emergencyRewardWithdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _admin: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

    recoverWrongTokens(_tokenAddress: string, _tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    stakedToken(overrides?: CallOverrides): Promise<string>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    stopReward(overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    updateRewardPerBlock(_rewardPerBlock: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AdminTokenRecovery(address,uint256)'(tokenRecovered?: null, amount?: null): AdminTokenRecoveryEventFilter;
    AdminTokenRecovery(tokenRecovered?: null, amount?: null): AdminTokenRecoveryEventFilter;

    'Deposit(address,uint256)'(user?: string | null, amount?: null): DepositEventFilter;
    Deposit(user?: string | null, amount?: null): DepositEventFilter;

    'EmergencyWithdraw(address,uint256)'(user?: string | null, amount?: null): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(user?: string | null, amount?: null): EmergencyWithdrawEventFilter;

    'NewPoolLimit(uint256)'(poolLimitPerUser?: null): NewPoolLimitEventFilter;
    NewPoolLimit(poolLimitPerUser?: null): NewPoolLimitEventFilter;

    'NewRewardPerBlock(uint256)'(rewardPerBlock?: null): NewRewardPerBlockEventFilter;
    NewRewardPerBlock(rewardPerBlock?: null): NewRewardPerBlockEventFilter;

    'NewStartAndEndBlocks(uint256,uint256)'(startBlock?: null, endBlock?: null): NewStartAndEndBlocksEventFilter;
    NewStartAndEndBlocks(startBlock?: null, endBlock?: null): NewStartAndEndBlocksEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'RewardsStop(uint256)'(blockNumber?: null): RewardsStopEventFilter;
    RewardsStop(blockNumber?: null): RewardsStopEventFilter;

    'Withdraw(address,uint256)'(user?: string | null, amount?: null): WithdrawEventFilter;
    Withdraw(user?: string | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    accTokenPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    hasUserLimit(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

    recoverWrongTokens(
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    stakedToken(overrides?: CallOverrides): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    stopReward(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(_amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accTokenPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusEndBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    hasUserLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRewardBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverWrongTokens(
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    rewardPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stopReward(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
