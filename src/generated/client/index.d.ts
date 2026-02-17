
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Passenger
 * 
 */
export type Passenger = $Result.DefaultSelection<Prisma.$PassengerPayload>
/**
 * Model Cab
 * 
 */
export type Cab = $Result.DefaultSelection<Prisma.$CabPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Ride
 * 
 */
export type Ride = $Result.DefaultSelection<Prisma.$RidePayload>
/**
 * Model RidePassenger
 * 
 */
export type RidePassenger = $Result.DefaultSelection<Prisma.$RidePassengerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CabStatus: {
  AVAILABLE: 'AVAILABLE',
  BUSY: 'BUSY',
  OFFLINE: 'OFFLINE'
};

export type CabStatus = (typeof CabStatus)[keyof typeof CabStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  POOLED: 'POOLED',
  IN_TRANSIT: 'IN_TRANSIT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const RideStatus: {
  FORMING: 'FORMING',
  CONFIRMED: 'CONFIRMED',
  IN_TRANSIT: 'IN_TRANSIT',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type RideStatus = (typeof RideStatus)[keyof typeof RideStatus]

}

export type CabStatus = $Enums.CabStatus

export const CabStatus: typeof $Enums.CabStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type RideStatus = $Enums.RideStatus

export const RideStatus: typeof $Enums.RideStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Passengers
 * const passengers = await prisma.passenger.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Passengers
   * const passengers = await prisma.passenger.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.passenger`: Exposes CRUD operations for the **Passenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passengers
    * const passengers = await prisma.passenger.findMany()
    * ```
    */
  get passenger(): Prisma.PassengerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cab`: Exposes CRUD operations for the **Cab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cabs
    * const cabs = await prisma.cab.findMany()
    * ```
    */
  get cab(): Prisma.CabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ride`: Exposes CRUD operations for the **Ride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.ride.findMany()
    * ```
    */
  get ride(): Prisma.RideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ridePassenger`: Exposes CRUD operations for the **RidePassenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RidePassengers
    * const ridePassengers = await prisma.ridePassenger.findMany()
    * ```
    */
  get ridePassenger(): Prisma.RidePassengerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Passenger: 'Passenger',
    Cab: 'Cab',
    Booking: 'Booking',
    Ride: 'Ride',
    RidePassenger: 'RidePassenger'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "passenger" | "cab" | "booking" | "ride" | "ridePassenger"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Passenger: {
        payload: Prisma.$PassengerPayload<ExtArgs>
        fields: Prisma.PassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findFirst: {
            args: Prisma.PassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findMany: {
            args: Prisma.PassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          create: {
            args: Prisma.PassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          createMany: {
            args: Prisma.PassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          delete: {
            args: Prisma.PassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          update: {
            args: Prisma.PassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          deleteMany: {
            args: Prisma.PassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassengerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          upsert: {
            args: Prisma.PassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          aggregate: {
            args: Prisma.PassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassenger>
          }
          groupBy: {
            args: Prisma.PassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassengerCountArgs<ExtArgs>
            result: $Utils.Optional<PassengerCountAggregateOutputType> | number
          }
        }
      }
      Cab: {
        payload: Prisma.$CabPayload<ExtArgs>
        fields: Prisma.CabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>
          }
          findFirst: {
            args: Prisma.CabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>
          }
          findMany: {
            args: Prisma.CabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>[]
          }
          create: {
            args: Prisma.CabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>
          }
          createMany: {
            args: Prisma.CabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>[]
          }
          delete: {
            args: Prisma.CabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>
          }
          update: {
            args: Prisma.CabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>
          }
          deleteMany: {
            args: Prisma.CabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>[]
          }
          upsert: {
            args: Prisma.CabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabPayload>
          }
          aggregate: {
            args: Prisma.CabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCab>
          }
          groupBy: {
            args: Prisma.CabGroupByArgs<ExtArgs>
            result: $Utils.Optional<CabGroupByOutputType>[]
          }
          count: {
            args: Prisma.CabCountArgs<ExtArgs>
            result: $Utils.Optional<CabCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Ride: {
        payload: Prisma.$RidePayload<ExtArgs>
        fields: Prisma.RideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findFirst: {
            args: Prisma.RideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findMany: {
            args: Prisma.RideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          create: {
            args: Prisma.RideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          createMany: {
            args: Prisma.RideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          delete: {
            args: Prisma.RideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          update: {
            args: Prisma.RideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          deleteMany: {
            args: Prisma.RideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          upsert: {
            args: Prisma.RideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          aggregate: {
            args: Prisma.RideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRide>
          }
          groupBy: {
            args: Prisma.RideGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideGroupByOutputType>[]
          }
          count: {
            args: Prisma.RideCountArgs<ExtArgs>
            result: $Utils.Optional<RideCountAggregateOutputType> | number
          }
        }
      }
      RidePassenger: {
        payload: Prisma.$RidePassengerPayload<ExtArgs>
        fields: Prisma.RidePassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RidePassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RidePassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>
          }
          findFirst: {
            args: Prisma.RidePassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RidePassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>
          }
          findMany: {
            args: Prisma.RidePassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>[]
          }
          create: {
            args: Prisma.RidePassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>
          }
          createMany: {
            args: Prisma.RidePassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RidePassengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>[]
          }
          delete: {
            args: Prisma.RidePassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>
          }
          update: {
            args: Prisma.RidePassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>
          }
          deleteMany: {
            args: Prisma.RidePassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RidePassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RidePassengerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>[]
          }
          upsert: {
            args: Prisma.RidePassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePassengerPayload>
          }
          aggregate: {
            args: Prisma.RidePassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRidePassenger>
          }
          groupBy: {
            args: Prisma.RidePassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RidePassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RidePassengerCountArgs<ExtArgs>
            result: $Utils.Optional<RidePassengerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    passenger?: PassengerOmit
    cab?: CabOmit
    booking?: BookingOmit
    ride?: RideOmit
    ridePassenger?: RidePassengerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PassengerCountOutputType
   */

  export type PassengerCountOutputType = {
    bookings: number
  }

  export type PassengerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PassengerCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerCountOutputType
     */
    select?: PassengerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type CabCountOutputType
   */

  export type CabCountOutputType = {
    rides: number
  }

  export type CabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | CabCountOutputTypeCountRidesArgs
  }

  // Custom InputTypes
  /**
   * CabCountOutputType without action
   */
  export type CabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabCountOutputType
     */
    select?: CabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CabCountOutputType without action
   */
  export type CabCountOutputTypeCountRidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    ridePassengers: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ridePassengers?: boolean | BookingCountOutputTypeCountRidePassengersArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountRidePassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RidePassengerWhereInput
  }


  /**
   * Count Type RideCountOutputType
   */

  export type RideCountOutputType = {
    ridePassengers: number
  }

  export type RideCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ridePassengers?: boolean | RideCountOutputTypeCountRidePassengersArgs
  }

  // Custom InputTypes
  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCountOutputType
     */
    select?: RideCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountRidePassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RidePassengerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Passenger
   */

  export type AggregatePassenger = {
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  export type PassengerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassengerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassengerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PassengerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassengerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassengerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passenger to aggregate.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passengers
    **/
    _count?: true | PassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassengerMaxAggregateInputType
  }

  export type GetPassengerAggregateType<T extends PassengerAggregateArgs> = {
        [P in keyof T & keyof AggregatePassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassenger[P]>
      : GetScalarType<T[P], AggregatePassenger[P]>
  }




  export type PassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassengerWhereInput
    orderBy?: PassengerOrderByWithAggregationInput | PassengerOrderByWithAggregationInput[]
    by: PassengerScalarFieldEnum[] | PassengerScalarFieldEnum
    having?: PassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassengerCountAggregateInputType | true
    _min?: PassengerMinAggregateInputType
    _max?: PassengerMaxAggregateInputType
  }

  export type PassengerGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  type GetPassengerGroupByPayload<T extends PassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassengerGroupByOutputType[P]>
            : GetScalarType<T[P], PassengerGroupByOutputType[P]>
        }
      >
    >


  export type PassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Passenger$bookingsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PassengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["passenger"]>
  export type PassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Passenger$bookingsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PassengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PassengerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passenger"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passenger"]>
    composites: {}
  }

  type PassengerGetPayload<S extends boolean | null | undefined | PassengerDefaultArgs> = $Result.GetResult<Prisma.$PassengerPayload, S>

  type PassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassengerCountAggregateInputType | true
    }

  export interface PassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passenger'], meta: { name: 'Passenger' } }
    /**
     * Find zero or one Passenger that matches the filter.
     * @param {PassengerFindUniqueArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassengerFindUniqueArgs>(args: SelectSubset<T, PassengerFindUniqueArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassengerFindUniqueOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, PassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassengerFindFirstArgs>(args?: SelectSubset<T, PassengerFindFirstArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, PassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passengers
     * const passengers = await prisma.passenger.findMany()
     * 
     * // Get first 10 Passengers
     * const passengers = await prisma.passenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passengerWithIdOnly = await prisma.passenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassengerFindManyArgs>(args?: SelectSubset<T, PassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passenger.
     * @param {PassengerCreateArgs} args - Arguments to create a Passenger.
     * @example
     * // Create one Passenger
     * const Passenger = await prisma.passenger.create({
     *   data: {
     *     // ... data to create a Passenger
     *   }
     * })
     * 
     */
    create<T extends PassengerCreateArgs>(args: SelectSubset<T, PassengerCreateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passengers.
     * @param {PassengerCreateManyArgs} args - Arguments to create many Passengers.
     * @example
     * // Create many Passengers
     * const passenger = await prisma.passenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassengerCreateManyArgs>(args?: SelectSubset<T, PassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passengers and returns the data saved in the database.
     * @param {PassengerCreateManyAndReturnArgs} args - Arguments to create many Passengers.
     * @example
     * // Create many Passengers
     * const passenger = await prisma.passenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passengers and only return the `id`
     * const passengerWithIdOnly = await prisma.passenger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassengerCreateManyAndReturnArgs>(args?: SelectSubset<T, PassengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passenger.
     * @param {PassengerDeleteArgs} args - Arguments to delete one Passenger.
     * @example
     * // Delete one Passenger
     * const Passenger = await prisma.passenger.delete({
     *   where: {
     *     // ... filter to delete one Passenger
     *   }
     * })
     * 
     */
    delete<T extends PassengerDeleteArgs>(args: SelectSubset<T, PassengerDeleteArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passenger.
     * @param {PassengerUpdateArgs} args - Arguments to update one Passenger.
     * @example
     * // Update one Passenger
     * const passenger = await prisma.passenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassengerUpdateArgs>(args: SelectSubset<T, PassengerUpdateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passengers.
     * @param {PassengerDeleteManyArgs} args - Arguments to filter Passengers to delete.
     * @example
     * // Delete a few Passengers
     * const { count } = await prisma.passenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassengerDeleteManyArgs>(args?: SelectSubset<T, PassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passengers
     * const passenger = await prisma.passenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassengerUpdateManyArgs>(args: SelectSubset<T, PassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passengers and returns the data updated in the database.
     * @param {PassengerUpdateManyAndReturnArgs} args - Arguments to update many Passengers.
     * @example
     * // Update many Passengers
     * const passenger = await prisma.passenger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passengers and only return the `id`
     * const passengerWithIdOnly = await prisma.passenger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassengerUpdateManyAndReturnArgs>(args: SelectSubset<T, PassengerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passenger.
     * @param {PassengerUpsertArgs} args - Arguments to update or create a Passenger.
     * @example
     * // Update or create a Passenger
     * const passenger = await prisma.passenger.upsert({
     *   create: {
     *     // ... data to create a Passenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passenger we want to update
     *   }
     * })
     */
    upsert<T extends PassengerUpsertArgs>(args: SelectSubset<T, PassengerUpsertArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerCountArgs} args - Arguments to filter Passengers to count.
     * @example
     * // Count the number of Passengers
     * const count = await prisma.passenger.count({
     *   where: {
     *     // ... the filter for the Passengers we want to count
     *   }
     * })
    **/
    count<T extends PassengerCountArgs>(
      args?: Subset<T, PassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassengerAggregateArgs>(args: Subset<T, PassengerAggregateArgs>): Prisma.PrismaPromise<GetPassengerAggregateType<T>>

    /**
     * Group by Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassengerGroupByArgs['orderBy'] }
        : { orderBy?: PassengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passenger model
   */
  readonly fields: PassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Passenger$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Passenger$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passenger model
   */
  interface PassengerFieldRefs {
    readonly id: FieldRef<"Passenger", 'String'>
    readonly name: FieldRef<"Passenger", 'String'>
    readonly phone: FieldRef<"Passenger", 'String'>
    readonly email: FieldRef<"Passenger", 'String'>
    readonly createdAt: FieldRef<"Passenger", 'DateTime'>
    readonly updatedAt: FieldRef<"Passenger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passenger findUnique
   */
  export type PassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findUniqueOrThrow
   */
  export type PassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findFirst
   */
  export type PassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findFirstOrThrow
   */
  export type PassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findMany
   */
  export type PassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passengers to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger create
   */
  export type PassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a Passenger.
     */
    data: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
  }

  /**
   * Passenger createMany
   */
  export type PassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passengers.
     */
    data: PassengerCreateManyInput | PassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passenger createManyAndReturn
   */
  export type PassengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * The data used to create many Passengers.
     */
    data: PassengerCreateManyInput | PassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passenger update
   */
  export type PassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a Passenger.
     */
    data: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
    /**
     * Choose, which Passenger to update.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger updateMany
   */
  export type PassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passengers.
     */
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyInput>
    /**
     * Filter which Passengers to update
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to update.
     */
    limit?: number
  }

  /**
   * Passenger updateManyAndReturn
   */
  export type PassengerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * The data used to update Passengers.
     */
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyInput>
    /**
     * Filter which Passengers to update
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to update.
     */
    limit?: number
  }

  /**
   * Passenger upsert
   */
  export type PassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the Passenger to update in case it exists.
     */
    where: PassengerWhereUniqueInput
    /**
     * In case the Passenger found by the `where` argument doesn't exist, create a new Passenger with this data.
     */
    create: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
    /**
     * In case the Passenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
  }

  /**
   * Passenger delete
   */
  export type PassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter which Passenger to delete.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger deleteMany
   */
  export type PassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passengers to delete
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to delete.
     */
    limit?: number
  }

  /**
   * Passenger.bookings
   */
  export type Passenger$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Passenger without action
   */
  export type PassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
  }


  /**
   * Model Cab
   */

  export type AggregateCab = {
    _count: CabCountAggregateOutputType | null
    _avg: CabAvgAggregateOutputType | null
    _sum: CabSumAggregateOutputType | null
    _min: CabMinAggregateOutputType | null
    _max: CabMaxAggregateOutputType | null
  }

  export type CabAvgAggregateOutputType = {
    totalSeats: number | null
    luggageCapacity: number | null
    locationLat: number | null
    locationLng: number | null
  }

  export type CabSumAggregateOutputType = {
    totalSeats: number | null
    luggageCapacity: number | null
    locationLat: number | null
    locationLng: number | null
  }

  export type CabMinAggregateOutputType = {
    id: string | null
    licensePlate: string | null
    driverName: string | null
    totalSeats: number | null
    luggageCapacity: number | null
    status: $Enums.CabStatus | null
    locationLat: number | null
    locationLng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabMaxAggregateOutputType = {
    id: string | null
    licensePlate: string | null
    driverName: string | null
    totalSeats: number | null
    luggageCapacity: number | null
    status: $Enums.CabStatus | null
    locationLat: number | null
    locationLng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabCountAggregateOutputType = {
    id: number
    licensePlate: number
    driverName: number
    totalSeats: number
    luggageCapacity: number
    status: number
    locationLat: number
    locationLng: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CabAvgAggregateInputType = {
    totalSeats?: true
    luggageCapacity?: true
    locationLat?: true
    locationLng?: true
  }

  export type CabSumAggregateInputType = {
    totalSeats?: true
    luggageCapacity?: true
    locationLat?: true
    locationLng?: true
  }

  export type CabMinAggregateInputType = {
    id?: true
    licensePlate?: true
    driverName?: true
    totalSeats?: true
    luggageCapacity?: true
    status?: true
    locationLat?: true
    locationLng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabMaxAggregateInputType = {
    id?: true
    licensePlate?: true
    driverName?: true
    totalSeats?: true
    luggageCapacity?: true
    status?: true
    locationLat?: true
    locationLng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabCountAggregateInputType = {
    id?: true
    licensePlate?: true
    driverName?: true
    totalSeats?: true
    luggageCapacity?: true
    status?: true
    locationLat?: true
    locationLng?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cab to aggregate.
     */
    where?: CabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabs to fetch.
     */
    orderBy?: CabOrderByWithRelationInput | CabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cabs
    **/
    _count?: true | CabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CabMaxAggregateInputType
  }

  export type GetCabAggregateType<T extends CabAggregateArgs> = {
        [P in keyof T & keyof AggregateCab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCab[P]>
      : GetScalarType<T[P], AggregateCab[P]>
  }




  export type CabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabWhereInput
    orderBy?: CabOrderByWithAggregationInput | CabOrderByWithAggregationInput[]
    by: CabScalarFieldEnum[] | CabScalarFieldEnum
    having?: CabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CabCountAggregateInputType | true
    _avg?: CabAvgAggregateInputType
    _sum?: CabSumAggregateInputType
    _min?: CabMinAggregateInputType
    _max?: CabMaxAggregateInputType
  }

  export type CabGroupByOutputType = {
    id: string
    licensePlate: string
    driverName: string
    totalSeats: number
    luggageCapacity: number
    status: $Enums.CabStatus
    locationLat: number
    locationLng: number
    createdAt: Date
    updatedAt: Date
    _count: CabCountAggregateOutputType | null
    _avg: CabAvgAggregateOutputType | null
    _sum: CabSumAggregateOutputType | null
    _min: CabMinAggregateOutputType | null
    _max: CabMaxAggregateOutputType | null
  }

  type GetCabGroupByPayload<T extends CabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CabGroupByOutputType[P]>
            : GetScalarType<T[P], CabGroupByOutputType[P]>
        }
      >
    >


  export type CabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licensePlate?: boolean
    driverName?: boolean
    totalSeats?: boolean
    luggageCapacity?: boolean
    status?: boolean
    locationLat?: boolean
    locationLng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rides?: boolean | Cab$ridesArgs<ExtArgs>
    _count?: boolean | CabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cab"]>

  export type CabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licensePlate?: boolean
    driverName?: boolean
    totalSeats?: boolean
    luggageCapacity?: boolean
    status?: boolean
    locationLat?: boolean
    locationLng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cab"]>

  export type CabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licensePlate?: boolean
    driverName?: boolean
    totalSeats?: boolean
    luggageCapacity?: boolean
    status?: boolean
    locationLat?: boolean
    locationLng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cab"]>

  export type CabSelectScalar = {
    id?: boolean
    licensePlate?: boolean
    driverName?: boolean
    totalSeats?: boolean
    luggageCapacity?: boolean
    status?: boolean
    locationLat?: boolean
    locationLng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licensePlate" | "driverName" | "totalSeats" | "luggageCapacity" | "status" | "locationLat" | "locationLng" | "createdAt" | "updatedAt", ExtArgs["result"]["cab"]>
  export type CabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | Cab$ridesArgs<ExtArgs>
    _count?: boolean | CabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cab"
    objects: {
      rides: Prisma.$RidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licensePlate: string
      driverName: string
      totalSeats: number
      luggageCapacity: number
      status: $Enums.CabStatus
      locationLat: number
      locationLng: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cab"]>
    composites: {}
  }

  type CabGetPayload<S extends boolean | null | undefined | CabDefaultArgs> = $Result.GetResult<Prisma.$CabPayload, S>

  type CabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CabCountAggregateInputType | true
    }

  export interface CabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cab'], meta: { name: 'Cab' } }
    /**
     * Find zero or one Cab that matches the filter.
     * @param {CabFindUniqueArgs} args - Arguments to find a Cab
     * @example
     * // Get one Cab
     * const cab = await prisma.cab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CabFindUniqueArgs>(args: SelectSubset<T, CabFindUniqueArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CabFindUniqueOrThrowArgs} args - Arguments to find a Cab
     * @example
     * // Get one Cab
     * const cab = await prisma.cab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CabFindUniqueOrThrowArgs>(args: SelectSubset<T, CabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabFindFirstArgs} args - Arguments to find a Cab
     * @example
     * // Get one Cab
     * const cab = await prisma.cab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CabFindFirstArgs>(args?: SelectSubset<T, CabFindFirstArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabFindFirstOrThrowArgs} args - Arguments to find a Cab
     * @example
     * // Get one Cab
     * const cab = await prisma.cab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CabFindFirstOrThrowArgs>(args?: SelectSubset<T, CabFindFirstOrThrowArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cabs
     * const cabs = await prisma.cab.findMany()
     * 
     * // Get first 10 Cabs
     * const cabs = await prisma.cab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cabWithIdOnly = await prisma.cab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CabFindManyArgs>(args?: SelectSubset<T, CabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cab.
     * @param {CabCreateArgs} args - Arguments to create a Cab.
     * @example
     * // Create one Cab
     * const Cab = await prisma.cab.create({
     *   data: {
     *     // ... data to create a Cab
     *   }
     * })
     * 
     */
    create<T extends CabCreateArgs>(args: SelectSubset<T, CabCreateArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cabs.
     * @param {CabCreateManyArgs} args - Arguments to create many Cabs.
     * @example
     * // Create many Cabs
     * const cab = await prisma.cab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CabCreateManyArgs>(args?: SelectSubset<T, CabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cabs and returns the data saved in the database.
     * @param {CabCreateManyAndReturnArgs} args - Arguments to create many Cabs.
     * @example
     * // Create many Cabs
     * const cab = await prisma.cab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cabs and only return the `id`
     * const cabWithIdOnly = await prisma.cab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CabCreateManyAndReturnArgs>(args?: SelectSubset<T, CabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cab.
     * @param {CabDeleteArgs} args - Arguments to delete one Cab.
     * @example
     * // Delete one Cab
     * const Cab = await prisma.cab.delete({
     *   where: {
     *     // ... filter to delete one Cab
     *   }
     * })
     * 
     */
    delete<T extends CabDeleteArgs>(args: SelectSubset<T, CabDeleteArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cab.
     * @param {CabUpdateArgs} args - Arguments to update one Cab.
     * @example
     * // Update one Cab
     * const cab = await prisma.cab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CabUpdateArgs>(args: SelectSubset<T, CabUpdateArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cabs.
     * @param {CabDeleteManyArgs} args - Arguments to filter Cabs to delete.
     * @example
     * // Delete a few Cabs
     * const { count } = await prisma.cab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CabDeleteManyArgs>(args?: SelectSubset<T, CabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cabs
     * const cab = await prisma.cab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CabUpdateManyArgs>(args: SelectSubset<T, CabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabs and returns the data updated in the database.
     * @param {CabUpdateManyAndReturnArgs} args - Arguments to update many Cabs.
     * @example
     * // Update many Cabs
     * const cab = await prisma.cab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cabs and only return the `id`
     * const cabWithIdOnly = await prisma.cab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CabUpdateManyAndReturnArgs>(args: SelectSubset<T, CabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cab.
     * @param {CabUpsertArgs} args - Arguments to update or create a Cab.
     * @example
     * // Update or create a Cab
     * const cab = await prisma.cab.upsert({
     *   create: {
     *     // ... data to create a Cab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cab we want to update
     *   }
     * })
     */
    upsert<T extends CabUpsertArgs>(args: SelectSubset<T, CabUpsertArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabCountArgs} args - Arguments to filter Cabs to count.
     * @example
     * // Count the number of Cabs
     * const count = await prisma.cab.count({
     *   where: {
     *     // ... the filter for the Cabs we want to count
     *   }
     * })
    **/
    count<T extends CabCountArgs>(
      args?: Subset<T, CabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CabAggregateArgs>(args: Subset<T, CabAggregateArgs>): Prisma.PrismaPromise<GetCabAggregateType<T>>

    /**
     * Group by Cab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CabGroupByArgs['orderBy'] }
        : { orderBy?: CabGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cab model
   */
  readonly fields: CabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rides<T extends Cab$ridesArgs<ExtArgs> = {}>(args?: Subset<T, Cab$ridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cab model
   */
  interface CabFieldRefs {
    readonly id: FieldRef<"Cab", 'String'>
    readonly licensePlate: FieldRef<"Cab", 'String'>
    readonly driverName: FieldRef<"Cab", 'String'>
    readonly totalSeats: FieldRef<"Cab", 'Int'>
    readonly luggageCapacity: FieldRef<"Cab", 'Int'>
    readonly status: FieldRef<"Cab", 'CabStatus'>
    readonly locationLat: FieldRef<"Cab", 'Float'>
    readonly locationLng: FieldRef<"Cab", 'Float'>
    readonly createdAt: FieldRef<"Cab", 'DateTime'>
    readonly updatedAt: FieldRef<"Cab", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cab findUnique
   */
  export type CabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * Filter, which Cab to fetch.
     */
    where: CabWhereUniqueInput
  }

  /**
   * Cab findUniqueOrThrow
   */
  export type CabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * Filter, which Cab to fetch.
     */
    where: CabWhereUniqueInput
  }

  /**
   * Cab findFirst
   */
  export type CabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * Filter, which Cab to fetch.
     */
    where?: CabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabs to fetch.
     */
    orderBy?: CabOrderByWithRelationInput | CabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabs.
     */
    cursor?: CabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabs.
     */
    distinct?: CabScalarFieldEnum | CabScalarFieldEnum[]
  }

  /**
   * Cab findFirstOrThrow
   */
  export type CabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * Filter, which Cab to fetch.
     */
    where?: CabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabs to fetch.
     */
    orderBy?: CabOrderByWithRelationInput | CabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabs.
     */
    cursor?: CabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabs.
     */
    distinct?: CabScalarFieldEnum | CabScalarFieldEnum[]
  }

  /**
   * Cab findMany
   */
  export type CabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * Filter, which Cabs to fetch.
     */
    where?: CabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabs to fetch.
     */
    orderBy?: CabOrderByWithRelationInput | CabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cabs.
     */
    cursor?: CabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabs.
     */
    skip?: number
    distinct?: CabScalarFieldEnum | CabScalarFieldEnum[]
  }

  /**
   * Cab create
   */
  export type CabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * The data needed to create a Cab.
     */
    data: XOR<CabCreateInput, CabUncheckedCreateInput>
  }

  /**
   * Cab createMany
   */
  export type CabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cabs.
     */
    data: CabCreateManyInput | CabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cab createManyAndReturn
   */
  export type CabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * The data used to create many Cabs.
     */
    data: CabCreateManyInput | CabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cab update
   */
  export type CabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * The data needed to update a Cab.
     */
    data: XOR<CabUpdateInput, CabUncheckedUpdateInput>
    /**
     * Choose, which Cab to update.
     */
    where: CabWhereUniqueInput
  }

  /**
   * Cab updateMany
   */
  export type CabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cabs.
     */
    data: XOR<CabUpdateManyMutationInput, CabUncheckedUpdateManyInput>
    /**
     * Filter which Cabs to update
     */
    where?: CabWhereInput
    /**
     * Limit how many Cabs to update.
     */
    limit?: number
  }

  /**
   * Cab updateManyAndReturn
   */
  export type CabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * The data used to update Cabs.
     */
    data: XOR<CabUpdateManyMutationInput, CabUncheckedUpdateManyInput>
    /**
     * Filter which Cabs to update
     */
    where?: CabWhereInput
    /**
     * Limit how many Cabs to update.
     */
    limit?: number
  }

  /**
   * Cab upsert
   */
  export type CabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * The filter to search for the Cab to update in case it exists.
     */
    where: CabWhereUniqueInput
    /**
     * In case the Cab found by the `where` argument doesn't exist, create a new Cab with this data.
     */
    create: XOR<CabCreateInput, CabUncheckedCreateInput>
    /**
     * In case the Cab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CabUpdateInput, CabUncheckedUpdateInput>
  }

  /**
   * Cab delete
   */
  export type CabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
    /**
     * Filter which Cab to delete.
     */
    where: CabWhereUniqueInput
  }

  /**
   * Cab deleteMany
   */
  export type CabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabs to delete
     */
    where?: CabWhereInput
    /**
     * Limit how many Cabs to delete.
     */
    limit?: number
  }

  /**
   * Cab.rides
   */
  export type Cab$ridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Cab without action
   */
  export type CabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cab
     */
    select?: CabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cab
     */
    omit?: CabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    pickupLat: number | null
    pickupLng: number | null
    dropoffLat: number | null
    dropoffLng: number | null
    luggageCount: number | null
    detourToleranceKm: number | null
  }

  export type BookingSumAggregateOutputType = {
    pickupLat: number | null
    pickupLng: number | null
    dropoffLat: number | null
    dropoffLng: number | null
    luggageCount: number | null
    detourToleranceKm: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    passengerId: string | null
    pickupLat: number | null
    pickupLng: number | null
    dropoffLat: number | null
    dropoffLng: number | null
    luggageCount: number | null
    status: $Enums.BookingStatus | null
    detourToleranceKm: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    passengerId: string | null
    pickupLat: number | null
    pickupLng: number | null
    dropoffLat: number | null
    dropoffLng: number | null
    luggageCount: number | null
    status: $Enums.BookingStatus | null
    detourToleranceKm: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    passengerId: number
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount: number
    status: number
    detourToleranceKm: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    pickupLat?: true
    pickupLng?: true
    dropoffLat?: true
    dropoffLng?: true
    luggageCount?: true
    detourToleranceKm?: true
  }

  export type BookingSumAggregateInputType = {
    pickupLat?: true
    pickupLng?: true
    dropoffLat?: true
    dropoffLng?: true
    luggageCount?: true
    detourToleranceKm?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    passengerId?: true
    pickupLat?: true
    pickupLng?: true
    dropoffLat?: true
    dropoffLng?: true
    luggageCount?: true
    status?: true
    detourToleranceKm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    passengerId?: true
    pickupLat?: true
    pickupLng?: true
    dropoffLat?: true
    dropoffLng?: true
    luggageCount?: true
    status?: true
    detourToleranceKm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    passengerId?: true
    pickupLat?: true
    pickupLng?: true
    dropoffLat?: true
    dropoffLng?: true
    luggageCount?: true
    status?: true
    detourToleranceKm?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    passengerId: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount: number
    status: $Enums.BookingStatus
    detourToleranceKm: number
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    pickupLat?: boolean
    pickupLng?: boolean
    dropoffLat?: boolean
    dropoffLng?: boolean
    luggageCount?: boolean
    status?: boolean
    detourToleranceKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    ridePassengers?: boolean | Booking$ridePassengersArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    pickupLat?: boolean
    pickupLng?: boolean
    dropoffLat?: boolean
    dropoffLng?: boolean
    luggageCount?: boolean
    status?: boolean
    detourToleranceKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    pickupLat?: boolean
    pickupLng?: boolean
    dropoffLat?: boolean
    dropoffLng?: boolean
    luggageCount?: boolean
    status?: boolean
    detourToleranceKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    passengerId?: boolean
    pickupLat?: boolean
    pickupLng?: boolean
    dropoffLat?: boolean
    dropoffLng?: boolean
    luggageCount?: boolean
    status?: boolean
    detourToleranceKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passengerId" | "pickupLat" | "pickupLng" | "dropoffLat" | "dropoffLng" | "luggageCount" | "status" | "detourToleranceKm" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    ridePassengers?: boolean | Booking$ridePassengersArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      passenger: Prisma.$PassengerPayload<ExtArgs>
      ridePassengers: Prisma.$RidePassengerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      passengerId: string
      pickupLat: number
      pickupLng: number
      dropoffLat: number
      dropoffLng: number
      luggageCount: number
      status: $Enums.BookingStatus
      detourToleranceKm: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passenger<T extends PassengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassengerDefaultArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ridePassengers<T extends Booking$ridePassengersArgs<ExtArgs> = {}>(args?: Subset<T, Booking$ridePassengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly passengerId: FieldRef<"Booking", 'String'>
    readonly pickupLat: FieldRef<"Booking", 'Float'>
    readonly pickupLng: FieldRef<"Booking", 'Float'>
    readonly dropoffLat: FieldRef<"Booking", 'Float'>
    readonly dropoffLng: FieldRef<"Booking", 'Float'>
    readonly luggageCount: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly detourToleranceKm: FieldRef<"Booking", 'Float'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.ridePassengers
   */
  export type Booking$ridePassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    where?: RidePassengerWhereInput
    orderBy?: RidePassengerOrderByWithRelationInput | RidePassengerOrderByWithRelationInput[]
    cursor?: RidePassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RidePassengerScalarFieldEnum | RidePassengerScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Ride
   */

  export type AggregateRide = {
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  export type RideAvgAggregateOutputType = {
    totalDistance: number | null
    totalPrice: number | null
    version: number | null
  }

  export type RideSumAggregateOutputType = {
    totalDistance: number | null
    totalPrice: number | null
    version: number | null
  }

  export type RideMinAggregateOutputType = {
    id: string | null
    cabId: string | null
    status: $Enums.RideStatus | null
    totalDistance: number | null
    totalPrice: number | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideMaxAggregateOutputType = {
    id: string | null
    cabId: string | null
    status: $Enums.RideStatus | null
    totalDistance: number | null
    totalPrice: number | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideCountAggregateOutputType = {
    id: number
    cabId: number
    status: number
    routeJson: number
    totalDistance: number
    totalPrice: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RideAvgAggregateInputType = {
    totalDistance?: true
    totalPrice?: true
    version?: true
  }

  export type RideSumAggregateInputType = {
    totalDistance?: true
    totalPrice?: true
    version?: true
  }

  export type RideMinAggregateInputType = {
    id?: true
    cabId?: true
    status?: true
    totalDistance?: true
    totalPrice?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideMaxAggregateInputType = {
    id?: true
    cabId?: true
    status?: true
    totalDistance?: true
    totalPrice?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideCountAggregateInputType = {
    id?: true
    cabId?: true
    status?: true
    routeJson?: true
    totalDistance?: true
    totalPrice?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ride to aggregate.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rides
    **/
    _count?: true | RideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideMaxAggregateInputType
  }

  export type GetRideAggregateType<T extends RideAggregateArgs> = {
        [P in keyof T & keyof AggregateRide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRide[P]>
      : GetScalarType<T[P], AggregateRide[P]>
  }




  export type RideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
    orderBy?: RideOrderByWithAggregationInput | RideOrderByWithAggregationInput[]
    by: RideScalarFieldEnum[] | RideScalarFieldEnum
    having?: RideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideCountAggregateInputType | true
    _avg?: RideAvgAggregateInputType
    _sum?: RideSumAggregateInputType
    _min?: RideMinAggregateInputType
    _max?: RideMaxAggregateInputType
  }

  export type RideGroupByOutputType = {
    id: string
    cabId: string
    status: $Enums.RideStatus
    routeJson: JsonValue | null
    totalDistance: number
    totalPrice: number
    version: number
    createdAt: Date
    updatedAt: Date
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  type GetRideGroupByPayload<T extends RideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideGroupByOutputType[P]>
            : GetScalarType<T[P], RideGroupByOutputType[P]>
        }
      >
    >


  export type RideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabId?: boolean
    status?: boolean
    routeJson?: boolean
    totalDistance?: boolean
    totalPrice?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cab?: boolean | CabDefaultArgs<ExtArgs>
    ridePassengers?: boolean | Ride$ridePassengersArgs<ExtArgs>
    _count?: boolean | RideCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabId?: boolean
    status?: boolean
    routeJson?: boolean
    totalDistance?: boolean
    totalPrice?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cab?: boolean | CabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabId?: boolean
    status?: boolean
    routeJson?: boolean
    totalDistance?: boolean
    totalPrice?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cab?: boolean | CabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectScalar = {
    id?: boolean
    cabId?: boolean
    status?: boolean
    routeJson?: boolean
    totalDistance?: boolean
    totalPrice?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabId" | "status" | "routeJson" | "totalDistance" | "totalPrice" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["ride"]>
  export type RideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cab?: boolean | CabDefaultArgs<ExtArgs>
    ridePassengers?: boolean | Ride$ridePassengersArgs<ExtArgs>
    _count?: boolean | RideCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cab?: boolean | CabDefaultArgs<ExtArgs>
  }
  export type RideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cab?: boolean | CabDefaultArgs<ExtArgs>
  }

  export type $RidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ride"
    objects: {
      cab: Prisma.$CabPayload<ExtArgs>
      ridePassengers: Prisma.$RidePassengerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cabId: string
      status: $Enums.RideStatus
      routeJson: Prisma.JsonValue | null
      totalDistance: number
      totalPrice: number
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ride"]>
    composites: {}
  }

  type RideGetPayload<S extends boolean | null | undefined | RideDefaultArgs> = $Result.GetResult<Prisma.$RidePayload, S>

  type RideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideCountAggregateInputType | true
    }

  export interface RideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ride'], meta: { name: 'Ride' } }
    /**
     * Find zero or one Ride that matches the filter.
     * @param {RideFindUniqueArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RideFindUniqueArgs>(args: SelectSubset<T, RideFindUniqueArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RideFindUniqueOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RideFindUniqueOrThrowArgs>(args: SelectSubset<T, RideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RideFindFirstArgs>(args?: SelectSubset<T, RideFindFirstArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RideFindFirstOrThrowArgs>(args?: SelectSubset<T, RideFindFirstOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.ride.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.ride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rideWithIdOnly = await prisma.ride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RideFindManyArgs>(args?: SelectSubset<T, RideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ride.
     * @param {RideCreateArgs} args - Arguments to create a Ride.
     * @example
     * // Create one Ride
     * const Ride = await prisma.ride.create({
     *   data: {
     *     // ... data to create a Ride
     *   }
     * })
     * 
     */
    create<T extends RideCreateArgs>(args: SelectSubset<T, RideCreateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rides.
     * @param {RideCreateManyArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RideCreateManyArgs>(args?: SelectSubset<T, RideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rides and returns the data saved in the database.
     * @param {RideCreateManyAndReturnArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rides and only return the `id`
     * const rideWithIdOnly = await prisma.ride.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RideCreateManyAndReturnArgs>(args?: SelectSubset<T, RideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ride.
     * @param {RideDeleteArgs} args - Arguments to delete one Ride.
     * @example
     * // Delete one Ride
     * const Ride = await prisma.ride.delete({
     *   where: {
     *     // ... filter to delete one Ride
     *   }
     * })
     * 
     */
    delete<T extends RideDeleteArgs>(args: SelectSubset<T, RideDeleteArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ride.
     * @param {RideUpdateArgs} args - Arguments to update one Ride.
     * @example
     * // Update one Ride
     * const ride = await prisma.ride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RideUpdateArgs>(args: SelectSubset<T, RideUpdateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {RideDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.ride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RideDeleteManyArgs>(args?: SelectSubset<T, RideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RideUpdateManyArgs>(args: SelectSubset<T, RideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides and returns the data updated in the database.
     * @param {RideUpdateManyAndReturnArgs} args - Arguments to update many Rides.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rides and only return the `id`
     * const rideWithIdOnly = await prisma.ride.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RideUpdateManyAndReturnArgs>(args: SelectSubset<T, RideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ride.
     * @param {RideUpsertArgs} args - Arguments to update or create a Ride.
     * @example
     * // Update or create a Ride
     * const ride = await prisma.ride.upsert({
     *   create: {
     *     // ... data to create a Ride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ride we want to update
     *   }
     * })
     */
    upsert<T extends RideUpsertArgs>(args: SelectSubset<T, RideUpsertArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.ride.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends RideCountArgs>(
      args?: Subset<T, RideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RideAggregateArgs>(args: Subset<T, RideAggregateArgs>): Prisma.PrismaPromise<GetRideAggregateType<T>>

    /**
     * Group by Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RideGroupByArgs['orderBy'] }
        : { orderBy?: RideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ride model
   */
  readonly fields: RideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cab<T extends CabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabDefaultArgs<ExtArgs>>): Prisma__CabClient<$Result.GetResult<Prisma.$CabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ridePassengers<T extends Ride$ridePassengersArgs<ExtArgs> = {}>(args?: Subset<T, Ride$ridePassengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ride model
   */
  interface RideFieldRefs {
    readonly id: FieldRef<"Ride", 'String'>
    readonly cabId: FieldRef<"Ride", 'String'>
    readonly status: FieldRef<"Ride", 'RideStatus'>
    readonly routeJson: FieldRef<"Ride", 'Json'>
    readonly totalDistance: FieldRef<"Ride", 'Float'>
    readonly totalPrice: FieldRef<"Ride", 'Float'>
    readonly version: FieldRef<"Ride", 'Int'>
    readonly createdAt: FieldRef<"Ride", 'DateTime'>
    readonly updatedAt: FieldRef<"Ride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ride findUnique
   */
  export type RideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findUniqueOrThrow
   */
  export type RideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findFirst
   */
  export type RideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findFirstOrThrow
   */
  export type RideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findMany
   */
  export type RideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Rides to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride create
   */
  export type RideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to create a Ride.
     */
    data: XOR<RideCreateInput, RideUncheckedCreateInput>
  }

  /**
   * Ride createMany
   */
  export type RideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ride createManyAndReturn
   */
  export type RideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride update
   */
  export type RideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to update a Ride.
     */
    data: XOR<RideUpdateInput, RideUncheckedUpdateInput>
    /**
     * Choose, which Ride to update.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride updateMany
   */
  export type RideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
  }

  /**
   * Ride updateManyAndReturn
   */
  export type RideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride upsert
   */
  export type RideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The filter to search for the Ride to update in case it exists.
     */
    where: RideWhereUniqueInput
    /**
     * In case the Ride found by the `where` argument doesn't exist, create a new Ride with this data.
     */
    create: XOR<RideCreateInput, RideUncheckedCreateInput>
    /**
     * In case the Ride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RideUpdateInput, RideUncheckedUpdateInput>
  }

  /**
   * Ride delete
   */
  export type RideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter which Ride to delete.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride deleteMany
   */
  export type RideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rides to delete
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to delete.
     */
    limit?: number
  }

  /**
   * Ride.ridePassengers
   */
  export type Ride$ridePassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    where?: RidePassengerWhereInput
    orderBy?: RidePassengerOrderByWithRelationInput | RidePassengerOrderByWithRelationInput[]
    cursor?: RidePassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RidePassengerScalarFieldEnum | RidePassengerScalarFieldEnum[]
  }

  /**
   * Ride without action
   */
  export type RideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
  }


  /**
   * Model RidePassenger
   */

  export type AggregateRidePassenger = {
    _count: RidePassengerCountAggregateOutputType | null
    _avg: RidePassengerAvgAggregateOutputType | null
    _sum: RidePassengerSumAggregateOutputType | null
    _min: RidePassengerMinAggregateOutputType | null
    _max: RidePassengerMaxAggregateOutputType | null
  }

  export type RidePassengerAvgAggregateOutputType = {
    sequenceOrder: number | null
    individualPrice: number | null
    pickupEta: number | null
  }

  export type RidePassengerSumAggregateOutputType = {
    sequenceOrder: number | null
    individualPrice: number | null
    pickupEta: number | null
  }

  export type RidePassengerMinAggregateOutputType = {
    id: string | null
    rideId: string | null
    bookingId: string | null
    sequenceOrder: number | null
    individualPrice: number | null
    pickupEta: number | null
  }

  export type RidePassengerMaxAggregateOutputType = {
    id: string | null
    rideId: string | null
    bookingId: string | null
    sequenceOrder: number | null
    individualPrice: number | null
    pickupEta: number | null
  }

  export type RidePassengerCountAggregateOutputType = {
    id: number
    rideId: number
    bookingId: number
    sequenceOrder: number
    individualPrice: number
    pickupEta: number
    _all: number
  }


  export type RidePassengerAvgAggregateInputType = {
    sequenceOrder?: true
    individualPrice?: true
    pickupEta?: true
  }

  export type RidePassengerSumAggregateInputType = {
    sequenceOrder?: true
    individualPrice?: true
    pickupEta?: true
  }

  export type RidePassengerMinAggregateInputType = {
    id?: true
    rideId?: true
    bookingId?: true
    sequenceOrder?: true
    individualPrice?: true
    pickupEta?: true
  }

  export type RidePassengerMaxAggregateInputType = {
    id?: true
    rideId?: true
    bookingId?: true
    sequenceOrder?: true
    individualPrice?: true
    pickupEta?: true
  }

  export type RidePassengerCountAggregateInputType = {
    id?: true
    rideId?: true
    bookingId?: true
    sequenceOrder?: true
    individualPrice?: true
    pickupEta?: true
    _all?: true
  }

  export type RidePassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RidePassenger to aggregate.
     */
    where?: RidePassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RidePassengers to fetch.
     */
    orderBy?: RidePassengerOrderByWithRelationInput | RidePassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RidePassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RidePassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RidePassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RidePassengers
    **/
    _count?: true | RidePassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RidePassengerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RidePassengerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RidePassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RidePassengerMaxAggregateInputType
  }

  export type GetRidePassengerAggregateType<T extends RidePassengerAggregateArgs> = {
        [P in keyof T & keyof AggregateRidePassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRidePassenger[P]>
      : GetScalarType<T[P], AggregateRidePassenger[P]>
  }




  export type RidePassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RidePassengerWhereInput
    orderBy?: RidePassengerOrderByWithAggregationInput | RidePassengerOrderByWithAggregationInput[]
    by: RidePassengerScalarFieldEnum[] | RidePassengerScalarFieldEnum
    having?: RidePassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RidePassengerCountAggregateInputType | true
    _avg?: RidePassengerAvgAggregateInputType
    _sum?: RidePassengerSumAggregateInputType
    _min?: RidePassengerMinAggregateInputType
    _max?: RidePassengerMaxAggregateInputType
  }

  export type RidePassengerGroupByOutputType = {
    id: string
    rideId: string
    bookingId: string
    sequenceOrder: number
    individualPrice: number
    pickupEta: number | null
    _count: RidePassengerCountAggregateOutputType | null
    _avg: RidePassengerAvgAggregateOutputType | null
    _sum: RidePassengerSumAggregateOutputType | null
    _min: RidePassengerMinAggregateOutputType | null
    _max: RidePassengerMaxAggregateOutputType | null
  }

  type GetRidePassengerGroupByPayload<T extends RidePassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RidePassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RidePassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RidePassengerGroupByOutputType[P]>
            : GetScalarType<T[P], RidePassengerGroupByOutputType[P]>
        }
      >
    >


  export type RidePassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rideId?: boolean
    bookingId?: boolean
    sequenceOrder?: boolean
    individualPrice?: boolean
    pickupEta?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ridePassenger"]>

  export type RidePassengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rideId?: boolean
    bookingId?: boolean
    sequenceOrder?: boolean
    individualPrice?: boolean
    pickupEta?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ridePassenger"]>

  export type RidePassengerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rideId?: boolean
    bookingId?: boolean
    sequenceOrder?: boolean
    individualPrice?: boolean
    pickupEta?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ridePassenger"]>

  export type RidePassengerSelectScalar = {
    id?: boolean
    rideId?: boolean
    bookingId?: boolean
    sequenceOrder?: boolean
    individualPrice?: boolean
    pickupEta?: boolean
  }

  export type RidePassengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rideId" | "bookingId" | "sequenceOrder" | "individualPrice" | "pickupEta", ExtArgs["result"]["ridePassenger"]>
  export type RidePassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type RidePassengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type RidePassengerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $RidePassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RidePassenger"
    objects: {
      ride: Prisma.$RidePayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rideId: string
      bookingId: string
      sequenceOrder: number
      individualPrice: number
      pickupEta: number | null
    }, ExtArgs["result"]["ridePassenger"]>
    composites: {}
  }

  type RidePassengerGetPayload<S extends boolean | null | undefined | RidePassengerDefaultArgs> = $Result.GetResult<Prisma.$RidePassengerPayload, S>

  type RidePassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RidePassengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RidePassengerCountAggregateInputType | true
    }

  export interface RidePassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RidePassenger'], meta: { name: 'RidePassenger' } }
    /**
     * Find zero or one RidePassenger that matches the filter.
     * @param {RidePassengerFindUniqueArgs} args - Arguments to find a RidePassenger
     * @example
     * // Get one RidePassenger
     * const ridePassenger = await prisma.ridePassenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RidePassengerFindUniqueArgs>(args: SelectSubset<T, RidePassengerFindUniqueArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RidePassenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RidePassengerFindUniqueOrThrowArgs} args - Arguments to find a RidePassenger
     * @example
     * // Get one RidePassenger
     * const ridePassenger = await prisma.ridePassenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RidePassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, RidePassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RidePassenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidePassengerFindFirstArgs} args - Arguments to find a RidePassenger
     * @example
     * // Get one RidePassenger
     * const ridePassenger = await prisma.ridePassenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RidePassengerFindFirstArgs>(args?: SelectSubset<T, RidePassengerFindFirstArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RidePassenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidePassengerFindFirstOrThrowArgs} args - Arguments to find a RidePassenger
     * @example
     * // Get one RidePassenger
     * const ridePassenger = await prisma.ridePassenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RidePassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, RidePassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RidePassengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidePassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RidePassengers
     * const ridePassengers = await prisma.ridePassenger.findMany()
     * 
     * // Get first 10 RidePassengers
     * const ridePassengers = await prisma.ridePassenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ridePassengerWithIdOnly = await prisma.ridePassenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RidePassengerFindManyArgs>(args?: SelectSubset<T, RidePassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RidePassenger.
     * @param {RidePassengerCreateArgs} args - Arguments to create a RidePassenger.
     * @example
     * // Create one RidePassenger
     * const RidePassenger = await prisma.ridePassenger.create({
     *   data: {
     *     // ... data to create a RidePassenger
     *   }
     * })
     * 
     */
    create<T extends RidePassengerCreateArgs>(args: SelectSubset<T, RidePassengerCreateArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RidePassengers.
     * @param {RidePassengerCreateManyArgs} args - Arguments to create many RidePassengers.
     * @example
     * // Create many RidePassengers
     * const ridePassenger = await prisma.ridePassenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RidePassengerCreateManyArgs>(args?: SelectSubset<T, RidePassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RidePassengers and returns the data saved in the database.
     * @param {RidePassengerCreateManyAndReturnArgs} args - Arguments to create many RidePassengers.
     * @example
     * // Create many RidePassengers
     * const ridePassenger = await prisma.ridePassenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RidePassengers and only return the `id`
     * const ridePassengerWithIdOnly = await prisma.ridePassenger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RidePassengerCreateManyAndReturnArgs>(args?: SelectSubset<T, RidePassengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RidePassenger.
     * @param {RidePassengerDeleteArgs} args - Arguments to delete one RidePassenger.
     * @example
     * // Delete one RidePassenger
     * const RidePassenger = await prisma.ridePassenger.delete({
     *   where: {
     *     // ... filter to delete one RidePassenger
     *   }
     * })
     * 
     */
    delete<T extends RidePassengerDeleteArgs>(args: SelectSubset<T, RidePassengerDeleteArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RidePassenger.
     * @param {RidePassengerUpdateArgs} args - Arguments to update one RidePassenger.
     * @example
     * // Update one RidePassenger
     * const ridePassenger = await prisma.ridePassenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RidePassengerUpdateArgs>(args: SelectSubset<T, RidePassengerUpdateArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RidePassengers.
     * @param {RidePassengerDeleteManyArgs} args - Arguments to filter RidePassengers to delete.
     * @example
     * // Delete a few RidePassengers
     * const { count } = await prisma.ridePassenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RidePassengerDeleteManyArgs>(args?: SelectSubset<T, RidePassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RidePassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidePassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RidePassengers
     * const ridePassenger = await prisma.ridePassenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RidePassengerUpdateManyArgs>(args: SelectSubset<T, RidePassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RidePassengers and returns the data updated in the database.
     * @param {RidePassengerUpdateManyAndReturnArgs} args - Arguments to update many RidePassengers.
     * @example
     * // Update many RidePassengers
     * const ridePassenger = await prisma.ridePassenger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RidePassengers and only return the `id`
     * const ridePassengerWithIdOnly = await prisma.ridePassenger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RidePassengerUpdateManyAndReturnArgs>(args: SelectSubset<T, RidePassengerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RidePassenger.
     * @param {RidePassengerUpsertArgs} args - Arguments to update or create a RidePassenger.
     * @example
     * // Update or create a RidePassenger
     * const ridePassenger = await prisma.ridePassenger.upsert({
     *   create: {
     *     // ... data to create a RidePassenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RidePassenger we want to update
     *   }
     * })
     */
    upsert<T extends RidePassengerUpsertArgs>(args: SelectSubset<T, RidePassengerUpsertArgs<ExtArgs>>): Prisma__RidePassengerClient<$Result.GetResult<Prisma.$RidePassengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RidePassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidePassengerCountArgs} args - Arguments to filter RidePassengers to count.
     * @example
     * // Count the number of RidePassengers
     * const count = await prisma.ridePassenger.count({
     *   where: {
     *     // ... the filter for the RidePassengers we want to count
     *   }
     * })
    **/
    count<T extends RidePassengerCountArgs>(
      args?: Subset<T, RidePassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RidePassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RidePassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidePassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RidePassengerAggregateArgs>(args: Subset<T, RidePassengerAggregateArgs>): Prisma.PrismaPromise<GetRidePassengerAggregateType<T>>

    /**
     * Group by RidePassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidePassengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RidePassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RidePassengerGroupByArgs['orderBy'] }
        : { orderBy?: RidePassengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RidePassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRidePassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RidePassenger model
   */
  readonly fields: RidePassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RidePassenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RidePassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends RideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RideDefaultArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RidePassenger model
   */
  interface RidePassengerFieldRefs {
    readonly id: FieldRef<"RidePassenger", 'String'>
    readonly rideId: FieldRef<"RidePassenger", 'String'>
    readonly bookingId: FieldRef<"RidePassenger", 'String'>
    readonly sequenceOrder: FieldRef<"RidePassenger", 'Int'>
    readonly individualPrice: FieldRef<"RidePassenger", 'Float'>
    readonly pickupEta: FieldRef<"RidePassenger", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RidePassenger findUnique
   */
  export type RidePassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * Filter, which RidePassenger to fetch.
     */
    where: RidePassengerWhereUniqueInput
  }

  /**
   * RidePassenger findUniqueOrThrow
   */
  export type RidePassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * Filter, which RidePassenger to fetch.
     */
    where: RidePassengerWhereUniqueInput
  }

  /**
   * RidePassenger findFirst
   */
  export type RidePassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * Filter, which RidePassenger to fetch.
     */
    where?: RidePassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RidePassengers to fetch.
     */
    orderBy?: RidePassengerOrderByWithRelationInput | RidePassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RidePassengers.
     */
    cursor?: RidePassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RidePassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RidePassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RidePassengers.
     */
    distinct?: RidePassengerScalarFieldEnum | RidePassengerScalarFieldEnum[]
  }

  /**
   * RidePassenger findFirstOrThrow
   */
  export type RidePassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * Filter, which RidePassenger to fetch.
     */
    where?: RidePassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RidePassengers to fetch.
     */
    orderBy?: RidePassengerOrderByWithRelationInput | RidePassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RidePassengers.
     */
    cursor?: RidePassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RidePassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RidePassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RidePassengers.
     */
    distinct?: RidePassengerScalarFieldEnum | RidePassengerScalarFieldEnum[]
  }

  /**
   * RidePassenger findMany
   */
  export type RidePassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * Filter, which RidePassengers to fetch.
     */
    where?: RidePassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RidePassengers to fetch.
     */
    orderBy?: RidePassengerOrderByWithRelationInput | RidePassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RidePassengers.
     */
    cursor?: RidePassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RidePassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RidePassengers.
     */
    skip?: number
    distinct?: RidePassengerScalarFieldEnum | RidePassengerScalarFieldEnum[]
  }

  /**
   * RidePassenger create
   */
  export type RidePassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a RidePassenger.
     */
    data: XOR<RidePassengerCreateInput, RidePassengerUncheckedCreateInput>
  }

  /**
   * RidePassenger createMany
   */
  export type RidePassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RidePassengers.
     */
    data: RidePassengerCreateManyInput | RidePassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RidePassenger createManyAndReturn
   */
  export type RidePassengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * The data used to create many RidePassengers.
     */
    data: RidePassengerCreateManyInput | RidePassengerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RidePassenger update
   */
  export type RidePassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a RidePassenger.
     */
    data: XOR<RidePassengerUpdateInput, RidePassengerUncheckedUpdateInput>
    /**
     * Choose, which RidePassenger to update.
     */
    where: RidePassengerWhereUniqueInput
  }

  /**
   * RidePassenger updateMany
   */
  export type RidePassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RidePassengers.
     */
    data: XOR<RidePassengerUpdateManyMutationInput, RidePassengerUncheckedUpdateManyInput>
    /**
     * Filter which RidePassengers to update
     */
    where?: RidePassengerWhereInput
    /**
     * Limit how many RidePassengers to update.
     */
    limit?: number
  }

  /**
   * RidePassenger updateManyAndReturn
   */
  export type RidePassengerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * The data used to update RidePassengers.
     */
    data: XOR<RidePassengerUpdateManyMutationInput, RidePassengerUncheckedUpdateManyInput>
    /**
     * Filter which RidePassengers to update
     */
    where?: RidePassengerWhereInput
    /**
     * Limit how many RidePassengers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RidePassenger upsert
   */
  export type RidePassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the RidePassenger to update in case it exists.
     */
    where: RidePassengerWhereUniqueInput
    /**
     * In case the RidePassenger found by the `where` argument doesn't exist, create a new RidePassenger with this data.
     */
    create: XOR<RidePassengerCreateInput, RidePassengerUncheckedCreateInput>
    /**
     * In case the RidePassenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RidePassengerUpdateInput, RidePassengerUncheckedUpdateInput>
  }

  /**
   * RidePassenger delete
   */
  export type RidePassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
    /**
     * Filter which RidePassenger to delete.
     */
    where: RidePassengerWhereUniqueInput
  }

  /**
   * RidePassenger deleteMany
   */
  export type RidePassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RidePassengers to delete
     */
    where?: RidePassengerWhereInput
    /**
     * Limit how many RidePassengers to delete.
     */
    limit?: number
  }

  /**
   * RidePassenger without action
   */
  export type RidePassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RidePassenger
     */
    select?: RidePassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RidePassenger
     */
    omit?: RidePassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RidePassengerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PassengerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PassengerScalarFieldEnum = (typeof PassengerScalarFieldEnum)[keyof typeof PassengerScalarFieldEnum]


  export const CabScalarFieldEnum: {
    id: 'id',
    licensePlate: 'licensePlate',
    driverName: 'driverName',
    totalSeats: 'totalSeats',
    luggageCapacity: 'luggageCapacity',
    status: 'status',
    locationLat: 'locationLat',
    locationLng: 'locationLng',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CabScalarFieldEnum = (typeof CabScalarFieldEnum)[keyof typeof CabScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    passengerId: 'passengerId',
    pickupLat: 'pickupLat',
    pickupLng: 'pickupLng',
    dropoffLat: 'dropoffLat',
    dropoffLng: 'dropoffLng',
    luggageCount: 'luggageCount',
    status: 'status',
    detourToleranceKm: 'detourToleranceKm',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const RideScalarFieldEnum: {
    id: 'id',
    cabId: 'cabId',
    status: 'status',
    routeJson: 'routeJson',
    totalDistance: 'totalDistance',
    totalPrice: 'totalPrice',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RideScalarFieldEnum = (typeof RideScalarFieldEnum)[keyof typeof RideScalarFieldEnum]


  export const RidePassengerScalarFieldEnum: {
    id: 'id',
    rideId: 'rideId',
    bookingId: 'bookingId',
    sequenceOrder: 'sequenceOrder',
    individualPrice: 'individualPrice',
    pickupEta: 'pickupEta'
  };

  export type RidePassengerScalarFieldEnum = (typeof RidePassengerScalarFieldEnum)[keyof typeof RidePassengerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CabStatus'
   */
  export type EnumCabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CabStatus'>
    


  /**
   * Reference to a field of type 'CabStatus[]'
   */
  export type ListEnumCabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CabStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'RideStatus'
   */
  export type EnumRideStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RideStatus'>
    


  /**
   * Reference to a field of type 'RideStatus[]'
   */
  export type ListEnumRideStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RideStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type PassengerWhereInput = {
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    id?: StringFilter<"Passenger"> | string
    name?: StringFilter<"Passenger"> | string
    phone?: StringFilter<"Passenger"> | string
    email?: StringFilter<"Passenger"> | string
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type PassengerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type PassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    email?: string
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    name?: StringFilter<"Passenger"> | string
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id" | "phone" | "email">

  export type PassengerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PassengerCountOrderByAggregateInput
    _max?: PassengerMaxOrderByAggregateInput
    _min?: PassengerMinOrderByAggregateInput
  }

  export type PassengerScalarWhereWithAggregatesInput = {
    AND?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    OR?: PassengerScalarWhereWithAggregatesInput[]
    NOT?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passenger"> | string
    name?: StringWithAggregatesFilter<"Passenger"> | string
    phone?: StringWithAggregatesFilter<"Passenger"> | string
    email?: StringWithAggregatesFilter<"Passenger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
  }

  export type CabWhereInput = {
    AND?: CabWhereInput | CabWhereInput[]
    OR?: CabWhereInput[]
    NOT?: CabWhereInput | CabWhereInput[]
    id?: StringFilter<"Cab"> | string
    licensePlate?: StringFilter<"Cab"> | string
    driverName?: StringFilter<"Cab"> | string
    totalSeats?: IntFilter<"Cab"> | number
    luggageCapacity?: IntFilter<"Cab"> | number
    status?: EnumCabStatusFilter<"Cab"> | $Enums.CabStatus
    locationLat?: FloatFilter<"Cab"> | number
    locationLng?: FloatFilter<"Cab"> | number
    createdAt?: DateTimeFilter<"Cab"> | Date | string
    updatedAt?: DateTimeFilter<"Cab"> | Date | string
    rides?: RideListRelationFilter
  }

  export type CabOrderByWithRelationInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    driverName?: SortOrder
    totalSeats?: SortOrder
    luggageCapacity?: SortOrder
    status?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rides?: RideOrderByRelationAggregateInput
  }

  export type CabWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licensePlate?: string
    AND?: CabWhereInput | CabWhereInput[]
    OR?: CabWhereInput[]
    NOT?: CabWhereInput | CabWhereInput[]
    driverName?: StringFilter<"Cab"> | string
    totalSeats?: IntFilter<"Cab"> | number
    luggageCapacity?: IntFilter<"Cab"> | number
    status?: EnumCabStatusFilter<"Cab"> | $Enums.CabStatus
    locationLat?: FloatFilter<"Cab"> | number
    locationLng?: FloatFilter<"Cab"> | number
    createdAt?: DateTimeFilter<"Cab"> | Date | string
    updatedAt?: DateTimeFilter<"Cab"> | Date | string
    rides?: RideListRelationFilter
  }, "id" | "licensePlate">

  export type CabOrderByWithAggregationInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    driverName?: SortOrder
    totalSeats?: SortOrder
    luggageCapacity?: SortOrder
    status?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CabCountOrderByAggregateInput
    _avg?: CabAvgOrderByAggregateInput
    _max?: CabMaxOrderByAggregateInput
    _min?: CabMinOrderByAggregateInput
    _sum?: CabSumOrderByAggregateInput
  }

  export type CabScalarWhereWithAggregatesInput = {
    AND?: CabScalarWhereWithAggregatesInput | CabScalarWhereWithAggregatesInput[]
    OR?: CabScalarWhereWithAggregatesInput[]
    NOT?: CabScalarWhereWithAggregatesInput | CabScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cab"> | string
    licensePlate?: StringWithAggregatesFilter<"Cab"> | string
    driverName?: StringWithAggregatesFilter<"Cab"> | string
    totalSeats?: IntWithAggregatesFilter<"Cab"> | number
    luggageCapacity?: IntWithAggregatesFilter<"Cab"> | number
    status?: EnumCabStatusWithAggregatesFilter<"Cab"> | $Enums.CabStatus
    locationLat?: FloatWithAggregatesFilter<"Cab"> | number
    locationLng?: FloatWithAggregatesFilter<"Cab"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cab"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cab"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    passengerId?: StringFilter<"Booking"> | string
    pickupLat?: FloatFilter<"Booking"> | number
    pickupLng?: FloatFilter<"Booking"> | number
    dropoffLat?: FloatFilter<"Booking"> | number
    dropoffLng?: FloatFilter<"Booking"> | number
    luggageCount?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    detourToleranceKm?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
    ridePassengers?: RidePassengerListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    pickupLat?: SortOrder
    pickupLng?: SortOrder
    dropoffLat?: SortOrder
    dropoffLng?: SortOrder
    luggageCount?: SortOrder
    status?: SortOrder
    detourToleranceKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passenger?: PassengerOrderByWithRelationInput
    ridePassengers?: RidePassengerOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    passengerId?: StringFilter<"Booking"> | string
    pickupLat?: FloatFilter<"Booking"> | number
    pickupLng?: FloatFilter<"Booking"> | number
    dropoffLat?: FloatFilter<"Booking"> | number
    dropoffLng?: FloatFilter<"Booking"> | number
    luggageCount?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    detourToleranceKm?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
    ridePassengers?: RidePassengerListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    pickupLat?: SortOrder
    pickupLng?: SortOrder
    dropoffLat?: SortOrder
    dropoffLng?: SortOrder
    luggageCount?: SortOrder
    status?: SortOrder
    detourToleranceKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    passengerId?: StringWithAggregatesFilter<"Booking"> | string
    pickupLat?: FloatWithAggregatesFilter<"Booking"> | number
    pickupLng?: FloatWithAggregatesFilter<"Booking"> | number
    dropoffLat?: FloatWithAggregatesFilter<"Booking"> | number
    dropoffLng?: FloatWithAggregatesFilter<"Booking"> | number
    luggageCount?: IntWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    detourToleranceKm?: FloatWithAggregatesFilter<"Booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type RideWhereInput = {
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    id?: StringFilter<"Ride"> | string
    cabId?: StringFilter<"Ride"> | string
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    routeJson?: JsonNullableFilter<"Ride">
    totalDistance?: FloatFilter<"Ride"> | number
    totalPrice?: FloatFilter<"Ride"> | number
    version?: IntFilter<"Ride"> | number
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    cab?: XOR<CabScalarRelationFilter, CabWhereInput>
    ridePassengers?: RidePassengerListRelationFilter
  }

  export type RideOrderByWithRelationInput = {
    id?: SortOrder
    cabId?: SortOrder
    status?: SortOrder
    routeJson?: SortOrderInput | SortOrder
    totalDistance?: SortOrder
    totalPrice?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cab?: CabOrderByWithRelationInput
    ridePassengers?: RidePassengerOrderByRelationAggregateInput
  }

  export type RideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    cabId?: StringFilter<"Ride"> | string
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    routeJson?: JsonNullableFilter<"Ride">
    totalDistance?: FloatFilter<"Ride"> | number
    totalPrice?: FloatFilter<"Ride"> | number
    version?: IntFilter<"Ride"> | number
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    cab?: XOR<CabScalarRelationFilter, CabWhereInput>
    ridePassengers?: RidePassengerListRelationFilter
  }, "id">

  export type RideOrderByWithAggregationInput = {
    id?: SortOrder
    cabId?: SortOrder
    status?: SortOrder
    routeJson?: SortOrderInput | SortOrder
    totalDistance?: SortOrder
    totalPrice?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RideCountOrderByAggregateInput
    _avg?: RideAvgOrderByAggregateInput
    _max?: RideMaxOrderByAggregateInput
    _min?: RideMinOrderByAggregateInput
    _sum?: RideSumOrderByAggregateInput
  }

  export type RideScalarWhereWithAggregatesInput = {
    AND?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    OR?: RideScalarWhereWithAggregatesInput[]
    NOT?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ride"> | string
    cabId?: StringWithAggregatesFilter<"Ride"> | string
    status?: EnumRideStatusWithAggregatesFilter<"Ride"> | $Enums.RideStatus
    routeJson?: JsonNullableWithAggregatesFilter<"Ride">
    totalDistance?: FloatWithAggregatesFilter<"Ride"> | number
    totalPrice?: FloatWithAggregatesFilter<"Ride"> | number
    version?: IntWithAggregatesFilter<"Ride"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
  }

  export type RidePassengerWhereInput = {
    AND?: RidePassengerWhereInput | RidePassengerWhereInput[]
    OR?: RidePassengerWhereInput[]
    NOT?: RidePassengerWhereInput | RidePassengerWhereInput[]
    id?: StringFilter<"RidePassenger"> | string
    rideId?: StringFilter<"RidePassenger"> | string
    bookingId?: StringFilter<"RidePassenger"> | string
    sequenceOrder?: IntFilter<"RidePassenger"> | number
    individualPrice?: FloatFilter<"RidePassenger"> | number
    pickupEta?: IntNullableFilter<"RidePassenger"> | number | null
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type RidePassengerOrderByWithRelationInput = {
    id?: SortOrder
    rideId?: SortOrder
    bookingId?: SortOrder
    sequenceOrder?: SortOrder
    individualPrice?: SortOrder
    pickupEta?: SortOrderInput | SortOrder
    ride?: RideOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type RidePassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rideId_bookingId?: RidePassengerRideIdBookingIdCompoundUniqueInput
    AND?: RidePassengerWhereInput | RidePassengerWhereInput[]
    OR?: RidePassengerWhereInput[]
    NOT?: RidePassengerWhereInput | RidePassengerWhereInput[]
    rideId?: StringFilter<"RidePassenger"> | string
    bookingId?: StringFilter<"RidePassenger"> | string
    sequenceOrder?: IntFilter<"RidePassenger"> | number
    individualPrice?: FloatFilter<"RidePassenger"> | number
    pickupEta?: IntNullableFilter<"RidePassenger"> | number | null
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "rideId_bookingId">

  export type RidePassengerOrderByWithAggregationInput = {
    id?: SortOrder
    rideId?: SortOrder
    bookingId?: SortOrder
    sequenceOrder?: SortOrder
    individualPrice?: SortOrder
    pickupEta?: SortOrderInput | SortOrder
    _count?: RidePassengerCountOrderByAggregateInput
    _avg?: RidePassengerAvgOrderByAggregateInput
    _max?: RidePassengerMaxOrderByAggregateInput
    _min?: RidePassengerMinOrderByAggregateInput
    _sum?: RidePassengerSumOrderByAggregateInput
  }

  export type RidePassengerScalarWhereWithAggregatesInput = {
    AND?: RidePassengerScalarWhereWithAggregatesInput | RidePassengerScalarWhereWithAggregatesInput[]
    OR?: RidePassengerScalarWhereWithAggregatesInput[]
    NOT?: RidePassengerScalarWhereWithAggregatesInput | RidePassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RidePassenger"> | string
    rideId?: StringWithAggregatesFilter<"RidePassenger"> | string
    bookingId?: StringWithAggregatesFilter<"RidePassenger"> | string
    sequenceOrder?: IntWithAggregatesFilter<"RidePassenger"> | number
    individualPrice?: FloatWithAggregatesFilter<"RidePassenger"> | number
    pickupEta?: IntNullableWithAggregatesFilter<"RidePassenger"> | number | null
  }

  export type PassengerCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerCreateManyInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabCreateInput = {
    id?: string
    licensePlate: string
    driverName: string
    totalSeats?: number
    luggageCapacity?: number
    status?: $Enums.CabStatus
    locationLat?: number
    locationLng?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: RideCreateNestedManyWithoutCabInput
  }

  export type CabUncheckedCreateInput = {
    id?: string
    licensePlate: string
    driverName: string
    totalSeats?: number
    luggageCapacity?: number
    status?: $Enums.CabStatus
    locationLat?: number
    locationLng?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: RideUncheckedCreateNestedManyWithoutCabInput
  }

  export type CabUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    luggageCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumCabStatusFieldUpdateOperationsInput | $Enums.CabStatus
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: RideUpdateManyWithoutCabNestedInput
  }

  export type CabUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    luggageCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumCabStatusFieldUpdateOperationsInput | $Enums.CabStatus
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: RideUncheckedUpdateManyWithoutCabNestedInput
  }

  export type CabCreateManyInput = {
    id?: string
    licensePlate: string
    driverName: string
    totalSeats?: number
    luggageCapacity?: number
    status?: $Enums.CabStatus
    locationLat?: number
    locationLng?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    luggageCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumCabStatusFieldUpdateOperationsInput | $Enums.CabStatus
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    luggageCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumCabStatusFieldUpdateOperationsInput | $Enums.CabStatus
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    passenger: PassengerCreateNestedOneWithoutBookingsInput
    ridePassengers?: RidePassengerCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    passengerId: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ridePassengers?: RidePassengerUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passenger?: PassengerUpdateOneRequiredWithoutBookingsNestedInput
    ridePassengers?: RidePassengerUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ridePassengers?: RidePassengerUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    passengerId: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateInput = {
    id?: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cab: CabCreateNestedOneWithoutRidesInput
    ridePassengers?: RidePassengerCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateInput = {
    id?: string
    cabId: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ridePassengers?: RidePassengerUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cab?: CabUpdateOneRequiredWithoutRidesNestedInput
    ridePassengers?: RidePassengerUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabId?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ridePassengers?: RidePassengerUncheckedUpdateManyWithoutRideNestedInput
  }

  export type RideCreateManyInput = {
    id?: string
    cabId: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabId?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RidePassengerCreateInput = {
    id?: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
    ride: RideCreateNestedOneWithoutRidePassengersInput
    booking: BookingCreateNestedOneWithoutRidePassengersInput
  }

  export type RidePassengerUncheckedCreateInput = {
    id?: string
    rideId: string
    bookingId: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
  }

  export type RidePassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
    ride?: RideUpdateOneRequiredWithoutRidePassengersNestedInput
    booking?: BookingUpdateOneRequiredWithoutRidePassengersNestedInput
  }

  export type RidePassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rideId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RidePassengerCreateManyInput = {
    id?: string
    rideId: string
    bookingId: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
  }

  export type RidePassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RidePassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rideId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PassengerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassengerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CabStatus | EnumCabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCabStatusFilter<$PrismaModel> | $Enums.CabStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RideListRelationFilter = {
    every?: RideWhereInput
    some?: RideWhereInput
    none?: RideWhereInput
  }

  export type RideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CabCountOrderByAggregateInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    driverName?: SortOrder
    totalSeats?: SortOrder
    luggageCapacity?: SortOrder
    status?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabAvgOrderByAggregateInput = {
    totalSeats?: SortOrder
    luggageCapacity?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type CabMaxOrderByAggregateInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    driverName?: SortOrder
    totalSeats?: SortOrder
    luggageCapacity?: SortOrder
    status?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabMinOrderByAggregateInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    driverName?: SortOrder
    totalSeats?: SortOrder
    luggageCapacity?: SortOrder
    status?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabSumOrderByAggregateInput = {
    totalSeats?: SortOrder
    luggageCapacity?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CabStatus | EnumCabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCabStatusWithAggregatesFilter<$PrismaModel> | $Enums.CabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCabStatusFilter<$PrismaModel>
    _max?: NestedEnumCabStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type PassengerScalarRelationFilter = {
    is?: PassengerWhereInput
    isNot?: PassengerWhereInput
  }

  export type RidePassengerListRelationFilter = {
    every?: RidePassengerWhereInput
    some?: RidePassengerWhereInput
    none?: RidePassengerWhereInput
  }

  export type RidePassengerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    pickupLat?: SortOrder
    pickupLng?: SortOrder
    dropoffLat?: SortOrder
    dropoffLng?: SortOrder
    luggageCount?: SortOrder
    status?: SortOrder
    detourToleranceKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    pickupLat?: SortOrder
    pickupLng?: SortOrder
    dropoffLat?: SortOrder
    dropoffLng?: SortOrder
    luggageCount?: SortOrder
    detourToleranceKm?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    pickupLat?: SortOrder
    pickupLng?: SortOrder
    dropoffLat?: SortOrder
    dropoffLng?: SortOrder
    luggageCount?: SortOrder
    status?: SortOrder
    detourToleranceKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    pickupLat?: SortOrder
    pickupLng?: SortOrder
    dropoffLat?: SortOrder
    dropoffLng?: SortOrder
    luggageCount?: SortOrder
    status?: SortOrder
    detourToleranceKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    pickupLat?: SortOrder
    pickupLng?: SortOrder
    dropoffLat?: SortOrder
    dropoffLng?: SortOrder
    luggageCount?: SortOrder
    detourToleranceKm?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumRideStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusFilter<$PrismaModel> | $Enums.RideStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CabScalarRelationFilter = {
    is?: CabWhereInput
    isNot?: CabWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RideCountOrderByAggregateInput = {
    id?: SortOrder
    cabId?: SortOrder
    status?: SortOrder
    routeJson?: SortOrder
    totalDistance?: SortOrder
    totalPrice?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideAvgOrderByAggregateInput = {
    totalDistance?: SortOrder
    totalPrice?: SortOrder
    version?: SortOrder
  }

  export type RideMaxOrderByAggregateInput = {
    id?: SortOrder
    cabId?: SortOrder
    status?: SortOrder
    totalDistance?: SortOrder
    totalPrice?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideMinOrderByAggregateInput = {
    id?: SortOrder
    cabId?: SortOrder
    status?: SortOrder
    totalDistance?: SortOrder
    totalPrice?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideSumOrderByAggregateInput = {
    totalDistance?: SortOrder
    totalPrice?: SortOrder
    version?: SortOrder
  }

  export type EnumRideStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusWithAggregatesFilter<$PrismaModel> | $Enums.RideStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRideStatusFilter<$PrismaModel>
    _max?: NestedEnumRideStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RideScalarRelationFilter = {
    is?: RideWhereInput
    isNot?: RideWhereInput
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type RidePassengerRideIdBookingIdCompoundUniqueInput = {
    rideId: string
    bookingId: string
  }

  export type RidePassengerCountOrderByAggregateInput = {
    id?: SortOrder
    rideId?: SortOrder
    bookingId?: SortOrder
    sequenceOrder?: SortOrder
    individualPrice?: SortOrder
    pickupEta?: SortOrder
  }

  export type RidePassengerAvgOrderByAggregateInput = {
    sequenceOrder?: SortOrder
    individualPrice?: SortOrder
    pickupEta?: SortOrder
  }

  export type RidePassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    rideId?: SortOrder
    bookingId?: SortOrder
    sequenceOrder?: SortOrder
    individualPrice?: SortOrder
    pickupEta?: SortOrder
  }

  export type RidePassengerMinOrderByAggregateInput = {
    id?: SortOrder
    rideId?: SortOrder
    bookingId?: SortOrder
    sequenceOrder?: SortOrder
    individualPrice?: SortOrder
    pickupEta?: SortOrder
  }

  export type RidePassengerSumOrderByAggregateInput = {
    sequenceOrder?: SortOrder
    individualPrice?: SortOrder
    pickupEta?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPassengerInput | BookingUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPassengerInput | BookingUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPassengerInput | BookingUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPassengerInput | BookingUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPassengerInput | BookingUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPassengerInput | BookingUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RideCreateNestedManyWithoutCabInput = {
    create?: XOR<RideCreateWithoutCabInput, RideUncheckedCreateWithoutCabInput> | RideCreateWithoutCabInput[] | RideUncheckedCreateWithoutCabInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCabInput | RideCreateOrConnectWithoutCabInput[]
    createMany?: RideCreateManyCabInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutCabInput = {
    create?: XOR<RideCreateWithoutCabInput, RideUncheckedCreateWithoutCabInput> | RideCreateWithoutCabInput[] | RideUncheckedCreateWithoutCabInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCabInput | RideCreateOrConnectWithoutCabInput[]
    createMany?: RideCreateManyCabInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCabStatusFieldUpdateOperationsInput = {
    set?: $Enums.CabStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RideUpdateManyWithoutCabNestedInput = {
    create?: XOR<RideCreateWithoutCabInput, RideUncheckedCreateWithoutCabInput> | RideCreateWithoutCabInput[] | RideUncheckedCreateWithoutCabInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCabInput | RideCreateOrConnectWithoutCabInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutCabInput | RideUpsertWithWhereUniqueWithoutCabInput[]
    createMany?: RideCreateManyCabInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutCabInput | RideUpdateWithWhereUniqueWithoutCabInput[]
    updateMany?: RideUpdateManyWithWhereWithoutCabInput | RideUpdateManyWithWhereWithoutCabInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideUncheckedUpdateManyWithoutCabNestedInput = {
    create?: XOR<RideCreateWithoutCabInput, RideUncheckedCreateWithoutCabInput> | RideCreateWithoutCabInput[] | RideUncheckedCreateWithoutCabInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCabInput | RideCreateOrConnectWithoutCabInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutCabInput | RideUpsertWithWhereUniqueWithoutCabInput[]
    createMany?: RideCreateManyCabInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutCabInput | RideUpdateWithWhereUniqueWithoutCabInput[]
    updateMany?: RideUpdateManyWithWhereWithoutCabInput | RideUpdateManyWithWhereWithoutCabInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type PassengerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutBookingsInput
    connect?: PassengerWhereUniqueInput
  }

  export type RidePassengerCreateNestedManyWithoutBookingInput = {
    create?: XOR<RidePassengerCreateWithoutBookingInput, RidePassengerUncheckedCreateWithoutBookingInput> | RidePassengerCreateWithoutBookingInput[] | RidePassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutBookingInput | RidePassengerCreateOrConnectWithoutBookingInput[]
    createMany?: RidePassengerCreateManyBookingInputEnvelope
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
  }

  export type RidePassengerUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<RidePassengerCreateWithoutBookingInput, RidePassengerUncheckedCreateWithoutBookingInput> | RidePassengerCreateWithoutBookingInput[] | RidePassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutBookingInput | RidePassengerCreateOrConnectWithoutBookingInput[]
    createMany?: RidePassengerCreateManyBookingInputEnvelope
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type PassengerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutBookingsInput
    upsert?: PassengerUpsertWithoutBookingsInput
    connect?: PassengerWhereUniqueInput
    update?: XOR<XOR<PassengerUpdateToOneWithWhereWithoutBookingsInput, PassengerUpdateWithoutBookingsInput>, PassengerUncheckedUpdateWithoutBookingsInput>
  }

  export type RidePassengerUpdateManyWithoutBookingNestedInput = {
    create?: XOR<RidePassengerCreateWithoutBookingInput, RidePassengerUncheckedCreateWithoutBookingInput> | RidePassengerCreateWithoutBookingInput[] | RidePassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutBookingInput | RidePassengerCreateOrConnectWithoutBookingInput[]
    upsert?: RidePassengerUpsertWithWhereUniqueWithoutBookingInput | RidePassengerUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: RidePassengerCreateManyBookingInputEnvelope
    set?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    disconnect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    delete?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    update?: RidePassengerUpdateWithWhereUniqueWithoutBookingInput | RidePassengerUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: RidePassengerUpdateManyWithWhereWithoutBookingInput | RidePassengerUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: RidePassengerScalarWhereInput | RidePassengerScalarWhereInput[]
  }

  export type RidePassengerUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<RidePassengerCreateWithoutBookingInput, RidePassengerUncheckedCreateWithoutBookingInput> | RidePassengerCreateWithoutBookingInput[] | RidePassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutBookingInput | RidePassengerCreateOrConnectWithoutBookingInput[]
    upsert?: RidePassengerUpsertWithWhereUniqueWithoutBookingInput | RidePassengerUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: RidePassengerCreateManyBookingInputEnvelope
    set?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    disconnect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    delete?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    update?: RidePassengerUpdateWithWhereUniqueWithoutBookingInput | RidePassengerUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: RidePassengerUpdateManyWithWhereWithoutBookingInput | RidePassengerUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: RidePassengerScalarWhereInput | RidePassengerScalarWhereInput[]
  }

  export type CabCreateNestedOneWithoutRidesInput = {
    create?: XOR<CabCreateWithoutRidesInput, CabUncheckedCreateWithoutRidesInput>
    connectOrCreate?: CabCreateOrConnectWithoutRidesInput
    connect?: CabWhereUniqueInput
  }

  export type RidePassengerCreateNestedManyWithoutRideInput = {
    create?: XOR<RidePassengerCreateWithoutRideInput, RidePassengerUncheckedCreateWithoutRideInput> | RidePassengerCreateWithoutRideInput[] | RidePassengerUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutRideInput | RidePassengerCreateOrConnectWithoutRideInput[]
    createMany?: RidePassengerCreateManyRideInputEnvelope
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
  }

  export type RidePassengerUncheckedCreateNestedManyWithoutRideInput = {
    create?: XOR<RidePassengerCreateWithoutRideInput, RidePassengerUncheckedCreateWithoutRideInput> | RidePassengerCreateWithoutRideInput[] | RidePassengerUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutRideInput | RidePassengerCreateOrConnectWithoutRideInput[]
    createMany?: RidePassengerCreateManyRideInputEnvelope
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
  }

  export type EnumRideStatusFieldUpdateOperationsInput = {
    set?: $Enums.RideStatus
  }

  export type CabUpdateOneRequiredWithoutRidesNestedInput = {
    create?: XOR<CabCreateWithoutRidesInput, CabUncheckedCreateWithoutRidesInput>
    connectOrCreate?: CabCreateOrConnectWithoutRidesInput
    upsert?: CabUpsertWithoutRidesInput
    connect?: CabWhereUniqueInput
    update?: XOR<XOR<CabUpdateToOneWithWhereWithoutRidesInput, CabUpdateWithoutRidesInput>, CabUncheckedUpdateWithoutRidesInput>
  }

  export type RidePassengerUpdateManyWithoutRideNestedInput = {
    create?: XOR<RidePassengerCreateWithoutRideInput, RidePassengerUncheckedCreateWithoutRideInput> | RidePassengerCreateWithoutRideInput[] | RidePassengerUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutRideInput | RidePassengerCreateOrConnectWithoutRideInput[]
    upsert?: RidePassengerUpsertWithWhereUniqueWithoutRideInput | RidePassengerUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: RidePassengerCreateManyRideInputEnvelope
    set?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    disconnect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    delete?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    update?: RidePassengerUpdateWithWhereUniqueWithoutRideInput | RidePassengerUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: RidePassengerUpdateManyWithWhereWithoutRideInput | RidePassengerUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: RidePassengerScalarWhereInput | RidePassengerScalarWhereInput[]
  }

  export type RidePassengerUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<RidePassengerCreateWithoutRideInput, RidePassengerUncheckedCreateWithoutRideInput> | RidePassengerCreateWithoutRideInput[] | RidePassengerUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RidePassengerCreateOrConnectWithoutRideInput | RidePassengerCreateOrConnectWithoutRideInput[]
    upsert?: RidePassengerUpsertWithWhereUniqueWithoutRideInput | RidePassengerUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: RidePassengerCreateManyRideInputEnvelope
    set?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    disconnect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    delete?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    connect?: RidePassengerWhereUniqueInput | RidePassengerWhereUniqueInput[]
    update?: RidePassengerUpdateWithWhereUniqueWithoutRideInput | RidePassengerUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: RidePassengerUpdateManyWithWhereWithoutRideInput | RidePassengerUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: RidePassengerScalarWhereInput | RidePassengerScalarWhereInput[]
  }

  export type RideCreateNestedOneWithoutRidePassengersInput = {
    create?: XOR<RideCreateWithoutRidePassengersInput, RideUncheckedCreateWithoutRidePassengersInput>
    connectOrCreate?: RideCreateOrConnectWithoutRidePassengersInput
    connect?: RideWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutRidePassengersInput = {
    create?: XOR<BookingCreateWithoutRidePassengersInput, BookingUncheckedCreateWithoutRidePassengersInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRidePassengersInput
    connect?: BookingWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RideUpdateOneRequiredWithoutRidePassengersNestedInput = {
    create?: XOR<RideCreateWithoutRidePassengersInput, RideUncheckedCreateWithoutRidePassengersInput>
    connectOrCreate?: RideCreateOrConnectWithoutRidePassengersInput
    upsert?: RideUpsertWithoutRidePassengersInput
    connect?: RideWhereUniqueInput
    update?: XOR<XOR<RideUpdateToOneWithWhereWithoutRidePassengersInput, RideUpdateWithoutRidePassengersInput>, RideUncheckedUpdateWithoutRidePassengersInput>
  }

  export type BookingUpdateOneRequiredWithoutRidePassengersNestedInput = {
    create?: XOR<BookingCreateWithoutRidePassengersInput, BookingUncheckedCreateWithoutRidePassengersInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRidePassengersInput
    upsert?: BookingUpsertWithoutRidePassengersInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutRidePassengersInput, BookingUpdateWithoutRidePassengersInput>, BookingUncheckedUpdateWithoutRidePassengersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CabStatus | EnumCabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCabStatusFilter<$PrismaModel> | $Enums.CabStatus
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumCabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CabStatus | EnumCabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabStatus[] | ListEnumCabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCabStatusWithAggregatesFilter<$PrismaModel> | $Enums.CabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCabStatusFilter<$PrismaModel>
    _max?: NestedEnumCabStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumRideStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusFilter<$PrismaModel> | $Enums.RideStatus
  }

  export type NestedEnumRideStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusWithAggregatesFilter<$PrismaModel> | $Enums.RideStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRideStatusFilter<$PrismaModel>
    _max?: NestedEnumRideStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingCreateWithoutPassengerInput = {
    id?: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ridePassengers?: RidePassengerCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPassengerInput = {
    id?: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ridePassengers?: RidePassengerUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput>
  }

  export type BookingCreateManyPassengerInputEnvelope = {
    data: BookingCreateManyPassengerInput | BookingCreateManyPassengerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPassengerInput, BookingUncheckedUpdateWithoutPassengerInput>
    create: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPassengerInput, BookingUncheckedUpdateWithoutPassengerInput>
  }

  export type BookingUpdateManyWithWhereWithoutPassengerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPassengerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    passengerId?: StringFilter<"Booking"> | string
    pickupLat?: FloatFilter<"Booking"> | number
    pickupLng?: FloatFilter<"Booking"> | number
    dropoffLat?: FloatFilter<"Booking"> | number
    dropoffLng?: FloatFilter<"Booking"> | number
    luggageCount?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    detourToleranceKm?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type RideCreateWithoutCabInput = {
    id?: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ridePassengers?: RidePassengerCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutCabInput = {
    id?: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ridePassengers?: RidePassengerUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutCabInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutCabInput, RideUncheckedCreateWithoutCabInput>
  }

  export type RideCreateManyCabInputEnvelope = {
    data: RideCreateManyCabInput | RideCreateManyCabInput[]
    skipDuplicates?: boolean
  }

  export type RideUpsertWithWhereUniqueWithoutCabInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutCabInput, RideUncheckedUpdateWithoutCabInput>
    create: XOR<RideCreateWithoutCabInput, RideUncheckedCreateWithoutCabInput>
  }

  export type RideUpdateWithWhereUniqueWithoutCabInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutCabInput, RideUncheckedUpdateWithoutCabInput>
  }

  export type RideUpdateManyWithWhereWithoutCabInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutCabInput>
  }

  export type RideScalarWhereInput = {
    AND?: RideScalarWhereInput | RideScalarWhereInput[]
    OR?: RideScalarWhereInput[]
    NOT?: RideScalarWhereInput | RideScalarWhereInput[]
    id?: StringFilter<"Ride"> | string
    cabId?: StringFilter<"Ride"> | string
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    routeJson?: JsonNullableFilter<"Ride">
    totalDistance?: FloatFilter<"Ride"> | number
    totalPrice?: FloatFilter<"Ride"> | number
    version?: IntFilter<"Ride"> | number
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
  }

  export type PassengerCreateWithoutBookingsInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerCreateOrConnectWithoutBookingsInput = {
    where: PassengerWhereUniqueInput
    create: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
  }

  export type RidePassengerCreateWithoutBookingInput = {
    id?: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
    ride: RideCreateNestedOneWithoutRidePassengersInput
  }

  export type RidePassengerUncheckedCreateWithoutBookingInput = {
    id?: string
    rideId: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
  }

  export type RidePassengerCreateOrConnectWithoutBookingInput = {
    where: RidePassengerWhereUniqueInput
    create: XOR<RidePassengerCreateWithoutBookingInput, RidePassengerUncheckedCreateWithoutBookingInput>
  }

  export type RidePassengerCreateManyBookingInputEnvelope = {
    data: RidePassengerCreateManyBookingInput | RidePassengerCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type PassengerUpsertWithoutBookingsInput = {
    update: XOR<PassengerUpdateWithoutBookingsInput, PassengerUncheckedUpdateWithoutBookingsInput>
    create: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    where?: PassengerWhereInput
  }

  export type PassengerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PassengerWhereInput
    data: XOR<PassengerUpdateWithoutBookingsInput, PassengerUncheckedUpdateWithoutBookingsInput>
  }

  export type PassengerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RidePassengerUpsertWithWhereUniqueWithoutBookingInput = {
    where: RidePassengerWhereUniqueInput
    update: XOR<RidePassengerUpdateWithoutBookingInput, RidePassengerUncheckedUpdateWithoutBookingInput>
    create: XOR<RidePassengerCreateWithoutBookingInput, RidePassengerUncheckedCreateWithoutBookingInput>
  }

  export type RidePassengerUpdateWithWhereUniqueWithoutBookingInput = {
    where: RidePassengerWhereUniqueInput
    data: XOR<RidePassengerUpdateWithoutBookingInput, RidePassengerUncheckedUpdateWithoutBookingInput>
  }

  export type RidePassengerUpdateManyWithWhereWithoutBookingInput = {
    where: RidePassengerScalarWhereInput
    data: XOR<RidePassengerUpdateManyMutationInput, RidePassengerUncheckedUpdateManyWithoutBookingInput>
  }

  export type RidePassengerScalarWhereInput = {
    AND?: RidePassengerScalarWhereInput | RidePassengerScalarWhereInput[]
    OR?: RidePassengerScalarWhereInput[]
    NOT?: RidePassengerScalarWhereInput | RidePassengerScalarWhereInput[]
    id?: StringFilter<"RidePassenger"> | string
    rideId?: StringFilter<"RidePassenger"> | string
    bookingId?: StringFilter<"RidePassenger"> | string
    sequenceOrder?: IntFilter<"RidePassenger"> | number
    individualPrice?: FloatFilter<"RidePassenger"> | number
    pickupEta?: IntNullableFilter<"RidePassenger"> | number | null
  }

  export type CabCreateWithoutRidesInput = {
    id?: string
    licensePlate: string
    driverName: string
    totalSeats?: number
    luggageCapacity?: number
    status?: $Enums.CabStatus
    locationLat?: number
    locationLng?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabUncheckedCreateWithoutRidesInput = {
    id?: string
    licensePlate: string
    driverName: string
    totalSeats?: number
    luggageCapacity?: number
    status?: $Enums.CabStatus
    locationLat?: number
    locationLng?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabCreateOrConnectWithoutRidesInput = {
    where: CabWhereUniqueInput
    create: XOR<CabCreateWithoutRidesInput, CabUncheckedCreateWithoutRidesInput>
  }

  export type RidePassengerCreateWithoutRideInput = {
    id?: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
    booking: BookingCreateNestedOneWithoutRidePassengersInput
  }

  export type RidePassengerUncheckedCreateWithoutRideInput = {
    id?: string
    bookingId: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
  }

  export type RidePassengerCreateOrConnectWithoutRideInput = {
    where: RidePassengerWhereUniqueInput
    create: XOR<RidePassengerCreateWithoutRideInput, RidePassengerUncheckedCreateWithoutRideInput>
  }

  export type RidePassengerCreateManyRideInputEnvelope = {
    data: RidePassengerCreateManyRideInput | RidePassengerCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type CabUpsertWithoutRidesInput = {
    update: XOR<CabUpdateWithoutRidesInput, CabUncheckedUpdateWithoutRidesInput>
    create: XOR<CabCreateWithoutRidesInput, CabUncheckedCreateWithoutRidesInput>
    where?: CabWhereInput
  }

  export type CabUpdateToOneWithWhereWithoutRidesInput = {
    where?: CabWhereInput
    data: XOR<CabUpdateWithoutRidesInput, CabUncheckedUpdateWithoutRidesInput>
  }

  export type CabUpdateWithoutRidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    luggageCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumCabStatusFieldUpdateOperationsInput | $Enums.CabStatus
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabUncheckedUpdateWithoutRidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    luggageCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumCabStatusFieldUpdateOperationsInput | $Enums.CabStatus
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RidePassengerUpsertWithWhereUniqueWithoutRideInput = {
    where: RidePassengerWhereUniqueInput
    update: XOR<RidePassengerUpdateWithoutRideInput, RidePassengerUncheckedUpdateWithoutRideInput>
    create: XOR<RidePassengerCreateWithoutRideInput, RidePassengerUncheckedCreateWithoutRideInput>
  }

  export type RidePassengerUpdateWithWhereUniqueWithoutRideInput = {
    where: RidePassengerWhereUniqueInput
    data: XOR<RidePassengerUpdateWithoutRideInput, RidePassengerUncheckedUpdateWithoutRideInput>
  }

  export type RidePassengerUpdateManyWithWhereWithoutRideInput = {
    where: RidePassengerScalarWhereInput
    data: XOR<RidePassengerUpdateManyMutationInput, RidePassengerUncheckedUpdateManyWithoutRideInput>
  }

  export type RideCreateWithoutRidePassengersInput = {
    id?: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cab: CabCreateNestedOneWithoutRidesInput
  }

  export type RideUncheckedCreateWithoutRidePassengersInput = {
    id?: string
    cabId: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateOrConnectWithoutRidePassengersInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutRidePassengersInput, RideUncheckedCreateWithoutRidePassengersInput>
  }

  export type BookingCreateWithoutRidePassengersInput = {
    id?: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    passenger: PassengerCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutRidePassengersInput = {
    id?: string
    passengerId: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutRidePassengersInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRidePassengersInput, BookingUncheckedCreateWithoutRidePassengersInput>
  }

  export type RideUpsertWithoutRidePassengersInput = {
    update: XOR<RideUpdateWithoutRidePassengersInput, RideUncheckedUpdateWithoutRidePassengersInput>
    create: XOR<RideCreateWithoutRidePassengersInput, RideUncheckedCreateWithoutRidePassengersInput>
    where?: RideWhereInput
  }

  export type RideUpdateToOneWithWhereWithoutRidePassengersInput = {
    where?: RideWhereInput
    data: XOR<RideUpdateWithoutRidePassengersInput, RideUncheckedUpdateWithoutRidePassengersInput>
  }

  export type RideUpdateWithoutRidePassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cab?: CabUpdateOneRequiredWithoutRidesNestedInput
  }

  export type RideUncheckedUpdateWithoutRidePassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabId?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithoutRidePassengersInput = {
    update: XOR<BookingUpdateWithoutRidePassengersInput, BookingUncheckedUpdateWithoutRidePassengersInput>
    create: XOR<BookingCreateWithoutRidePassengersInput, BookingUncheckedCreateWithoutRidePassengersInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutRidePassengersInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutRidePassengersInput, BookingUncheckedUpdateWithoutRidePassengersInput>
  }

  export type BookingUpdateWithoutRidePassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passenger?: PassengerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutRidePassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyPassengerInput = {
    id?: string
    pickupLat: number
    pickupLng: number
    dropoffLat: number
    dropoffLng: number
    luggageCount?: number
    status?: $Enums.BookingStatus
    detourToleranceKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ridePassengers?: RidePassengerUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ridePassengers?: RidePassengerUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLat?: FloatFieldUpdateOperationsInput | number
    pickupLng?: FloatFieldUpdateOperationsInput | number
    dropoffLat?: FloatFieldUpdateOperationsInput | number
    dropoffLng?: FloatFieldUpdateOperationsInput | number
    luggageCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    detourToleranceKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyCabInput = {
    id?: string
    status?: $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: number
    totalPrice?: number
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateWithoutCabInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ridePassengers?: RidePassengerUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutCabInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ridePassengers?: RidePassengerUncheckedUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateManyWithoutCabInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    routeJson?: NullableJsonNullValueInput | InputJsonValue
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RidePassengerCreateManyBookingInput = {
    id?: string
    rideId: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
  }

  export type RidePassengerUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
    ride?: RideUpdateOneRequiredWithoutRidePassengersNestedInput
  }

  export type RidePassengerUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rideId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RidePassengerUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rideId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RidePassengerCreateManyRideInput = {
    id?: string
    bookingId: string
    sequenceOrder?: number
    individualPrice?: number
    pickupEta?: number | null
  }

  export type RidePassengerUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
    booking?: BookingUpdateOneRequiredWithoutRidePassengersNestedInput
  }

  export type RidePassengerUncheckedUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RidePassengerUncheckedUpdateManyWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    individualPrice?: FloatFieldUpdateOperationsInput | number
    pickupEta?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}