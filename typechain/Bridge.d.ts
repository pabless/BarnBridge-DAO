/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BridgeInterface extends ethers.utils.Interface {
  functions: {
    "ACTIVE()": FunctionFragment;
    "GRACE_PERIOD()": FunctionFragment;
    "MINIMUM_FOR_VOTES_THRESHOLD()": FunctionFragment;
    "MINIMUM_QUORUM()": FunctionFragment;
    "QUEUE()": FunctionFragment;
    "WARM_UP()": FunctionFragment;
    "c_0x081fa67a(bytes32)": FunctionFragment;
    "c_0x8efbff40(bytes32)": FunctionFragment;
    "queuedTransactions(bytes32)": FunctionFragment;
    "setActivePeriod(uint256)": FunctionFragment;
    "setGracePeriod(uint256)": FunctionFragment;
    "setMinimumQuorum(uint256)": FunctionFragment;
    "setMinimumThreshold(uint256)": FunctionFragment;
    "setQueuePeriod(uint256)": FunctionFragment;
    "setWarmUpPeriod(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ACTIVE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "GRACE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_FOR_VOTES_THRESHOLD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_QUORUM",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "QUEUE", values?: undefined): string;
  encodeFunctionData(functionFragment: "WARM_UP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "c_0x081fa67a",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_0x8efbff40",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedTransactions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setActivePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGracePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumQuorum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setQueuePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWarmUpPeriod",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ACTIVE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GRACE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_FOR_VOTES_THRESHOLD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_QUORUM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "QUEUE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WARM_UP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_0x081fa67a",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0x8efbff40",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setActivePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGracePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setQueuePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWarmUpPeriod",
    data: BytesLike
  ): Result;

  events: {};
}

export class Bridge extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BridgeInterface;

  functions: {
    ACTIVE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ACTIVE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    GRACE_PERIOD(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "GRACE_PERIOD()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MINIMUM_FOR_VOTES_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MINIMUM_QUORUM(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MINIMUM_QUORUM()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    QUEUE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "QUEUE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    WARM_UP(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "WARM_UP()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    c_0x081fa67a(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "c_0x081fa67a(bytes32)"(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    c_0x8efbff40(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "c_0x8efbff40(bytes32)"(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    setActivePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setActivePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGracePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGracePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMinimumQuorum(
      quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMinimumQuorum(uint256)"(
      quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMinimumThreshold(
      threshold: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMinimumThreshold(uint256)"(
      threshold: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setQueuePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setQueuePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setWarmUpPeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setWarmUpPeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  ACTIVE(overrides?: CallOverrides): Promise<BigNumber>;

  "ACTIVE()"(overrides?: CallOverrides): Promise<BigNumber>;

  GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_FOR_VOTES_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  "MINIMUM_FOR_VOTES_THRESHOLD()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  MINIMUM_QUORUM(overrides?: CallOverrides): Promise<BigNumber>;

  "MINIMUM_QUORUM()"(overrides?: CallOverrides): Promise<BigNumber>;

  QUEUE(overrides?: CallOverrides): Promise<BigNumber>;

  "QUEUE()"(overrides?: CallOverrides): Promise<BigNumber>;

  WARM_UP(overrides?: CallOverrides): Promise<BigNumber>;

  "WARM_UP()"(overrides?: CallOverrides): Promise<BigNumber>;

  c_0x081fa67a(
    c__0x081fa67a: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0x081fa67a(bytes32)"(
    c__0x081fa67a: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  c_0x8efbff40(
    c__0x8efbff40: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0x8efbff40(bytes32)"(
    c__0x8efbff40: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  queuedTransactions(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "queuedTransactions(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setActivePeriod(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setActivePeriod(uint256)"(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGracePeriod(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGracePeriod(uint256)"(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMinimumQuorum(
    quorum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMinimumQuorum(uint256)"(
    quorum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMinimumThreshold(
    threshold: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMinimumThreshold(uint256)"(
    threshold: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setQueuePeriod(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setQueuePeriod(uint256)"(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setWarmUpPeriod(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setWarmUpPeriod(uint256)"(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    ACTIVE(overrides?: CallOverrides): Promise<BigNumber>;

    "ACTIVE()"(overrides?: CallOverrides): Promise<BigNumber>;

    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_FOR_VOTES_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MINIMUM_QUORUM(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_QUORUM()"(overrides?: CallOverrides): Promise<BigNumber>;

    QUEUE(overrides?: CallOverrides): Promise<BigNumber>;

    "QUEUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    WARM_UP(overrides?: CallOverrides): Promise<BigNumber>;

    "WARM_UP()"(overrides?: CallOverrides): Promise<BigNumber>;

    c_0x081fa67a(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0x081fa67a(bytes32)"(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_0x8efbff40(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0x8efbff40(bytes32)"(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setActivePeriod(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setActivePeriod(uint256)"(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGracePeriod(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGracePeriod(uint256)"(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumQuorum(
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMinimumQuorum(uint256)"(
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumThreshold(
      threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMinimumThreshold(uint256)"(
      threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setQueuePeriod(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setQueuePeriod(uint256)"(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWarmUpPeriod(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setWarmUpPeriod(uint256)"(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ACTIVE(overrides?: CallOverrides): Promise<BigNumber>;

    "ACTIVE()"(overrides?: CallOverrides): Promise<BigNumber>;

    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_FOR_VOTES_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MINIMUM_QUORUM(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_QUORUM()"(overrides?: CallOverrides): Promise<BigNumber>;

    QUEUE(overrides?: CallOverrides): Promise<BigNumber>;

    "QUEUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    WARM_UP(overrides?: CallOverrides): Promise<BigNumber>;

    "WARM_UP()"(overrides?: CallOverrides): Promise<BigNumber>;

    c_0x081fa67a(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0x081fa67a(bytes32)"(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_0x8efbff40(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0x8efbff40(bytes32)"(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setActivePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setActivePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGracePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setGracePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMinimumQuorum(
      quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMinimumQuorum(uint256)"(
      quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMinimumThreshold(
      threshold: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMinimumThreshold(uint256)"(
      threshold: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setQueuePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setQueuePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setWarmUpPeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setWarmUpPeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACTIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ACTIVE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_FOR_VOTES_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINIMUM_QUORUM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MINIMUM_QUORUM()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    QUEUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "QUEUE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WARM_UP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WARM_UP()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    c_0x081fa67a(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0x081fa67a(bytes32)"(
      c__0x081fa67a: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_0x8efbff40(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0x8efbff40(bytes32)"(
      c__0x8efbff40: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setActivePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setActivePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGracePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGracePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMinimumQuorum(
      quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMinimumQuorum(uint256)"(
      quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMinimumThreshold(
      threshold: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMinimumThreshold(uint256)"(
      threshold: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setQueuePeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setQueuePeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setWarmUpPeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setWarmUpPeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
