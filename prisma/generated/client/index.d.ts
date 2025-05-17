
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model SavedProduct
 * 
 */
export type SavedProduct = $Result.DefaultSelection<Prisma.$SavedProductPayload>
/**
 * Model Upvote
 * 
 */
export type Upvote = $Result.DefaultSelection<Prisma.$UpvotePayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedProduct`: Exposes CRUD operations for the **SavedProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedProducts
    * const savedProducts = await prisma.savedProduct.findMany()
    * ```
    */
  get savedProduct(): Prisma.SavedProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upvote`: Exposes CRUD operations for the **Upvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Upvotes
    * const upvotes = await prisma.upvote.findMany()
    * ```
    */
  get upvote(): Prisma.UpvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Product: 'Product',
    SavedProduct: 'SavedProduct',
    Upvote: 'Upvote',
    SocialLink: 'SocialLink'
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
      modelProps: "user" | "product" | "savedProduct" | "upvote" | "socialLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      SavedProduct: {
        payload: Prisma.$SavedProductPayload<ExtArgs>
        fields: Prisma.SavedProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          findFirst: {
            args: Prisma.SavedProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          findMany: {
            args: Prisma.SavedProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          create: {
            args: Prisma.SavedProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          createMany: {
            args: Prisma.SavedProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          delete: {
            args: Prisma.SavedProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          update: {
            args: Prisma.SavedProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          deleteMany: {
            args: Prisma.SavedProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          upsert: {
            args: Prisma.SavedProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          aggregate: {
            args: Prisma.SavedProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedProduct>
          }
          groupBy: {
            args: Prisma.SavedProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedProductCountArgs<ExtArgs>
            result: $Utils.Optional<SavedProductCountAggregateOutputType> | number
          }
        }
      }
      Upvote: {
        payload: Prisma.$UpvotePayload<ExtArgs>
        fields: Prisma.UpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          findFirst: {
            args: Prisma.UpvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          findMany: {
            args: Prisma.UpvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>[]
          }
          create: {
            args: Prisma.UpvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          createMany: {
            args: Prisma.UpvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>[]
          }
          delete: {
            args: Prisma.UpvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          update: {
            args: Prisma.UpvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          deleteMany: {
            args: Prisma.UpvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>[]
          }
          upsert: {
            args: Prisma.UpvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          aggregate: {
            args: Prisma.UpvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpvote>
          }
          groupBy: {
            args: Prisma.UpvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpvoteCountArgs<ExtArgs>
            result: $Utils.Optional<UpvoteCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    product?: ProductOmit
    savedProduct?: SavedProductOmit
    upvote?: UpvoteOmit
    socialLink?: SocialLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedProducts: number
    upvotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedProducts?: boolean | UserCountOutputTypeCountSavedProductsArgs
    upvotes?: boolean | UserCountOutputTypeCountUpvotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    saves: number
    upvoters: number
    socialLinks: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saves?: boolean | ProductCountOutputTypeCountSavesArgs
    upvoters?: boolean | ProductCountOutputTypeCountUpvotersArgs
    socialLinks?: boolean | ProductCountOutputTypeCountSocialLinksArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUpvotersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSocialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    image: string | null
    bio: string | null
    twitter: string | null
    github: string | null
    linkedin: string | null
    bluesky: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    image: string | null
    bio: string | null
    twitter: string | null
    github: string | null
    linkedin: string | null
    bluesky: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    image: number
    bio: number
    twitter: number
    github: number
    linkedin: number
    bluesky: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    image?: true
    bio?: true
    twitter?: true
    github?: true
    linkedin?: true
    bluesky?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    image?: true
    bio?: true
    twitter?: true
    github?: true
    linkedin?: true
    bluesky?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    image?: true
    bio?: true
    twitter?: true
    github?: true
    linkedin?: true
    bluesky?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    image: string | null
    bio: string | null
    twitter: string | null
    github: string | null
    linkedin: string | null
    bluesky: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    twitter?: boolean
    github?: boolean
    linkedin?: boolean
    bluesky?: boolean
    createdAt?: boolean
    savedProducts?: boolean | User$savedProductsArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    twitter?: boolean
    github?: boolean
    linkedin?: boolean
    bluesky?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    twitter?: boolean
    github?: boolean
    linkedin?: boolean
    bluesky?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    twitter?: boolean
    github?: boolean
    linkedin?: boolean
    bluesky?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "image" | "bio" | "twitter" | "github" | "linkedin" | "bluesky" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedProducts?: boolean | User$savedProductsArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      savedProducts: Prisma.$SavedProductPayload<ExtArgs>[]
      upvotes: Prisma.$UpvotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      image: string | null
      bio: string | null
      twitter: string | null
      github: string | null
      linkedin: string | null
      bluesky: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedProducts<T extends User$savedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvotes<T extends User$upvotesArgs<ExtArgs> = {}>(args?: Subset<T, User$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly github: FieldRef<"User", 'String'>
    readonly linkedin: FieldRef<"User", 'String'>
    readonly bluesky: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.savedProducts
   */
  export type User$savedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    cursor?: SavedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * User.upvotes
   */
  export type User$upvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    cursor?: UpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    upvotes: number | null
  }

  export type ProductSumAggregateOutputType = {
    upvotes: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    logo: string | null
    shortDescription: string | null
    fullDescription: string | null
    link: string | null
    githubUrl: string | null
    upvotes: number | null
    createdAt: Date | null
    userId: string | null
    userName: string | null
    userImage: string | null
    userBio: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    logo: string | null
    shortDescription: string | null
    fullDescription: string | null
    link: string | null
    githubUrl: string | null
    upvotes: number | null
    createdAt: Date | null
    userId: string | null
    userName: string | null
    userImage: string | null
    userBio: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    logo: number
    shortDescription: number
    fullDescription: number
    link: number
    githubUrl: number
    tags: number
    upvotes: number
    createdAt: number
    userId: number
    userName: number
    userImage: number
    userBio: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    upvotes?: true
  }

  export type ProductSumAggregateInputType = {
    upvotes?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    logo?: true
    shortDescription?: true
    fullDescription?: true
    link?: true
    githubUrl?: true
    upvotes?: true
    createdAt?: true
    userId?: true
    userName?: true
    userImage?: true
    userBio?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    logo?: true
    shortDescription?: true
    fullDescription?: true
    link?: true
    githubUrl?: true
    upvotes?: true
    createdAt?: true
    userId?: true
    userName?: true
    userImage?: true
    userBio?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    logo?: true
    shortDescription?: true
    fullDescription?: true
    link?: true
    githubUrl?: true
    tags?: true
    upvotes?: true
    createdAt?: true
    userId?: true
    userName?: true
    userImage?: true
    userBio?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags: string[]
    upvotes: number
    createdAt: Date
    userId: string
    userName: string | null
    userImage: string | null
    userBio: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    logo?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    link?: boolean
    githubUrl?: boolean
    tags?: boolean
    upvotes?: boolean
    createdAt?: boolean
    userId?: boolean
    userName?: boolean
    userImage?: boolean
    userBio?: boolean
    saves?: boolean | Product$savesArgs<ExtArgs>
    upvoters?: boolean | Product$upvotersArgs<ExtArgs>
    socialLinks?: boolean | Product$socialLinksArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    logo?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    link?: boolean
    githubUrl?: boolean
    tags?: boolean
    upvotes?: boolean
    createdAt?: boolean
    userId?: boolean
    userName?: boolean
    userImage?: boolean
    userBio?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    logo?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    link?: boolean
    githubUrl?: boolean
    tags?: boolean
    upvotes?: boolean
    createdAt?: boolean
    userId?: boolean
    userName?: boolean
    userImage?: boolean
    userBio?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    logo?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    link?: boolean
    githubUrl?: boolean
    tags?: boolean
    upvotes?: boolean
    createdAt?: boolean
    userId?: boolean
    userName?: boolean
    userImage?: boolean
    userBio?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "logo" | "shortDescription" | "fullDescription" | "link" | "githubUrl" | "tags" | "upvotes" | "createdAt" | "userId" | "userName" | "userImage" | "userBio", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saves?: boolean | Product$savesArgs<ExtArgs>
    upvoters?: boolean | Product$upvotersArgs<ExtArgs>
    socialLinks?: boolean | Product$socialLinksArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      saves: Prisma.$SavedProductPayload<ExtArgs>[]
      upvoters: Prisma.$UpvotePayload<ExtArgs>[]
      socialLinks: Prisma.$SocialLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      logo: string
      shortDescription: string
      fullDescription: string
      link: string
      githubUrl: string
      tags: string[]
      upvotes: number
      createdAt: Date
      userId: string
      userName: string | null
      userImage: string | null
      userBio: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saves<T extends Product$savesArgs<ExtArgs> = {}>(args?: Subset<T, Product$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvoters<T extends Product$upvotersArgs<ExtArgs> = {}>(args?: Subset<T, Product$upvotersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialLinks<T extends Product$socialLinksArgs<ExtArgs> = {}>(args?: Subset<T, Product$socialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly logo: FieldRef<"Product", 'String'>
    readonly shortDescription: FieldRef<"Product", 'String'>
    readonly fullDescription: FieldRef<"Product", 'String'>
    readonly link: FieldRef<"Product", 'String'>
    readonly githubUrl: FieldRef<"Product", 'String'>
    readonly tags: FieldRef<"Product", 'String[]'>
    readonly upvotes: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly userId: FieldRef<"Product", 'String'>
    readonly userName: FieldRef<"Product", 'String'>
    readonly userImage: FieldRef<"Product", 'String'>
    readonly userBio: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.saves
   */
  export type Product$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    cursor?: SavedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * Product.upvoters
   */
  export type Product$upvotersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    cursor?: UpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Product.socialLinks
   */
  export type Product$socialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    cursor?: SocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model SavedProduct
   */

  export type AggregateSavedProduct = {
    _count: SavedProductCountAggregateOutputType | null
    _min: SavedProductMinAggregateOutputType | null
    _max: SavedProductMaxAggregateOutputType | null
  }

  export type SavedProductMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type SavedProductMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type SavedProductCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    _all: number
  }


  export type SavedProductMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type SavedProductMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type SavedProductCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProduct to aggregate.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedProducts
    **/
    _count?: true | SavedProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedProductMaxAggregateInputType
  }

  export type GetSavedProductAggregateType<T extends SavedProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedProduct[P]>
      : GetScalarType<T[P], AggregateSavedProduct[P]>
  }




  export type SavedProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithAggregationInput | SavedProductOrderByWithAggregationInput[]
    by: SavedProductScalarFieldEnum[] | SavedProductScalarFieldEnum
    having?: SavedProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedProductCountAggregateInputType | true
    _min?: SavedProductMinAggregateInputType
    _max?: SavedProductMaxAggregateInputType
  }

  export type SavedProductGroupByOutputType = {
    id: string
    userId: string
    productId: string
    createdAt: Date
    _count: SavedProductCountAggregateOutputType | null
    _min: SavedProductMinAggregateOutputType | null
    _max: SavedProductMaxAggregateOutputType | null
  }

  type GetSavedProductGroupByPayload<T extends SavedProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedProductGroupByOutputType[P]>
            : GetScalarType<T[P], SavedProductGroupByOutputType[P]>
        }
      >
    >


  export type SavedProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type SavedProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "createdAt", ExtArgs["result"]["savedProduct"]>
  export type SavedProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SavedProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SavedProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SavedProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      createdAt: Date
    }, ExtArgs["result"]["savedProduct"]>
    composites: {}
  }

  type SavedProductGetPayload<S extends boolean | null | undefined | SavedProductDefaultArgs> = $Result.GetResult<Prisma.$SavedProductPayload, S>

  type SavedProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedProductCountAggregateInputType | true
    }

  export interface SavedProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedProduct'], meta: { name: 'SavedProduct' } }
    /**
     * Find zero or one SavedProduct that matches the filter.
     * @param {SavedProductFindUniqueArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedProductFindUniqueArgs>(args: SelectSubset<T, SavedProductFindUniqueArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedProductFindUniqueOrThrowArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindFirstArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedProductFindFirstArgs>(args?: SelectSubset<T, SavedProductFindFirstArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindFirstOrThrowArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedProducts
     * const savedProducts = await prisma.savedProduct.findMany()
     * 
     * // Get first 10 SavedProducts
     * const savedProducts = await prisma.savedProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedProductWithIdOnly = await prisma.savedProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedProductFindManyArgs>(args?: SelectSubset<T, SavedProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedProduct.
     * @param {SavedProductCreateArgs} args - Arguments to create a SavedProduct.
     * @example
     * // Create one SavedProduct
     * const SavedProduct = await prisma.savedProduct.create({
     *   data: {
     *     // ... data to create a SavedProduct
     *   }
     * })
     * 
     */
    create<T extends SavedProductCreateArgs>(args: SelectSubset<T, SavedProductCreateArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedProducts.
     * @param {SavedProductCreateManyArgs} args - Arguments to create many SavedProducts.
     * @example
     * // Create many SavedProducts
     * const savedProduct = await prisma.savedProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedProductCreateManyArgs>(args?: SelectSubset<T, SavedProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedProducts and returns the data saved in the database.
     * @param {SavedProductCreateManyAndReturnArgs} args - Arguments to create many SavedProducts.
     * @example
     * // Create many SavedProducts
     * const savedProduct = await prisma.savedProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedProducts and only return the `id`
     * const savedProductWithIdOnly = await prisma.savedProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedProductCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedProduct.
     * @param {SavedProductDeleteArgs} args - Arguments to delete one SavedProduct.
     * @example
     * // Delete one SavedProduct
     * const SavedProduct = await prisma.savedProduct.delete({
     *   where: {
     *     // ... filter to delete one SavedProduct
     *   }
     * })
     * 
     */
    delete<T extends SavedProductDeleteArgs>(args: SelectSubset<T, SavedProductDeleteArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedProduct.
     * @param {SavedProductUpdateArgs} args - Arguments to update one SavedProduct.
     * @example
     * // Update one SavedProduct
     * const savedProduct = await prisma.savedProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedProductUpdateArgs>(args: SelectSubset<T, SavedProductUpdateArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedProducts.
     * @param {SavedProductDeleteManyArgs} args - Arguments to filter SavedProducts to delete.
     * @example
     * // Delete a few SavedProducts
     * const { count } = await prisma.savedProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedProductDeleteManyArgs>(args?: SelectSubset<T, SavedProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedProducts
     * const savedProduct = await prisma.savedProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedProductUpdateManyArgs>(args: SelectSubset<T, SavedProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedProducts and returns the data updated in the database.
     * @param {SavedProductUpdateManyAndReturnArgs} args - Arguments to update many SavedProducts.
     * @example
     * // Update many SavedProducts
     * const savedProduct = await prisma.savedProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedProducts and only return the `id`
     * const savedProductWithIdOnly = await prisma.savedProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedProductUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedProduct.
     * @param {SavedProductUpsertArgs} args - Arguments to update or create a SavedProduct.
     * @example
     * // Update or create a SavedProduct
     * const savedProduct = await prisma.savedProduct.upsert({
     *   create: {
     *     // ... data to create a SavedProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedProduct we want to update
     *   }
     * })
     */
    upsert<T extends SavedProductUpsertArgs>(args: SelectSubset<T, SavedProductUpsertArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductCountArgs} args - Arguments to filter SavedProducts to count.
     * @example
     * // Count the number of SavedProducts
     * const count = await prisma.savedProduct.count({
     *   where: {
     *     // ... the filter for the SavedProducts we want to count
     *   }
     * })
    **/
    count<T extends SavedProductCountArgs>(
      args?: Subset<T, SavedProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedProductAggregateArgs>(args: Subset<T, SavedProductAggregateArgs>): Prisma.PrismaPromise<GetSavedProductAggregateType<T>>

    /**
     * Group by SavedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductGroupByArgs} args - Group by arguments.
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
      T extends SavedProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedProductGroupByArgs['orderBy'] }
        : { orderBy?: SavedProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedProduct model
   */
  readonly fields: SavedProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedProduct model
   */
  interface SavedProductFieldRefs {
    readonly id: FieldRef<"SavedProduct", 'String'>
    readonly userId: FieldRef<"SavedProduct", 'String'>
    readonly productId: FieldRef<"SavedProduct", 'String'>
    readonly createdAt: FieldRef<"SavedProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedProduct findUnique
   */
  export type SavedProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct findUniqueOrThrow
   */
  export type SavedProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct findFirst
   */
  export type SavedProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProducts.
     */
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct findFirstOrThrow
   */
  export type SavedProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProducts.
     */
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct findMany
   */
  export type SavedProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProducts to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct create
   */
  export type SavedProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedProduct.
     */
    data: XOR<SavedProductCreateInput, SavedProductUncheckedCreateInput>
  }

  /**
   * SavedProduct createMany
   */
  export type SavedProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedProducts.
     */
    data: SavedProductCreateManyInput | SavedProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedProduct createManyAndReturn
   */
  export type SavedProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * The data used to create many SavedProducts.
     */
    data: SavedProductCreateManyInput | SavedProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedProduct update
   */
  export type SavedProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedProduct.
     */
    data: XOR<SavedProductUpdateInput, SavedProductUncheckedUpdateInput>
    /**
     * Choose, which SavedProduct to update.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct updateMany
   */
  export type SavedProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedProducts.
     */
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyInput>
    /**
     * Filter which SavedProducts to update
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to update.
     */
    limit?: number
  }

  /**
   * SavedProduct updateManyAndReturn
   */
  export type SavedProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * The data used to update SavedProducts.
     */
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyInput>
    /**
     * Filter which SavedProducts to update
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedProduct upsert
   */
  export type SavedProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedProduct to update in case it exists.
     */
    where: SavedProductWhereUniqueInput
    /**
     * In case the SavedProduct found by the `where` argument doesn't exist, create a new SavedProduct with this data.
     */
    create: XOR<SavedProductCreateInput, SavedProductUncheckedCreateInput>
    /**
     * In case the SavedProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedProductUpdateInput, SavedProductUncheckedUpdateInput>
  }

  /**
   * SavedProduct delete
   */
  export type SavedProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter which SavedProduct to delete.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct deleteMany
   */
  export type SavedProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProducts to delete
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to delete.
     */
    limit?: number
  }

  /**
   * SavedProduct without action
   */
  export type SavedProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
  }


  /**
   * Model Upvote
   */

  export type AggregateUpvote = {
    _count: UpvoteCountAggregateOutputType | null
    _min: UpvoteMinAggregateOutputType | null
    _max: UpvoteMaxAggregateOutputType | null
  }

  export type UpvoteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type UpvoteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type UpvoteCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    _all: number
  }


  export type UpvoteMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UpvoteMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UpvoteCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type UpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvote to aggregate.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Upvotes
    **/
    _count?: true | UpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpvoteMaxAggregateInputType
  }

  export type GetUpvoteAggregateType<T extends UpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpvote[P]>
      : GetScalarType<T[P], AggregateUpvote[P]>
  }




  export type UpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithAggregationInput | UpvoteOrderByWithAggregationInput[]
    by: UpvoteScalarFieldEnum[] | UpvoteScalarFieldEnum
    having?: UpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpvoteCountAggregateInputType | true
    _min?: UpvoteMinAggregateInputType
    _max?: UpvoteMaxAggregateInputType
  }

  export type UpvoteGroupByOutputType = {
    id: string
    userId: string
    productId: string
    createdAt: Date
    _count: UpvoteCountAggregateOutputType | null
    _min: UpvoteMinAggregateOutputType | null
    _max: UpvoteMaxAggregateOutputType | null
  }

  type GetUpvoteGroupByPayload<T extends UpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], UpvoteGroupByOutputType[P]>
        }
      >
    >


  export type UpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvote"]>

  export type UpvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvote"]>

  export type UpvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvote"]>

  export type UpvoteSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type UpvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "createdAt", ExtArgs["result"]["upvote"]>
  export type UpvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UpvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UpvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upvote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      createdAt: Date
    }, ExtArgs["result"]["upvote"]>
    composites: {}
  }

  type UpvoteGetPayload<S extends boolean | null | undefined | UpvoteDefaultArgs> = $Result.GetResult<Prisma.$UpvotePayload, S>

  type UpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpvoteCountAggregateInputType | true
    }

  export interface UpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upvote'], meta: { name: 'Upvote' } }
    /**
     * Find zero or one Upvote that matches the filter.
     * @param {UpvoteFindUniqueArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpvoteFindUniqueArgs>(args: SelectSubset<T, UpvoteFindUniqueArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Upvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpvoteFindUniqueOrThrowArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, UpvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindFirstArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpvoteFindFirstArgs>(args?: SelectSubset<T, UpvoteFindFirstArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindFirstOrThrowArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, UpvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Upvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Upvotes
     * const upvotes = await prisma.upvote.findMany()
     * 
     * // Get first 10 Upvotes
     * const upvotes = await prisma.upvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upvoteWithIdOnly = await prisma.upvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpvoteFindManyArgs>(args?: SelectSubset<T, UpvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Upvote.
     * @param {UpvoteCreateArgs} args - Arguments to create a Upvote.
     * @example
     * // Create one Upvote
     * const Upvote = await prisma.upvote.create({
     *   data: {
     *     // ... data to create a Upvote
     *   }
     * })
     * 
     */
    create<T extends UpvoteCreateArgs>(args: SelectSubset<T, UpvoteCreateArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Upvotes.
     * @param {UpvoteCreateManyArgs} args - Arguments to create many Upvotes.
     * @example
     * // Create many Upvotes
     * const upvote = await prisma.upvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpvoteCreateManyArgs>(args?: SelectSubset<T, UpvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Upvotes and returns the data saved in the database.
     * @param {UpvoteCreateManyAndReturnArgs} args - Arguments to create many Upvotes.
     * @example
     * // Create many Upvotes
     * const upvote = await prisma.upvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Upvotes and only return the `id`
     * const upvoteWithIdOnly = await prisma.upvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, UpvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Upvote.
     * @param {UpvoteDeleteArgs} args - Arguments to delete one Upvote.
     * @example
     * // Delete one Upvote
     * const Upvote = await prisma.upvote.delete({
     *   where: {
     *     // ... filter to delete one Upvote
     *   }
     * })
     * 
     */
    delete<T extends UpvoteDeleteArgs>(args: SelectSubset<T, UpvoteDeleteArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Upvote.
     * @param {UpvoteUpdateArgs} args - Arguments to update one Upvote.
     * @example
     * // Update one Upvote
     * const upvote = await prisma.upvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpvoteUpdateArgs>(args: SelectSubset<T, UpvoteUpdateArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Upvotes.
     * @param {UpvoteDeleteManyArgs} args - Arguments to filter Upvotes to delete.
     * @example
     * // Delete a few Upvotes
     * const { count } = await prisma.upvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpvoteDeleteManyArgs>(args?: SelectSubset<T, UpvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Upvotes
     * const upvote = await prisma.upvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpvoteUpdateManyArgs>(args: SelectSubset<T, UpvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upvotes and returns the data updated in the database.
     * @param {UpvoteUpdateManyAndReturnArgs} args - Arguments to update many Upvotes.
     * @example
     * // Update many Upvotes
     * const upvote = await prisma.upvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Upvotes and only return the `id`
     * const upvoteWithIdOnly = await prisma.upvote.updateManyAndReturn({
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
    updateManyAndReturn<T extends UpvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, UpvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Upvote.
     * @param {UpvoteUpsertArgs} args - Arguments to update or create a Upvote.
     * @example
     * // Update or create a Upvote
     * const upvote = await prisma.upvote.upsert({
     *   create: {
     *     // ... data to create a Upvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upvote we want to update
     *   }
     * })
     */
    upsert<T extends UpvoteUpsertArgs>(args: SelectSubset<T, UpvoteUpsertArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteCountArgs} args - Arguments to filter Upvotes to count.
     * @example
     * // Count the number of Upvotes
     * const count = await prisma.upvote.count({
     *   where: {
     *     // ... the filter for the Upvotes we want to count
     *   }
     * })
    **/
    count<T extends UpvoteCountArgs>(
      args?: Subset<T, UpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UpvoteAggregateArgs>(args: Subset<T, UpvoteAggregateArgs>): Prisma.PrismaPromise<GetUpvoteAggregateType<T>>

    /**
     * Group by Upvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteGroupByArgs} args - Group by arguments.
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
      T extends UpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpvoteGroupByArgs['orderBy'] }
        : { orderBy?: UpvoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upvote model
   */
  readonly fields: UpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Upvote model
   */
  interface UpvoteFieldRefs {
    readonly id: FieldRef<"Upvote", 'String'>
    readonly userId: FieldRef<"Upvote", 'String'>
    readonly productId: FieldRef<"Upvote", 'String'>
    readonly createdAt: FieldRef<"Upvote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Upvote findUnique
   */
  export type UpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote findUniqueOrThrow
   */
  export type UpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote findFirst
   */
  export type UpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Upvote findFirstOrThrow
   */
  export type UpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Upvote findMany
   */
  export type UpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Upvote create
   */
  export type UpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Upvote.
     */
    data: XOR<UpvoteCreateInput, UpvoteUncheckedCreateInput>
  }

  /**
   * Upvote createMany
   */
  export type UpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Upvotes.
     */
    data: UpvoteCreateManyInput | UpvoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Upvote createManyAndReturn
   */
  export type UpvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * The data used to create many Upvotes.
     */
    data: UpvoteCreateManyInput | UpvoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upvote update
   */
  export type UpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Upvote.
     */
    data: XOR<UpvoteUpdateInput, UpvoteUncheckedUpdateInput>
    /**
     * Choose, which Upvote to update.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote updateMany
   */
  export type UpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Upvotes.
     */
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyInput>
    /**
     * Filter which Upvotes to update
     */
    where?: UpvoteWhereInput
    /**
     * Limit how many Upvotes to update.
     */
    limit?: number
  }

  /**
   * Upvote updateManyAndReturn
   */
  export type UpvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * The data used to update Upvotes.
     */
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyInput>
    /**
     * Filter which Upvotes to update
     */
    where?: UpvoteWhereInput
    /**
     * Limit how many Upvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upvote upsert
   */
  export type UpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Upvote to update in case it exists.
     */
    where: UpvoteWhereUniqueInput
    /**
     * In case the Upvote found by the `where` argument doesn't exist, create a new Upvote with this data.
     */
    create: XOR<UpvoteCreateInput, UpvoteUncheckedCreateInput>
    /**
     * In case the Upvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpvoteUpdateInput, UpvoteUncheckedUpdateInput>
  }

  /**
   * Upvote delete
   */
  export type UpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter which Upvote to delete.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote deleteMany
   */
  export type UpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvotes to delete
     */
    where?: UpvoteWhereInput
    /**
     * Limit how many Upvotes to delete.
     */
    limit?: number
  }

  /**
   * Upvote without action
   */
  export type UpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    productId: string | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    productId: string | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    platform: number
    url: number
    productId: number
    _all: number
  }


  export type SocialLinkMinAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    productId?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    productId?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    productId?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: string
    platform: string
    url: string
    productId: string
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    platform?: boolean
    url?: boolean
    productId?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "url" | "productId", ExtArgs["result"]["socialLink"]>
  export type SocialLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: string
      url: string
      productId: string
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinkUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
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
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'String'>
    readonly platform: FieldRef<"SocialLink", 'String'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly productId: FieldRef<"SocialLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink updateManyAndReturn
   */
  export type SocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    image: 'image',
    bio: 'bio',
    twitter: 'twitter',
    github: 'github',
    linkedin: 'linkedin',
    bluesky: 'bluesky',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    logo: 'logo',
    shortDescription: 'shortDescription',
    fullDescription: 'fullDescription',
    link: 'link',
    githubUrl: 'githubUrl',
    tags: 'tags',
    upvotes: 'upvotes',
    createdAt: 'createdAt',
    userId: 'userId',
    userName: 'userName',
    userImage: 'userImage',
    userBio: 'userBio'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SavedProductScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type SavedProductScalarFieldEnum = (typeof SavedProductScalarFieldEnum)[keyof typeof SavedProductScalarFieldEnum]


  export const UpvoteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type UpvoteScalarFieldEnum = (typeof UpvoteScalarFieldEnum)[keyof typeof UpvoteScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    url: 'url',
    productId: 'productId'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    bluesky?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    savedProducts?: SavedProductListRelationFilter
    upvotes?: UpvoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    bluesky?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    savedProducts?: SavedProductOrderByRelationAggregateInput
    upvotes?: UpvoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    bluesky?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    savedProducts?: SavedProductListRelationFilter
    upvotes?: UpvoteListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    bluesky?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    github?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"User"> | string | null
    bluesky?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    logo?: StringFilter<"Product"> | string
    shortDescription?: StringFilter<"Product"> | string
    fullDescription?: StringFilter<"Product"> | string
    link?: StringFilter<"Product"> | string
    githubUrl?: StringFilter<"Product"> | string
    tags?: StringNullableListFilter<"Product">
    upvotes?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    userId?: StringFilter<"Product"> | string
    userName?: StringNullableFilter<"Product"> | string | null
    userImage?: StringNullableFilter<"Product"> | string | null
    userBio?: StringNullableFilter<"Product"> | string | null
    saves?: SavedProductListRelationFilter
    upvoters?: UpvoteListRelationFilter
    socialLinks?: SocialLinkListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    link?: SortOrder
    githubUrl?: SortOrder
    tags?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    userImage?: SortOrderInput | SortOrder
    userBio?: SortOrderInput | SortOrder
    saves?: SavedProductOrderByRelationAggregateInput
    upvoters?: UpvoteOrderByRelationAggregateInput
    socialLinks?: SocialLinkOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    logo?: StringFilter<"Product"> | string
    shortDescription?: StringFilter<"Product"> | string
    fullDescription?: StringFilter<"Product"> | string
    link?: StringFilter<"Product"> | string
    githubUrl?: StringFilter<"Product"> | string
    tags?: StringNullableListFilter<"Product">
    upvotes?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    userId?: StringFilter<"Product"> | string
    userName?: StringNullableFilter<"Product"> | string | null
    userImage?: StringNullableFilter<"Product"> | string | null
    userBio?: StringNullableFilter<"Product"> | string | null
    saves?: SavedProductListRelationFilter
    upvoters?: UpvoteListRelationFilter
    socialLinks?: SocialLinkListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    link?: SortOrder
    githubUrl?: SortOrder
    tags?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    userImage?: SortOrderInput | SortOrder
    userBio?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    logo?: StringWithAggregatesFilter<"Product"> | string
    shortDescription?: StringWithAggregatesFilter<"Product"> | string
    fullDescription?: StringWithAggregatesFilter<"Product"> | string
    link?: StringWithAggregatesFilter<"Product"> | string
    githubUrl?: StringWithAggregatesFilter<"Product"> | string
    tags?: StringNullableListFilter<"Product">
    upvotes?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    userId?: StringWithAggregatesFilter<"Product"> | string
    userName?: StringNullableWithAggregatesFilter<"Product"> | string | null
    userImage?: StringNullableWithAggregatesFilter<"Product"> | string | null
    userBio?: StringNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type SavedProductWhereInput = {
    AND?: SavedProductWhereInput | SavedProductWhereInput[]
    OR?: SavedProductWhereInput[]
    NOT?: SavedProductWhereInput | SavedProductWhereInput[]
    id?: StringFilter<"SavedProduct"> | string
    userId?: StringFilter<"SavedProduct"> | string
    productId?: StringFilter<"SavedProduct"> | string
    createdAt?: DateTimeFilter<"SavedProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SavedProductOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SavedProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId?: SavedProductUserIdProductIdCompoundUniqueInput
    AND?: SavedProductWhereInput | SavedProductWhereInput[]
    OR?: SavedProductWhereInput[]
    NOT?: SavedProductWhereInput | SavedProductWhereInput[]
    userId?: StringFilter<"SavedProduct"> | string
    productId?: StringFilter<"SavedProduct"> | string
    createdAt?: DateTimeFilter<"SavedProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "userId_productId">

  export type SavedProductOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedProductCountOrderByAggregateInput
    _max?: SavedProductMaxOrderByAggregateInput
    _min?: SavedProductMinOrderByAggregateInput
  }

  export type SavedProductScalarWhereWithAggregatesInput = {
    AND?: SavedProductScalarWhereWithAggregatesInput | SavedProductScalarWhereWithAggregatesInput[]
    OR?: SavedProductScalarWhereWithAggregatesInput[]
    NOT?: SavedProductScalarWhereWithAggregatesInput | SavedProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedProduct"> | string
    userId?: StringWithAggregatesFilter<"SavedProduct"> | string
    productId?: StringWithAggregatesFilter<"SavedProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedProduct"> | Date | string
  }

  export type UpvoteWhereInput = {
    AND?: UpvoteWhereInput | UpvoteWhereInput[]
    OR?: UpvoteWhereInput[]
    NOT?: UpvoteWhereInput | UpvoteWhereInput[]
    id?: StringFilter<"Upvote"> | string
    userId?: StringFilter<"Upvote"> | string
    productId?: StringFilter<"Upvote"> | string
    createdAt?: DateTimeFilter<"Upvote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UpvoteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type UpvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId?: UpvoteUserIdProductIdCompoundUniqueInput
    AND?: UpvoteWhereInput | UpvoteWhereInput[]
    OR?: UpvoteWhereInput[]
    NOT?: UpvoteWhereInput | UpvoteWhereInput[]
    userId?: StringFilter<"Upvote"> | string
    productId?: StringFilter<"Upvote"> | string
    createdAt?: DateTimeFilter<"Upvote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "userId_productId">

  export type UpvoteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: UpvoteCountOrderByAggregateInput
    _max?: UpvoteMaxOrderByAggregateInput
    _min?: UpvoteMinOrderByAggregateInput
  }

  export type UpvoteScalarWhereWithAggregatesInput = {
    AND?: UpvoteScalarWhereWithAggregatesInput | UpvoteScalarWhereWithAggregatesInput[]
    OR?: UpvoteScalarWhereWithAggregatesInput[]
    NOT?: UpvoteScalarWhereWithAggregatesInput | UpvoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Upvote"> | string
    userId?: StringWithAggregatesFilter<"Upvote"> | string
    productId?: StringWithAggregatesFilter<"Upvote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Upvote"> | Date | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    productId?: StringFilter<"SocialLink"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    productId?: StringFilter<"SocialLink"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    productId?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLink"> | string
    platform?: StringWithAggregatesFilter<"SocialLink"> | string
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    productId?: StringWithAggregatesFilter<"SocialLink"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    image?: string | null
    bio?: string | null
    twitter?: string | null
    github?: string | null
    linkedin?: string | null
    bluesky?: string | null
    createdAt?: Date | string
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    upvotes?: UpvoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    image?: string | null
    bio?: string | null
    twitter?: string | null
    github?: string | null
    linkedin?: string | null
    bluesky?: string | null
    createdAt?: Date | string
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    upvotes?: UpvoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    upvotes?: UpvoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    upvotes?: UpvoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    image?: string | null
    bio?: string | null
    twitter?: string | null
    github?: string | null
    linkedin?: string | null
    bluesky?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    saves?: SavedProductCreateNestedManyWithoutProductInput
    upvoters?: UpvoteCreateNestedManyWithoutProductInput
    socialLinks?: SocialLinkCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    saves?: SavedProductUncheckedCreateNestedManyWithoutProductInput
    upvoters?: UpvoteUncheckedCreateNestedManyWithoutProductInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    saves?: SavedProductUpdateManyWithoutProductNestedInput
    upvoters?: UpvoteUpdateManyWithoutProductNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    saves?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
    upvoters?: UpvoteUncheckedUpdateManyWithoutProductNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedProductCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedProductsInput
    product: ProductCreateNestedOneWithoutSavesInput
  }

  export type SavedProductUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
  }

  export type SavedProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavedProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductCreateManyInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
  }

  export type SavedProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUpvotesInput
    product: ProductCreateNestedOneWithoutUpvotersInput
  }

  export type UpvoteUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
  }

  export type UpvoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUpvotesNestedInput
    product?: ProductUpdateOneRequiredWithoutUpvotersNestedInput
  }

  export type UpvoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteCreateManyInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
  }

  export type UpvoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateInput = {
    id?: string
    platform: string
    url: string
    product: ProductCreateNestedOneWithoutSocialLinksInput
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: string
    platform: string
    url: string
    productId: string
  }

  export type SocialLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutSocialLinksNestedInput
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkCreateManyInput = {
    id?: string
    platform: string
    url: string
    productId: string
  }

  export type SocialLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SavedProductListRelationFilter = {
    every?: SavedProductWhereInput
    some?: SavedProductWhereInput
    none?: SavedProductWhereInput
  }

  export type UpvoteListRelationFilter = {
    every?: UpvoteWhereInput
    some?: UpvoteWhereInput
    none?: UpvoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SavedProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedin?: SortOrder
    bluesky?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedin?: SortOrder
    bluesky?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedin?: SortOrder
    bluesky?: SortOrder
    createdAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SocialLinkListRelationFilter = {
    every?: SocialLinkWhereInput
    some?: SocialLinkWhereInput
    none?: SocialLinkWhereInput
  }

  export type SocialLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    link?: SortOrder
    githubUrl?: SortOrder
    tags?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userImage?: SortOrder
    userBio?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    upvotes?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    link?: SortOrder
    githubUrl?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userImage?: SortOrder
    userBio?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    link?: SortOrder
    githubUrl?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userImage?: SortOrder
    userBio?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    upvotes?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SavedProductUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: string
  }

  export type SavedProductCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedProductMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedProductMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UpvoteUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: string
  }

  export type UpvoteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UpvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UpvoteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type SavedProductCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type UpvoteCreateNestedManyWithoutUserInput = {
    create?: XOR<UpvoteCreateWithoutUserInput, UpvoteUncheckedCreateWithoutUserInput> | UpvoteCreateWithoutUserInput[] | UpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutUserInput | UpvoteCreateOrConnectWithoutUserInput[]
    createMany?: UpvoteCreateManyUserInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type SavedProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type UpvoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UpvoteCreateWithoutUserInput, UpvoteUncheckedCreateWithoutUserInput> | UpvoteCreateWithoutUserInput[] | UpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutUserInput | UpvoteCreateOrConnectWithoutUserInput[]
    createMany?: UpvoteCreateManyUserInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
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

  export type SavedProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutUserInput | SavedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutUserInput | SavedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutUserInput | SavedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type UpvoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpvoteCreateWithoutUserInput, UpvoteUncheckedCreateWithoutUserInput> | UpvoteCreateWithoutUserInput[] | UpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutUserInput | UpvoteCreateOrConnectWithoutUserInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutUserInput | UpvoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpvoteCreateManyUserInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutUserInput | UpvoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutUserInput | UpvoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type SavedProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutUserInput | SavedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutUserInput | SavedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutUserInput | SavedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type UpvoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpvoteCreateWithoutUserInput, UpvoteUncheckedCreateWithoutUserInput> | UpvoteCreateWithoutUserInput[] | UpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutUserInput | UpvoteCreateOrConnectWithoutUserInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutUserInput | UpvoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpvoteCreateManyUserInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutUserInput | UpvoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutUserInput | UpvoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type ProductCreatetagsInput = {
    set: string[]
  }

  export type SavedProductCreateNestedManyWithoutProductInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type UpvoteCreateNestedManyWithoutProductInput = {
    create?: XOR<UpvoteCreateWithoutProductInput, UpvoteUncheckedCreateWithoutProductInput> | UpvoteCreateWithoutProductInput[] | UpvoteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutProductInput | UpvoteCreateOrConnectWithoutProductInput[]
    createMany?: UpvoteCreateManyProductInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type SocialLinkCreateNestedManyWithoutProductInput = {
    create?: XOR<SocialLinkCreateWithoutProductInput, SocialLinkUncheckedCreateWithoutProductInput> | SocialLinkCreateWithoutProductInput[] | SocialLinkUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutProductInput | SocialLinkCreateOrConnectWithoutProductInput[]
    createMany?: SocialLinkCreateManyProductInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type SavedProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type UpvoteUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UpvoteCreateWithoutProductInput, UpvoteUncheckedCreateWithoutProductInput> | UpvoteCreateWithoutProductInput[] | UpvoteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutProductInput | UpvoteCreateOrConnectWithoutProductInput[]
    createMany?: UpvoteCreateManyProductInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type SocialLinkUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SocialLinkCreateWithoutProductInput, SocialLinkUncheckedCreateWithoutProductInput> | SocialLinkCreateWithoutProductInput[] | SocialLinkUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutProductInput | SocialLinkCreateOrConnectWithoutProductInput[]
    createMany?: SocialLinkCreateManyProductInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type ProductUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SavedProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutProductInput | SavedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutProductInput | SavedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutProductInput | SavedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type UpvoteUpdateManyWithoutProductNestedInput = {
    create?: XOR<UpvoteCreateWithoutProductInput, UpvoteUncheckedCreateWithoutProductInput> | UpvoteCreateWithoutProductInput[] | UpvoteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutProductInput | UpvoteCreateOrConnectWithoutProductInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutProductInput | UpvoteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UpvoteCreateManyProductInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutProductInput | UpvoteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutProductInput | UpvoteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type SocialLinkUpdateManyWithoutProductNestedInput = {
    create?: XOR<SocialLinkCreateWithoutProductInput, SocialLinkUncheckedCreateWithoutProductInput> | SocialLinkCreateWithoutProductInput[] | SocialLinkUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutProductInput | SocialLinkCreateOrConnectWithoutProductInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutProductInput | SocialLinkUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SocialLinkCreateManyProductInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutProductInput | SocialLinkUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutProductInput | SocialLinkUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type SavedProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutProductInput | SavedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutProductInput | SavedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutProductInput | SavedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type UpvoteUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UpvoteCreateWithoutProductInput, UpvoteUncheckedCreateWithoutProductInput> | UpvoteCreateWithoutProductInput[] | UpvoteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutProductInput | UpvoteCreateOrConnectWithoutProductInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutProductInput | UpvoteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UpvoteCreateManyProductInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutProductInput | UpvoteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutProductInput | UpvoteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type SocialLinkUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SocialLinkCreateWithoutProductInput, SocialLinkUncheckedCreateWithoutProductInput> | SocialLinkCreateWithoutProductInput[] | SocialLinkUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutProductInput | SocialLinkCreateOrConnectWithoutProductInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutProductInput | SocialLinkUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SocialLinkCreateManyProductInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutProductInput | SocialLinkUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutProductInput | SocialLinkUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSavedProductsInput = {
    create?: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSavesInput = {
    create?: XOR<ProductCreateWithoutSavesInput, ProductUncheckedCreateWithoutSavesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSavesInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedProductsNestedInput = {
    create?: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProductsInput
    upsert?: UserUpsertWithoutSavedProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedProductsInput, UserUpdateWithoutSavedProductsInput>, UserUncheckedUpdateWithoutSavedProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<ProductCreateWithoutSavesInput, ProductUncheckedCreateWithoutSavesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSavesInput
    upsert?: ProductUpsertWithoutSavesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSavesInput, ProductUpdateWithoutSavesInput>, ProductUncheckedUpdateWithoutSavesInput>
  }

  export type UserCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutUpvotersInput = {
    create?: XOR<ProductCreateWithoutUpvotersInput, ProductUncheckedCreateWithoutUpvotersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUpvotersInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    upsert?: UserUpsertWithoutUpvotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpvotesInput, UserUpdateWithoutUpvotesInput>, UserUncheckedUpdateWithoutUpvotesInput>
  }

  export type ProductUpdateOneRequiredWithoutUpvotersNestedInput = {
    create?: XOR<ProductCreateWithoutUpvotersInput, ProductUncheckedCreateWithoutUpvotersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUpvotersInput
    upsert?: ProductUpsertWithoutUpvotersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUpvotersInput, ProductUpdateWithoutUpvotersInput>, ProductUncheckedUpdateWithoutUpvotersInput>
  }

  export type ProductCreateNestedOneWithoutSocialLinksInput = {
    create?: XOR<ProductCreateWithoutSocialLinksInput, ProductUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSocialLinksInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSocialLinksNestedInput = {
    create?: XOR<ProductCreateWithoutSocialLinksInput, ProductUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSocialLinksInput
    upsert?: ProductUpsertWithoutSocialLinksInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSocialLinksInput, ProductUpdateWithoutSocialLinksInput>, ProductUncheckedUpdateWithoutSocialLinksInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type SavedProductCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutSavesInput
  }

  export type SavedProductUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
  }

  export type SavedProductCreateOrConnectWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    create: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput>
  }

  export type SavedProductCreateManyUserInputEnvelope = {
    data: SavedProductCreateManyUserInput | SavedProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UpvoteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutUpvotersInput
  }

  export type UpvoteUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
  }

  export type UpvoteCreateOrConnectWithoutUserInput = {
    where: UpvoteWhereUniqueInput
    create: XOR<UpvoteCreateWithoutUserInput, UpvoteUncheckedCreateWithoutUserInput>
  }

  export type UpvoteCreateManyUserInputEnvelope = {
    data: UpvoteCreateManyUserInput | UpvoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedProductUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    update: XOR<SavedProductUpdateWithoutUserInput, SavedProductUncheckedUpdateWithoutUserInput>
    create: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput>
  }

  export type SavedProductUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    data: XOR<SavedProductUpdateWithoutUserInput, SavedProductUncheckedUpdateWithoutUserInput>
  }

  export type SavedProductUpdateManyWithWhereWithoutUserInput = {
    where: SavedProductScalarWhereInput
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedProductScalarWhereInput = {
    AND?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
    OR?: SavedProductScalarWhereInput[]
    NOT?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
    id?: StringFilter<"SavedProduct"> | string
    userId?: StringFilter<"SavedProduct"> | string
    productId?: StringFilter<"SavedProduct"> | string
    createdAt?: DateTimeFilter<"SavedProduct"> | Date | string
  }

  export type UpvoteUpsertWithWhereUniqueWithoutUserInput = {
    where: UpvoteWhereUniqueInput
    update: XOR<UpvoteUpdateWithoutUserInput, UpvoteUncheckedUpdateWithoutUserInput>
    create: XOR<UpvoteCreateWithoutUserInput, UpvoteUncheckedCreateWithoutUserInput>
  }

  export type UpvoteUpdateWithWhereUniqueWithoutUserInput = {
    where: UpvoteWhereUniqueInput
    data: XOR<UpvoteUpdateWithoutUserInput, UpvoteUncheckedUpdateWithoutUserInput>
  }

  export type UpvoteUpdateManyWithWhereWithoutUserInput = {
    where: UpvoteScalarWhereInput
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyWithoutUserInput>
  }

  export type UpvoteScalarWhereInput = {
    AND?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
    OR?: UpvoteScalarWhereInput[]
    NOT?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
    id?: StringFilter<"Upvote"> | string
    userId?: StringFilter<"Upvote"> | string
    productId?: StringFilter<"Upvote"> | string
    createdAt?: DateTimeFilter<"Upvote"> | Date | string
  }

  export type SavedProductCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedProductsInput
  }

  export type SavedProductUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedProductCreateOrConnectWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    create: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput>
  }

  export type SavedProductCreateManyProductInputEnvelope = {
    data: SavedProductCreateManyProductInput | SavedProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UpvoteCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUpvotesInput
  }

  export type UpvoteUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UpvoteCreateOrConnectWithoutProductInput = {
    where: UpvoteWhereUniqueInput
    create: XOR<UpvoteCreateWithoutProductInput, UpvoteUncheckedCreateWithoutProductInput>
  }

  export type UpvoteCreateManyProductInputEnvelope = {
    data: UpvoteCreateManyProductInput | UpvoteCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SocialLinkCreateWithoutProductInput = {
    id?: string
    platform: string
    url: string
  }

  export type SocialLinkUncheckedCreateWithoutProductInput = {
    id?: string
    platform: string
    url: string
  }

  export type SocialLinkCreateOrConnectWithoutProductInput = {
    where: SocialLinkWhereUniqueInput
    create: XOR<SocialLinkCreateWithoutProductInput, SocialLinkUncheckedCreateWithoutProductInput>
  }

  export type SocialLinkCreateManyProductInputEnvelope = {
    data: SocialLinkCreateManyProductInput | SocialLinkCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SavedProductUpsertWithWhereUniqueWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    update: XOR<SavedProductUpdateWithoutProductInput, SavedProductUncheckedUpdateWithoutProductInput>
    create: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput>
  }

  export type SavedProductUpdateWithWhereUniqueWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    data: XOR<SavedProductUpdateWithoutProductInput, SavedProductUncheckedUpdateWithoutProductInput>
  }

  export type SavedProductUpdateManyWithWhereWithoutProductInput = {
    where: SavedProductScalarWhereInput
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyWithoutProductInput>
  }

  export type UpvoteUpsertWithWhereUniqueWithoutProductInput = {
    where: UpvoteWhereUniqueInput
    update: XOR<UpvoteUpdateWithoutProductInput, UpvoteUncheckedUpdateWithoutProductInput>
    create: XOR<UpvoteCreateWithoutProductInput, UpvoteUncheckedCreateWithoutProductInput>
  }

  export type UpvoteUpdateWithWhereUniqueWithoutProductInput = {
    where: UpvoteWhereUniqueInput
    data: XOR<UpvoteUpdateWithoutProductInput, UpvoteUncheckedUpdateWithoutProductInput>
  }

  export type UpvoteUpdateManyWithWhereWithoutProductInput = {
    where: UpvoteScalarWhereInput
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyWithoutProductInput>
  }

  export type SocialLinkUpsertWithWhereUniqueWithoutProductInput = {
    where: SocialLinkWhereUniqueInput
    update: XOR<SocialLinkUpdateWithoutProductInput, SocialLinkUncheckedUpdateWithoutProductInput>
    create: XOR<SocialLinkCreateWithoutProductInput, SocialLinkUncheckedCreateWithoutProductInput>
  }

  export type SocialLinkUpdateWithWhereUniqueWithoutProductInput = {
    where: SocialLinkWhereUniqueInput
    data: XOR<SocialLinkUpdateWithoutProductInput, SocialLinkUncheckedUpdateWithoutProductInput>
  }

  export type SocialLinkUpdateManyWithWhereWithoutProductInput = {
    where: SocialLinkScalarWhereInput
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyWithoutProductInput>
  }

  export type SocialLinkScalarWhereInput = {
    AND?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    OR?: SocialLinkScalarWhereInput[]
    NOT?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    productId?: StringFilter<"SocialLink"> | string
  }

  export type UserCreateWithoutSavedProductsInput = {
    id?: string
    email: string
    username: string
    password: string
    image?: string | null
    bio?: string | null
    twitter?: string | null
    github?: string | null
    linkedin?: string | null
    bluesky?: string | null
    createdAt?: Date | string
    upvotes?: UpvoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedProductsInput = {
    id?: string
    email: string
    username: string
    password: string
    image?: string | null
    bio?: string | null
    twitter?: string | null
    github?: string | null
    linkedin?: string | null
    bluesky?: string | null
    createdAt?: Date | string
    upvotes?: UpvoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
  }

  export type ProductCreateWithoutSavesInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    upvoters?: UpvoteCreateNestedManyWithoutProductInput
    socialLinks?: SocialLinkCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSavesInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    upvoters?: UpvoteUncheckedCreateNestedManyWithoutProductInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSavesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSavesInput, ProductUncheckedCreateWithoutSavesInput>
  }

  export type UserUpsertWithoutSavedProductsInput = {
    update: XOR<UserUpdateWithoutSavedProductsInput, UserUncheckedUpdateWithoutSavedProductsInput>
    create: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedProductsInput, UserUncheckedUpdateWithoutSavedProductsInput>
  }

  export type UserUpdateWithoutSavedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: UpvoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: UpvoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutSavesInput = {
    update: XOR<ProductUpdateWithoutSavesInput, ProductUncheckedUpdateWithoutSavesInput>
    create: XOR<ProductCreateWithoutSavesInput, ProductUncheckedCreateWithoutSavesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSavesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSavesInput, ProductUncheckedUpdateWithoutSavesInput>
  }

  export type ProductUpdateWithoutSavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    upvoters?: UpvoteUpdateManyWithoutProductNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    upvoters?: UpvoteUncheckedUpdateManyWithoutProductNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutUpvotesInput = {
    id?: string
    email: string
    username: string
    password: string
    image?: string | null
    bio?: string | null
    twitter?: string | null
    github?: string | null
    linkedin?: string | null
    bluesky?: string | null
    createdAt?: Date | string
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpvotesInput = {
    id?: string
    email: string
    username: string
    password: string
    image?: string | null
    bio?: string | null
    twitter?: string | null
    github?: string | null
    linkedin?: string | null
    bluesky?: string | null
    createdAt?: Date | string
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpvotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
  }

  export type ProductCreateWithoutUpvotersInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    saves?: SavedProductCreateNestedManyWithoutProductInput
    socialLinks?: SocialLinkCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUpvotersInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    saves?: SavedProductUncheckedCreateNestedManyWithoutProductInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUpvotersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUpvotersInput, ProductUncheckedCreateWithoutUpvotersInput>
  }

  export type UserUpsertWithoutUpvotesInput = {
    update: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
  }

  export type UserUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    bluesky?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutUpvotersInput = {
    update: XOR<ProductUpdateWithoutUpvotersInput, ProductUncheckedUpdateWithoutUpvotersInput>
    create: XOR<ProductCreateWithoutUpvotersInput, ProductUncheckedCreateWithoutUpvotersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUpvotersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUpvotersInput, ProductUncheckedUpdateWithoutUpvotersInput>
  }

  export type ProductUpdateWithoutUpvotersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    saves?: SavedProductUpdateManyWithoutProductNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpvotersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    saves?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutSocialLinksInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    saves?: SavedProductCreateNestedManyWithoutProductInput
    upvoters?: UpvoteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSocialLinksInput = {
    id?: string
    title: string
    logo: string
    shortDescription: string
    fullDescription: string
    link: string
    githubUrl: string
    tags?: ProductCreatetagsInput | string[]
    upvotes?: number
    createdAt?: Date | string
    userId: string
    userName?: string | null
    userImage?: string | null
    userBio?: string | null
    saves?: SavedProductUncheckedCreateNestedManyWithoutProductInput
    upvoters?: UpvoteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSocialLinksInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSocialLinksInput, ProductUncheckedCreateWithoutSocialLinksInput>
  }

  export type ProductUpsertWithoutSocialLinksInput = {
    update: XOR<ProductUpdateWithoutSocialLinksInput, ProductUncheckedUpdateWithoutSocialLinksInput>
    create: XOR<ProductCreateWithoutSocialLinksInput, ProductUncheckedCreateWithoutSocialLinksInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSocialLinksInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSocialLinksInput, ProductUncheckedUpdateWithoutSocialLinksInput>
  }

  export type ProductUpdateWithoutSocialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    saves?: SavedProductUpdateManyWithoutProductNestedInput
    upvoters?: UpvoteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSocialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    tags?: ProductUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    userBio?: NullableStringFieldUpdateOperationsInput | string | null
    saves?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
    upvoters?: UpvoteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SavedProductCreateManyUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
  }

  export type UpvoteCreateManyUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
  }

  export type SavedProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavedProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutUpvotersNestedInput
  }

  export type UpvoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductCreateManyProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UpvoteCreateManyProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SocialLinkCreateManyProductInput = {
    id?: string
    platform: string
    url: string
  }

  export type SavedProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedProductsNestedInput
  }

  export type SavedProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type UpvoteUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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