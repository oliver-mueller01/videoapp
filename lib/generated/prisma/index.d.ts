
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model videoapp_videos
 * 
 */
export type videoapp_videos = $Result.DefaultSelection<Prisma.$videoapp_videosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Videoapp_videos
 * const videoapp_videos = await prisma.videoapp_videos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Videoapp_videos
   * const videoapp_videos = await prisma.videoapp_videos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.videoapp_videos`: Exposes CRUD operations for the **videoapp_videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videoapp_videos
    * const videoapp_videos = await prisma.videoapp_videos.findMany()
    * ```
    */
  get videoapp_videos(): Prisma.videoapp_videosDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    videoapp_videos: 'videoapp_videos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "videoapp_videos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      videoapp_videos: {
        payload: Prisma.$videoapp_videosPayload<ExtArgs>
        fields: Prisma.videoapp_videosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videoapp_videosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videoapp_videosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>
          }
          findFirst: {
            args: Prisma.videoapp_videosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videoapp_videosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>
          }
          findMany: {
            args: Prisma.videoapp_videosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>[]
          }
          create: {
            args: Prisma.videoapp_videosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>
          }
          createMany: {
            args: Prisma.videoapp_videosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videoapp_videosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>[]
          }
          delete: {
            args: Prisma.videoapp_videosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>
          }
          update: {
            args: Prisma.videoapp_videosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>
          }
          deleteMany: {
            args: Prisma.videoapp_videosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videoapp_videosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videoapp_videosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>[]
          }
          upsert: {
            args: Prisma.videoapp_videosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoapp_videosPayload>
          }
          aggregate: {
            args: Prisma.Videoapp_videosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoapp_videos>
          }
          groupBy: {
            args: Prisma.videoapp_videosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Videoapp_videosGroupByOutputType>[]
          }
          count: {
            args: Prisma.videoapp_videosCountArgs<ExtArgs>
            result: $Utils.Optional<Videoapp_videosCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    videoapp_videos?: videoapp_videosOmit
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
   * Models
   */

  /**
   * Model videoapp_videos
   */

  export type AggregateVideoapp_videos = {
    _count: Videoapp_videosCountAggregateOutputType | null
    _min: Videoapp_videosMinAggregateOutputType | null
    _max: Videoapp_videosMaxAggregateOutputType | null
  }

  export type Videoapp_videosMinAggregateOutputType = {
    id: string | null
    title: string | null
    creator: string | null
    videoUrl: string | null
    thumbnail: string | null
    uploadedAt: Date | null
  }

  export type Videoapp_videosMaxAggregateOutputType = {
    id: string | null
    title: string | null
    creator: string | null
    videoUrl: string | null
    thumbnail: string | null
    uploadedAt: Date | null
  }

  export type Videoapp_videosCountAggregateOutputType = {
    id: number
    title: number
    creator: number
    videoUrl: number
    thumbnail: number
    uploadedAt: number
    _all: number
  }


  export type Videoapp_videosMinAggregateInputType = {
    id?: true
    title?: true
    creator?: true
    videoUrl?: true
    thumbnail?: true
    uploadedAt?: true
  }

  export type Videoapp_videosMaxAggregateInputType = {
    id?: true
    title?: true
    creator?: true
    videoUrl?: true
    thumbnail?: true
    uploadedAt?: true
  }

  export type Videoapp_videosCountAggregateInputType = {
    id?: true
    title?: true
    creator?: true
    videoUrl?: true
    thumbnail?: true
    uploadedAt?: true
    _all?: true
  }

  export type Videoapp_videosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videoapp_videos to aggregate.
     */
    where?: videoapp_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoapp_videos to fetch.
     */
    orderBy?: videoapp_videosOrderByWithRelationInput | videoapp_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videoapp_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoapp_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoapp_videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videoapp_videos
    **/
    _count?: true | Videoapp_videosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Videoapp_videosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Videoapp_videosMaxAggregateInputType
  }

  export type GetVideoapp_videosAggregateType<T extends Videoapp_videosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoapp_videos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoapp_videos[P]>
      : GetScalarType<T[P], AggregateVideoapp_videos[P]>
  }




  export type videoapp_videosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoapp_videosWhereInput
    orderBy?: videoapp_videosOrderByWithAggregationInput | videoapp_videosOrderByWithAggregationInput[]
    by: Videoapp_videosScalarFieldEnum[] | Videoapp_videosScalarFieldEnum
    having?: videoapp_videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Videoapp_videosCountAggregateInputType | true
    _min?: Videoapp_videosMinAggregateInputType
    _max?: Videoapp_videosMaxAggregateInputType
  }

  export type Videoapp_videosGroupByOutputType = {
    id: string
    title: string
    creator: string
    videoUrl: string
    thumbnail: string | null
    uploadedAt: Date
    _count: Videoapp_videosCountAggregateOutputType | null
    _min: Videoapp_videosMinAggregateOutputType | null
    _max: Videoapp_videosMaxAggregateOutputType | null
  }

  type GetVideoapp_videosGroupByPayload<T extends videoapp_videosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Videoapp_videosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Videoapp_videosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Videoapp_videosGroupByOutputType[P]>
            : GetScalarType<T[P], Videoapp_videosGroupByOutputType[P]>
        }
      >
    >


  export type videoapp_videosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    creator?: boolean
    videoUrl?: boolean
    thumbnail?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["videoapp_videos"]>

  export type videoapp_videosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    creator?: boolean
    videoUrl?: boolean
    thumbnail?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["videoapp_videos"]>

  export type videoapp_videosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    creator?: boolean
    videoUrl?: boolean
    thumbnail?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["videoapp_videos"]>

  export type videoapp_videosSelectScalar = {
    id?: boolean
    title?: boolean
    creator?: boolean
    videoUrl?: boolean
    thumbnail?: boolean
    uploadedAt?: boolean
  }

  export type videoapp_videosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "creator" | "videoUrl" | "thumbnail" | "uploadedAt", ExtArgs["result"]["videoapp_videos"]>

  export type $videoapp_videosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videoapp_videos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      creator: string
      videoUrl: string
      thumbnail: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["videoapp_videos"]>
    composites: {}
  }

  type videoapp_videosGetPayload<S extends boolean | null | undefined | videoapp_videosDefaultArgs> = $Result.GetResult<Prisma.$videoapp_videosPayload, S>

  type videoapp_videosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videoapp_videosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Videoapp_videosCountAggregateInputType | true
    }

  export interface videoapp_videosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videoapp_videos'], meta: { name: 'videoapp_videos' } }
    /**
     * Find zero or one Videoapp_videos that matches the filter.
     * @param {videoapp_videosFindUniqueArgs} args - Arguments to find a Videoapp_videos
     * @example
     * // Get one Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videoapp_videosFindUniqueArgs>(args: SelectSubset<T, videoapp_videosFindUniqueArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videoapp_videos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videoapp_videosFindUniqueOrThrowArgs} args - Arguments to find a Videoapp_videos
     * @example
     * // Get one Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videoapp_videosFindUniqueOrThrowArgs>(args: SelectSubset<T, videoapp_videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videoapp_videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoapp_videosFindFirstArgs} args - Arguments to find a Videoapp_videos
     * @example
     * // Get one Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videoapp_videosFindFirstArgs>(args?: SelectSubset<T, videoapp_videosFindFirstArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videoapp_videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoapp_videosFindFirstOrThrowArgs} args - Arguments to find a Videoapp_videos
     * @example
     * // Get one Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videoapp_videosFindFirstOrThrowArgs>(args?: SelectSubset<T, videoapp_videosFindFirstOrThrowArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videoapp_videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoapp_videosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.findMany()
     * 
     * // Get first 10 Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoapp_videosWithIdOnly = await prisma.videoapp_videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videoapp_videosFindManyArgs>(args?: SelectSubset<T, videoapp_videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videoapp_videos.
     * @param {videoapp_videosCreateArgs} args - Arguments to create a Videoapp_videos.
     * @example
     * // Create one Videoapp_videos
     * const Videoapp_videos = await prisma.videoapp_videos.create({
     *   data: {
     *     // ... data to create a Videoapp_videos
     *   }
     * })
     * 
     */
    create<T extends videoapp_videosCreateArgs>(args: SelectSubset<T, videoapp_videosCreateArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videoapp_videos.
     * @param {videoapp_videosCreateManyArgs} args - Arguments to create many Videoapp_videos.
     * @example
     * // Create many Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videoapp_videosCreateManyArgs>(args?: SelectSubset<T, videoapp_videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videoapp_videos and returns the data saved in the database.
     * @param {videoapp_videosCreateManyAndReturnArgs} args - Arguments to create many Videoapp_videos.
     * @example
     * // Create many Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videoapp_videos and only return the `id`
     * const videoapp_videosWithIdOnly = await prisma.videoapp_videos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videoapp_videosCreateManyAndReturnArgs>(args?: SelectSubset<T, videoapp_videosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videoapp_videos.
     * @param {videoapp_videosDeleteArgs} args - Arguments to delete one Videoapp_videos.
     * @example
     * // Delete one Videoapp_videos
     * const Videoapp_videos = await prisma.videoapp_videos.delete({
     *   where: {
     *     // ... filter to delete one Videoapp_videos
     *   }
     * })
     * 
     */
    delete<T extends videoapp_videosDeleteArgs>(args: SelectSubset<T, videoapp_videosDeleteArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videoapp_videos.
     * @param {videoapp_videosUpdateArgs} args - Arguments to update one Videoapp_videos.
     * @example
     * // Update one Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videoapp_videosUpdateArgs>(args: SelectSubset<T, videoapp_videosUpdateArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videoapp_videos.
     * @param {videoapp_videosDeleteManyArgs} args - Arguments to filter Videoapp_videos to delete.
     * @example
     * // Delete a few Videoapp_videos
     * const { count } = await prisma.videoapp_videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videoapp_videosDeleteManyArgs>(args?: SelectSubset<T, videoapp_videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videoapp_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoapp_videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videoapp_videosUpdateManyArgs>(args: SelectSubset<T, videoapp_videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videoapp_videos and returns the data updated in the database.
     * @param {videoapp_videosUpdateManyAndReturnArgs} args - Arguments to update many Videoapp_videos.
     * @example
     * // Update many Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videoapp_videos and only return the `id`
     * const videoapp_videosWithIdOnly = await prisma.videoapp_videos.updateManyAndReturn({
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
    updateManyAndReturn<T extends videoapp_videosUpdateManyAndReturnArgs>(args: SelectSubset<T, videoapp_videosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videoapp_videos.
     * @param {videoapp_videosUpsertArgs} args - Arguments to update or create a Videoapp_videos.
     * @example
     * // Update or create a Videoapp_videos
     * const videoapp_videos = await prisma.videoapp_videos.upsert({
     *   create: {
     *     // ... data to create a Videoapp_videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videoapp_videos we want to update
     *   }
     * })
     */
    upsert<T extends videoapp_videosUpsertArgs>(args: SelectSubset<T, videoapp_videosUpsertArgs<ExtArgs>>): Prisma__videoapp_videosClient<$Result.GetResult<Prisma.$videoapp_videosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videoapp_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoapp_videosCountArgs} args - Arguments to filter Videoapp_videos to count.
     * @example
     * // Count the number of Videoapp_videos
     * const count = await prisma.videoapp_videos.count({
     *   where: {
     *     // ... the filter for the Videoapp_videos we want to count
     *   }
     * })
    **/
    count<T extends videoapp_videosCountArgs>(
      args?: Subset<T, videoapp_videosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Videoapp_videosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videoapp_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Videoapp_videosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Videoapp_videosAggregateArgs>(args: Subset<T, Videoapp_videosAggregateArgs>): Prisma.PrismaPromise<GetVideoapp_videosAggregateType<T>>

    /**
     * Group by Videoapp_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoapp_videosGroupByArgs} args - Group by arguments.
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
      T extends videoapp_videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videoapp_videosGroupByArgs['orderBy'] }
        : { orderBy?: videoapp_videosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videoapp_videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoapp_videosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videoapp_videos model
   */
  readonly fields: videoapp_videosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videoapp_videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videoapp_videosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the videoapp_videos model
   */
  interface videoapp_videosFieldRefs {
    readonly id: FieldRef<"videoapp_videos", 'String'>
    readonly title: FieldRef<"videoapp_videos", 'String'>
    readonly creator: FieldRef<"videoapp_videos", 'String'>
    readonly videoUrl: FieldRef<"videoapp_videos", 'String'>
    readonly thumbnail: FieldRef<"videoapp_videos", 'String'>
    readonly uploadedAt: FieldRef<"videoapp_videos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * videoapp_videos findUnique
   */
  export type videoapp_videosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * Filter, which videoapp_videos to fetch.
     */
    where: videoapp_videosWhereUniqueInput
  }

  /**
   * videoapp_videos findUniqueOrThrow
   */
  export type videoapp_videosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * Filter, which videoapp_videos to fetch.
     */
    where: videoapp_videosWhereUniqueInput
  }

  /**
   * videoapp_videos findFirst
   */
  export type videoapp_videosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * Filter, which videoapp_videos to fetch.
     */
    where?: videoapp_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoapp_videos to fetch.
     */
    orderBy?: videoapp_videosOrderByWithRelationInput | videoapp_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videoapp_videos.
     */
    cursor?: videoapp_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoapp_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoapp_videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videoapp_videos.
     */
    distinct?: Videoapp_videosScalarFieldEnum | Videoapp_videosScalarFieldEnum[]
  }

  /**
   * videoapp_videos findFirstOrThrow
   */
  export type videoapp_videosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * Filter, which videoapp_videos to fetch.
     */
    where?: videoapp_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoapp_videos to fetch.
     */
    orderBy?: videoapp_videosOrderByWithRelationInput | videoapp_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videoapp_videos.
     */
    cursor?: videoapp_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoapp_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoapp_videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videoapp_videos.
     */
    distinct?: Videoapp_videosScalarFieldEnum | Videoapp_videosScalarFieldEnum[]
  }

  /**
   * videoapp_videos findMany
   */
  export type videoapp_videosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * Filter, which videoapp_videos to fetch.
     */
    where?: videoapp_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoapp_videos to fetch.
     */
    orderBy?: videoapp_videosOrderByWithRelationInput | videoapp_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videoapp_videos.
     */
    cursor?: videoapp_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoapp_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoapp_videos.
     */
    skip?: number
    distinct?: Videoapp_videosScalarFieldEnum | Videoapp_videosScalarFieldEnum[]
  }

  /**
   * videoapp_videos create
   */
  export type videoapp_videosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * The data needed to create a videoapp_videos.
     */
    data: XOR<videoapp_videosCreateInput, videoapp_videosUncheckedCreateInput>
  }

  /**
   * videoapp_videos createMany
   */
  export type videoapp_videosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videoapp_videos.
     */
    data: videoapp_videosCreateManyInput | videoapp_videosCreateManyInput[]
  }

  /**
   * videoapp_videos createManyAndReturn
   */
  export type videoapp_videosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * The data used to create many videoapp_videos.
     */
    data: videoapp_videosCreateManyInput | videoapp_videosCreateManyInput[]
  }

  /**
   * videoapp_videos update
   */
  export type videoapp_videosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * The data needed to update a videoapp_videos.
     */
    data: XOR<videoapp_videosUpdateInput, videoapp_videosUncheckedUpdateInput>
    /**
     * Choose, which videoapp_videos to update.
     */
    where: videoapp_videosWhereUniqueInput
  }

  /**
   * videoapp_videos updateMany
   */
  export type videoapp_videosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videoapp_videos.
     */
    data: XOR<videoapp_videosUpdateManyMutationInput, videoapp_videosUncheckedUpdateManyInput>
    /**
     * Filter which videoapp_videos to update
     */
    where?: videoapp_videosWhereInput
    /**
     * Limit how many videoapp_videos to update.
     */
    limit?: number
  }

  /**
   * videoapp_videos updateManyAndReturn
   */
  export type videoapp_videosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * The data used to update videoapp_videos.
     */
    data: XOR<videoapp_videosUpdateManyMutationInput, videoapp_videosUncheckedUpdateManyInput>
    /**
     * Filter which videoapp_videos to update
     */
    where?: videoapp_videosWhereInput
    /**
     * Limit how many videoapp_videos to update.
     */
    limit?: number
  }

  /**
   * videoapp_videos upsert
   */
  export type videoapp_videosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * The filter to search for the videoapp_videos to update in case it exists.
     */
    where: videoapp_videosWhereUniqueInput
    /**
     * In case the videoapp_videos found by the `where` argument doesn't exist, create a new videoapp_videos with this data.
     */
    create: XOR<videoapp_videosCreateInput, videoapp_videosUncheckedCreateInput>
    /**
     * In case the videoapp_videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videoapp_videosUpdateInput, videoapp_videosUncheckedUpdateInput>
  }

  /**
   * videoapp_videos delete
   */
  export type videoapp_videosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
    /**
     * Filter which videoapp_videos to delete.
     */
    where: videoapp_videosWhereUniqueInput
  }

  /**
   * videoapp_videos deleteMany
   */
  export type videoapp_videosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videoapp_videos to delete
     */
    where?: videoapp_videosWhereInput
    /**
     * Limit how many videoapp_videos to delete.
     */
    limit?: number
  }

  /**
   * videoapp_videos without action
   */
  export type videoapp_videosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoapp_videos
     */
    select?: videoapp_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoapp_videos
     */
    omit?: videoapp_videosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Videoapp_videosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    creator: 'creator',
    videoUrl: 'videoUrl',
    thumbnail: 'thumbnail',
    uploadedAt: 'uploadedAt'
  };

  export type Videoapp_videosScalarFieldEnum = (typeof Videoapp_videosScalarFieldEnum)[keyof typeof Videoapp_videosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type videoapp_videosWhereInput = {
    AND?: videoapp_videosWhereInput | videoapp_videosWhereInput[]
    OR?: videoapp_videosWhereInput[]
    NOT?: videoapp_videosWhereInput | videoapp_videosWhereInput[]
    id?: StringFilter<"videoapp_videos"> | string
    title?: StringFilter<"videoapp_videos"> | string
    creator?: StringFilter<"videoapp_videos"> | string
    videoUrl?: StringFilter<"videoapp_videos"> | string
    thumbnail?: StringNullableFilter<"videoapp_videos"> | string | null
    uploadedAt?: DateTimeFilter<"videoapp_videos"> | Date | string
  }

  export type videoapp_videosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    creator?: SortOrder
    videoUrl?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
  }

  export type videoapp_videosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: videoapp_videosWhereInput | videoapp_videosWhereInput[]
    OR?: videoapp_videosWhereInput[]
    NOT?: videoapp_videosWhereInput | videoapp_videosWhereInput[]
    title?: StringFilter<"videoapp_videos"> | string
    creator?: StringFilter<"videoapp_videos"> | string
    videoUrl?: StringFilter<"videoapp_videos"> | string
    thumbnail?: StringNullableFilter<"videoapp_videos"> | string | null
    uploadedAt?: DateTimeFilter<"videoapp_videos"> | Date | string
  }, "id">

  export type videoapp_videosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    creator?: SortOrder
    videoUrl?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: videoapp_videosCountOrderByAggregateInput
    _max?: videoapp_videosMaxOrderByAggregateInput
    _min?: videoapp_videosMinOrderByAggregateInput
  }

  export type videoapp_videosScalarWhereWithAggregatesInput = {
    AND?: videoapp_videosScalarWhereWithAggregatesInput | videoapp_videosScalarWhereWithAggregatesInput[]
    OR?: videoapp_videosScalarWhereWithAggregatesInput[]
    NOT?: videoapp_videosScalarWhereWithAggregatesInput | videoapp_videosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"videoapp_videos"> | string
    title?: StringWithAggregatesFilter<"videoapp_videos"> | string
    creator?: StringWithAggregatesFilter<"videoapp_videos"> | string
    videoUrl?: StringWithAggregatesFilter<"videoapp_videos"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"videoapp_videos"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"videoapp_videos"> | Date | string
  }

  export type videoapp_videosCreateInput = {
    id?: string
    title: string
    creator: string
    videoUrl: string
    thumbnail?: string | null
    uploadedAt?: Date | string
  }

  export type videoapp_videosUncheckedCreateInput = {
    id?: string
    title: string
    creator: string
    videoUrl: string
    thumbnail?: string | null
    uploadedAt?: Date | string
  }

  export type videoapp_videosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoapp_videosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoapp_videosCreateManyInput = {
    id?: string
    title: string
    creator: string
    videoUrl: string
    thumbnail?: string | null
    uploadedAt?: Date | string
  }

  export type videoapp_videosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoapp_videosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type videoapp_videosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creator?: SortOrder
    videoUrl?: SortOrder
    thumbnail?: SortOrder
    uploadedAt?: SortOrder
  }

  export type videoapp_videosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creator?: SortOrder
    videoUrl?: SortOrder
    thumbnail?: SortOrder
    uploadedAt?: SortOrder
  }

  export type videoapp_videosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creator?: SortOrder
    videoUrl?: SortOrder
    thumbnail?: SortOrder
    uploadedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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