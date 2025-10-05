
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
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Contributor
 * 
 */
export type Contributor = $Result.DefaultSelection<Prisma.$ContributorPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Artists
 * const artists = await prisma.artist.findMany()
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
   * // Fetch zero or more Artists
   * const artists = await prisma.artist.findMany()
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
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contributor`: Exposes CRUD operations for the **Contributor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributors
    * const contributors = await prisma.contributor.findMany()
    * ```
    */
  get contributor(): Prisma.ContributorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Artist: 'Artist',
    Contributor: 'Contributor',
    Genre: 'Genre',
    Album: 'Album',
    Track: 'Track'
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
      modelProps: "artist" | "contributor" | "genre" | "album" | "track"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Contributor: {
        payload: Prisma.$ContributorPayload<ExtArgs>
        fields: Prisma.ContributorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContributorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContributorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          findFirst: {
            args: Prisma.ContributorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContributorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          findMany: {
            args: Prisma.ContributorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>[]
          }
          create: {
            args: Prisma.ContributorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          createMany: {
            args: Prisma.ContributorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContributorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>[]
          }
          delete: {
            args: Prisma.ContributorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          update: {
            args: Prisma.ContributorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          deleteMany: {
            args: Prisma.ContributorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContributorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContributorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>[]
          }
          upsert: {
            args: Prisma.ContributorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          aggregate: {
            args: Prisma.ContributorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContributor>
          }
          groupBy: {
            args: Prisma.ContributorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContributorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContributorCountArgs<ExtArgs>
            result: $Utils.Optional<ContributorCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
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
    artist?: ArtistOmit
    contributor?: ContributorOmit
    genre?: GenreOmit
    album?: AlbumOmit
    track?: TrackOmit
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
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    albums: number
    tracks: number
    contributors: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | ArtistCountOutputTypeCountAlbumsArgs
    tracks?: boolean | ArtistCountOutputTypeCountTracksArgs
    contributors?: boolean | ArtistCountOutputTypeCountContributorsArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributorWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    albums: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | GenreCountOutputTypeCountAlbumsArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    genres: number
    contributors: number
    tracks: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | AlbumCountOutputTypeCountGenresArgs
    contributors?: boolean | AlbumCountOutputTypeCountContributorsArgs
    tracks?: boolean | AlbumCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributorWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    contributors: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributors?: boolean | TrackCountOutputTypeCountContributorsArgs
  }

  // Custom InputTypes
  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    share: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
    radio: boolean | null
    tracklist: string | null
    type: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    share: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
    radio: boolean | null
    tracklist: string | null
    type: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    link: number
    share: number
    picture: number
    picture_small: number
    picture_medium: number
    picture_big: number
    picture_xl: number
    radio: number
    tracklist: number
    type: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    share?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
    radio?: true
    tracklist?: true
    type?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    share?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
    radio?: true
    tracklist?: true
    type?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    share?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
    radio?: true
    tracklist?: true
    type?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    name: string
    link: string | null
    share: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
    radio: boolean | null
    tracklist: string | null
    type: string | null
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    tracks?: boolean | Artist$tracksArgs<ExtArgs>
    contributors?: boolean | Artist$contributorsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "share" | "picture" | "picture_small" | "picture_medium" | "picture_big" | "picture_xl" | "radio" | "tracklist" | "type", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    tracks?: boolean | Artist$tracksArgs<ExtArgs>
    contributors?: boolean | Artist$contributorsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      tracks: Prisma.$TrackPayload<ExtArgs>[]
      contributors: Prisma.$ContributorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      link: string | null
      share: string | null
      picture: string | null
      picture_small: string | null
      picture_medium: string | null
      picture_big: string | null
      picture_xl: string | null
      radio: boolean | null
      tracklist: string | null
      type: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albums<T extends Artist$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tracks<T extends Artist$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Artist$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributors<T extends Artist$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'Int'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly link: FieldRef<"Artist", 'String'>
    readonly share: FieldRef<"Artist", 'String'>
    readonly picture: FieldRef<"Artist", 'String'>
    readonly picture_small: FieldRef<"Artist", 'String'>
    readonly picture_medium: FieldRef<"Artist", 'String'>
    readonly picture_big: FieldRef<"Artist", 'String'>
    readonly picture_xl: FieldRef<"Artist", 'String'>
    readonly radio: FieldRef<"Artist", 'Boolean'>
    readonly tracklist: FieldRef<"Artist", 'String'>
    readonly type: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.albums
   */
  export type Artist$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artist.tracks
   */
  export type Artist$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Artist.contributors
   */
  export type Artist$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    where?: ContributorWhereInput
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    cursor?: ContributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Contributor
   */

  export type AggregateContributor = {
    _count: ContributorCountAggregateOutputType | null
    _avg: ContributorAvgAggregateOutputType | null
    _sum: ContributorSumAggregateOutputType | null
    _min: ContributorMinAggregateOutputType | null
    _max: ContributorMaxAggregateOutputType | null
  }

  export type ContributorAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
    albumId: number | null
    trackId: number | null
  }

  export type ContributorSumAggregateOutputType = {
    id: number | null
    artistId: number | null
    albumId: number | null
    trackId: number | null
  }

  export type ContributorMinAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    share: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
    radio: boolean | null
    tracklist: string | null
    type: string | null
    role: string | null
    artistId: number | null
    albumId: number | null
    trackId: number | null
  }

  export type ContributorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    share: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
    radio: boolean | null
    tracklist: string | null
    type: string | null
    role: string | null
    artistId: number | null
    albumId: number | null
    trackId: number | null
  }

  export type ContributorCountAggregateOutputType = {
    id: number
    name: number
    link: number
    share: number
    picture: number
    picture_small: number
    picture_medium: number
    picture_big: number
    picture_xl: number
    radio: number
    tracklist: number
    type: number
    role: number
    artistId: number
    albumId: number
    trackId: number
    _all: number
  }


  export type ContributorAvgAggregateInputType = {
    id?: true
    artistId?: true
    albumId?: true
    trackId?: true
  }

  export type ContributorSumAggregateInputType = {
    id?: true
    artistId?: true
    albumId?: true
    trackId?: true
  }

  export type ContributorMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    share?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
    radio?: true
    tracklist?: true
    type?: true
    role?: true
    artistId?: true
    albumId?: true
    trackId?: true
  }

  export type ContributorMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    share?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
    radio?: true
    tracklist?: true
    type?: true
    role?: true
    artistId?: true
    albumId?: true
    trackId?: true
  }

  export type ContributorCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    share?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
    radio?: true
    tracklist?: true
    type?: true
    role?: true
    artistId?: true
    albumId?: true
    trackId?: true
    _all?: true
  }

  export type ContributorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributor to aggregate.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contributors
    **/
    _count?: true | ContributorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContributorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContributorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributorMaxAggregateInputType
  }

  export type GetContributorAggregateType<T extends ContributorAggregateArgs> = {
        [P in keyof T & keyof AggregateContributor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContributor[P]>
      : GetScalarType<T[P], AggregateContributor[P]>
  }




  export type ContributorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributorWhereInput
    orderBy?: ContributorOrderByWithAggregationInput | ContributorOrderByWithAggregationInput[]
    by: ContributorScalarFieldEnum[] | ContributorScalarFieldEnum
    having?: ContributorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributorCountAggregateInputType | true
    _avg?: ContributorAvgAggregateInputType
    _sum?: ContributorSumAggregateInputType
    _min?: ContributorMinAggregateInputType
    _max?: ContributorMaxAggregateInputType
  }

  export type ContributorGroupByOutputType = {
    id: number
    name: string
    link: string | null
    share: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
    radio: boolean | null
    tracklist: string | null
    type: string | null
    role: string | null
    artistId: number | null
    albumId: number | null
    trackId: number | null
    _count: ContributorCountAggregateOutputType | null
    _avg: ContributorAvgAggregateOutputType | null
    _sum: ContributorSumAggregateOutputType | null
    _min: ContributorMinAggregateOutputType | null
    _max: ContributorMaxAggregateOutputType | null
  }

  type GetContributorGroupByPayload<T extends ContributorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributorGroupByOutputType[P]>
            : GetScalarType<T[P], ContributorGroupByOutputType[P]>
        }
      >
    >


  export type ContributorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
    role?: boolean
    artistId?: boolean
    albumId?: boolean
    trackId?: boolean
    artist?: boolean | Contributor$artistArgs<ExtArgs>
    album?: boolean | Contributor$albumArgs<ExtArgs>
    track?: boolean | Contributor$trackArgs<ExtArgs>
  }, ExtArgs["result"]["contributor"]>

  export type ContributorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
    role?: boolean
    artistId?: boolean
    albumId?: boolean
    trackId?: boolean
    artist?: boolean | Contributor$artistArgs<ExtArgs>
    album?: boolean | Contributor$albumArgs<ExtArgs>
    track?: boolean | Contributor$trackArgs<ExtArgs>
  }, ExtArgs["result"]["contributor"]>

  export type ContributorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
    role?: boolean
    artistId?: boolean
    albumId?: boolean
    trackId?: boolean
    artist?: boolean | Contributor$artistArgs<ExtArgs>
    album?: boolean | Contributor$albumArgs<ExtArgs>
    track?: boolean | Contributor$trackArgs<ExtArgs>
  }, ExtArgs["result"]["contributor"]>

  export type ContributorSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    share?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    radio?: boolean
    tracklist?: boolean
    type?: boolean
    role?: boolean
    artistId?: boolean
    albumId?: boolean
    trackId?: boolean
  }

  export type ContributorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "share" | "picture" | "picture_small" | "picture_medium" | "picture_big" | "picture_xl" | "radio" | "tracklist" | "type" | "role" | "artistId" | "albumId" | "trackId", ExtArgs["result"]["contributor"]>
  export type ContributorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Contributor$artistArgs<ExtArgs>
    album?: boolean | Contributor$albumArgs<ExtArgs>
    track?: boolean | Contributor$trackArgs<ExtArgs>
  }
  export type ContributorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Contributor$artistArgs<ExtArgs>
    album?: boolean | Contributor$albumArgs<ExtArgs>
    track?: boolean | Contributor$trackArgs<ExtArgs>
  }
  export type ContributorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Contributor$artistArgs<ExtArgs>
    album?: boolean | Contributor$albumArgs<ExtArgs>
    track?: boolean | Contributor$trackArgs<ExtArgs>
  }

  export type $ContributorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contributor"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs> | null
      track: Prisma.$TrackPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      link: string | null
      share: string | null
      picture: string | null
      picture_small: string | null
      picture_medium: string | null
      picture_big: string | null
      picture_xl: string | null
      radio: boolean | null
      tracklist: string | null
      type: string | null
      role: string | null
      artistId: number | null
      albumId: number | null
      trackId: number | null
    }, ExtArgs["result"]["contributor"]>
    composites: {}
  }

  type ContributorGetPayload<S extends boolean | null | undefined | ContributorDefaultArgs> = $Result.GetResult<Prisma.$ContributorPayload, S>

  type ContributorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContributorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContributorCountAggregateInputType | true
    }

  export interface ContributorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contributor'], meta: { name: 'Contributor' } }
    /**
     * Find zero or one Contributor that matches the filter.
     * @param {ContributorFindUniqueArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContributorFindUniqueArgs>(args: SelectSubset<T, ContributorFindUniqueArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contributor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContributorFindUniqueOrThrowArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContributorFindUniqueOrThrowArgs>(args: SelectSubset<T, ContributorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contributor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorFindFirstArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContributorFindFirstArgs>(args?: SelectSubset<T, ContributorFindFirstArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contributor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorFindFirstOrThrowArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContributorFindFirstOrThrowArgs>(args?: SelectSubset<T, ContributorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributors
     * const contributors = await prisma.contributor.findMany()
     * 
     * // Get first 10 Contributors
     * const contributors = await prisma.contributor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributorWithIdOnly = await prisma.contributor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContributorFindManyArgs>(args?: SelectSubset<T, ContributorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contributor.
     * @param {ContributorCreateArgs} args - Arguments to create a Contributor.
     * @example
     * // Create one Contributor
     * const Contributor = await prisma.contributor.create({
     *   data: {
     *     // ... data to create a Contributor
     *   }
     * })
     * 
     */
    create<T extends ContributorCreateArgs>(args: SelectSubset<T, ContributorCreateArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contributors.
     * @param {ContributorCreateManyArgs} args - Arguments to create many Contributors.
     * @example
     * // Create many Contributors
     * const contributor = await prisma.contributor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContributorCreateManyArgs>(args?: SelectSubset<T, ContributorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contributors and returns the data saved in the database.
     * @param {ContributorCreateManyAndReturnArgs} args - Arguments to create many Contributors.
     * @example
     * // Create many Contributors
     * const contributor = await prisma.contributor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contributors and only return the `id`
     * const contributorWithIdOnly = await prisma.contributor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContributorCreateManyAndReturnArgs>(args?: SelectSubset<T, ContributorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contributor.
     * @param {ContributorDeleteArgs} args - Arguments to delete one Contributor.
     * @example
     * // Delete one Contributor
     * const Contributor = await prisma.contributor.delete({
     *   where: {
     *     // ... filter to delete one Contributor
     *   }
     * })
     * 
     */
    delete<T extends ContributorDeleteArgs>(args: SelectSubset<T, ContributorDeleteArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contributor.
     * @param {ContributorUpdateArgs} args - Arguments to update one Contributor.
     * @example
     * // Update one Contributor
     * const contributor = await prisma.contributor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContributorUpdateArgs>(args: SelectSubset<T, ContributorUpdateArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contributors.
     * @param {ContributorDeleteManyArgs} args - Arguments to filter Contributors to delete.
     * @example
     * // Delete a few Contributors
     * const { count } = await prisma.contributor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContributorDeleteManyArgs>(args?: SelectSubset<T, ContributorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributors
     * const contributor = await prisma.contributor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContributorUpdateManyArgs>(args: SelectSubset<T, ContributorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributors and returns the data updated in the database.
     * @param {ContributorUpdateManyAndReturnArgs} args - Arguments to update many Contributors.
     * @example
     * // Update many Contributors
     * const contributor = await prisma.contributor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contributors and only return the `id`
     * const contributorWithIdOnly = await prisma.contributor.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContributorUpdateManyAndReturnArgs>(args: SelectSubset<T, ContributorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contributor.
     * @param {ContributorUpsertArgs} args - Arguments to update or create a Contributor.
     * @example
     * // Update or create a Contributor
     * const contributor = await prisma.contributor.upsert({
     *   create: {
     *     // ... data to create a Contributor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contributor we want to update
     *   }
     * })
     */
    upsert<T extends ContributorUpsertArgs>(args: SelectSubset<T, ContributorUpsertArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorCountArgs} args - Arguments to filter Contributors to count.
     * @example
     * // Count the number of Contributors
     * const count = await prisma.contributor.count({
     *   where: {
     *     // ... the filter for the Contributors we want to count
     *   }
     * })
    **/
    count<T extends ContributorCountArgs>(
      args?: Subset<T, ContributorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContributorAggregateArgs>(args: Subset<T, ContributorAggregateArgs>): Prisma.PrismaPromise<GetContributorAggregateType<T>>

    /**
     * Group by Contributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorGroupByArgs} args - Group by arguments.
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
      T extends ContributorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContributorGroupByArgs['orderBy'] }
        : { orderBy?: ContributorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContributorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contributor model
   */
  readonly fields: ContributorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contributor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContributorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends Contributor$artistArgs<ExtArgs> = {}>(args?: Subset<T, Contributor$artistArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    album<T extends Contributor$albumArgs<ExtArgs> = {}>(args?: Subset<T, Contributor$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    track<T extends Contributor$trackArgs<ExtArgs> = {}>(args?: Subset<T, Contributor$trackArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contributor model
   */
  interface ContributorFieldRefs {
    readonly id: FieldRef<"Contributor", 'Int'>
    readonly name: FieldRef<"Contributor", 'String'>
    readonly link: FieldRef<"Contributor", 'String'>
    readonly share: FieldRef<"Contributor", 'String'>
    readonly picture: FieldRef<"Contributor", 'String'>
    readonly picture_small: FieldRef<"Contributor", 'String'>
    readonly picture_medium: FieldRef<"Contributor", 'String'>
    readonly picture_big: FieldRef<"Contributor", 'String'>
    readonly picture_xl: FieldRef<"Contributor", 'String'>
    readonly radio: FieldRef<"Contributor", 'Boolean'>
    readonly tracklist: FieldRef<"Contributor", 'String'>
    readonly type: FieldRef<"Contributor", 'String'>
    readonly role: FieldRef<"Contributor", 'String'>
    readonly artistId: FieldRef<"Contributor", 'Int'>
    readonly albumId: FieldRef<"Contributor", 'Int'>
    readonly trackId: FieldRef<"Contributor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Contributor findUnique
   */
  export type ContributorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor findUniqueOrThrow
   */
  export type ContributorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor findFirst
   */
  export type ContributorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributors.
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributors.
     */
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Contributor findFirstOrThrow
   */
  export type ContributorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributors.
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributors.
     */
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Contributor findMany
   */
  export type ContributorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributors to fetch.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contributors.
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Contributor create
   */
  export type ContributorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * The data needed to create a Contributor.
     */
    data: XOR<ContributorCreateInput, ContributorUncheckedCreateInput>
  }

  /**
   * Contributor createMany
   */
  export type ContributorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contributors.
     */
    data: ContributorCreateManyInput | ContributorCreateManyInput[]
  }

  /**
   * Contributor createManyAndReturn
   */
  export type ContributorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * The data used to create many Contributors.
     */
    data: ContributorCreateManyInput | ContributorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contributor update
   */
  export type ContributorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * The data needed to update a Contributor.
     */
    data: XOR<ContributorUpdateInput, ContributorUncheckedUpdateInput>
    /**
     * Choose, which Contributor to update.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor updateMany
   */
  export type ContributorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contributors.
     */
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyInput>
    /**
     * Filter which Contributors to update
     */
    where?: ContributorWhereInput
    /**
     * Limit how many Contributors to update.
     */
    limit?: number
  }

  /**
   * Contributor updateManyAndReturn
   */
  export type ContributorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * The data used to update Contributors.
     */
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyInput>
    /**
     * Filter which Contributors to update
     */
    where?: ContributorWhereInput
    /**
     * Limit how many Contributors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contributor upsert
   */
  export type ContributorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * The filter to search for the Contributor to update in case it exists.
     */
    where: ContributorWhereUniqueInput
    /**
     * In case the Contributor found by the `where` argument doesn't exist, create a new Contributor with this data.
     */
    create: XOR<ContributorCreateInput, ContributorUncheckedCreateInput>
    /**
     * In case the Contributor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContributorUpdateInput, ContributorUncheckedUpdateInput>
  }

  /**
   * Contributor delete
   */
  export type ContributorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter which Contributor to delete.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor deleteMany
   */
  export type ContributorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributors to delete
     */
    where?: ContributorWhereInput
    /**
     * Limit how many Contributors to delete.
     */
    limit?: number
  }

  /**
   * Contributor.artist
   */
  export type Contributor$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
  }

  /**
   * Contributor.album
   */
  export type Contributor$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Contributor.track
   */
  export type Contributor$trackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
  }

  /**
   * Contributor without action
   */
  export type ContributorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    picture: number
    picture_small: number
    picture_medium: number
    picture_big: number
    picture_xl: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    picture?: true
    picture_small?: true
    picture_medium?: true
    picture_big?: true
    picture_xl?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    picture: string | null
    picture_small: string | null
    picture_medium: string | null
    picture_big: string | null
    picture_xl: string | null
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
    albums?: boolean | Genre$albumsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    picture?: boolean
    picture_small?: boolean
    picture_medium?: boolean
    picture_big?: boolean
    picture_xl?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "picture" | "picture_small" | "picture_medium" | "picture_big" | "picture_xl", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | Genre$albumsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      albums: Prisma.$AlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      picture: string | null
      picture_small: string | null
      picture_medium: string | null
      picture_big: string | null
      picture_xl: string | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albums<T extends Genre$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly picture: FieldRef<"Genre", 'String'>
    readonly picture_small: FieldRef<"Genre", 'String'>
    readonly picture_medium: FieldRef<"Genre", 'String'>
    readonly picture_big: FieldRef<"Genre", 'String'>
    readonly picture_xl: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.albums
   */
  export type Genre$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    genre_id: number | null
    nb_tracks: number | null
    duration: number | null
    fans: number | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    artistId: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    genre_id: number | null
    nb_tracks: number | null
    duration: number | null
    fans: number | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    artistId: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    title: string | null
    upc: string | null
    link: string | null
    share: string | null
    cover: string | null
    cover_small: string | null
    cover_medium: string | null
    cover_big: string | null
    cover_xl: string | null
    md5_image: string | null
    genre_id: number | null
    label: string | null
    nb_tracks: number | null
    duration: number | null
    fans: number | null
    release_date: string | null
    record_type: string | null
    available: boolean | null
    tracklist: string | null
    explicit_lyrics: boolean | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    type: string | null
    artistId: number | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    title: string | null
    upc: string | null
    link: string | null
    share: string | null
    cover: string | null
    cover_small: string | null
    cover_medium: string | null
    cover_big: string | null
    cover_xl: string | null
    md5_image: string | null
    genre_id: number | null
    label: string | null
    nb_tracks: number | null
    duration: number | null
    fans: number | null
    release_date: string | null
    record_type: string | null
    available: boolean | null
    tracklist: string | null
    explicit_lyrics: boolean | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    type: string | null
    artistId: number | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    upc: number
    link: number
    share: number
    cover: number
    cover_small: number
    cover_medium: number
    cover_big: number
    cover_xl: number
    md5_image: number
    genre_id: number
    label: number
    nb_tracks: number
    duration: number
    fans: number
    release_date: number
    record_type: number
    available: number
    tracklist: number
    explicit_lyrics: number
    explicit_content_lyrics: number
    explicit_content_cover: number
    type: number
    artistId: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    genre_id?: true
    nb_tracks?: true
    duration?: true
    fans?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    artistId?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    genre_id?: true
    nb_tracks?: true
    duration?: true
    fans?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    artistId?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    upc?: true
    link?: true
    share?: true
    cover?: true
    cover_small?: true
    cover_medium?: true
    cover_big?: true
    cover_xl?: true
    md5_image?: true
    genre_id?: true
    label?: true
    nb_tracks?: true
    duration?: true
    fans?: true
    release_date?: true
    record_type?: true
    available?: true
    tracklist?: true
    explicit_lyrics?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    type?: true
    artistId?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    upc?: true
    link?: true
    share?: true
    cover?: true
    cover_small?: true
    cover_medium?: true
    cover_big?: true
    cover_xl?: true
    md5_image?: true
    genre_id?: true
    label?: true
    nb_tracks?: true
    duration?: true
    fans?: true
    release_date?: true
    record_type?: true
    available?: true
    tracklist?: true
    explicit_lyrics?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    type?: true
    artistId?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    upc?: true
    link?: true
    share?: true
    cover?: true
    cover_small?: true
    cover_medium?: true
    cover_big?: true
    cover_xl?: true
    md5_image?: true
    genre_id?: true
    label?: true
    nb_tracks?: true
    duration?: true
    fans?: true
    release_date?: true
    record_type?: true
    available?: true
    tracklist?: true
    explicit_lyrics?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    type?: true
    artistId?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    title: string
    upc: string | null
    link: string | null
    share: string | null
    cover: string | null
    cover_small: string | null
    cover_medium: string | null
    cover_big: string | null
    cover_xl: string | null
    md5_image: string | null
    genre_id: number | null
    label: string | null
    nb_tracks: number | null
    duration: number | null
    fans: number | null
    release_date: string | null
    record_type: string | null
    available: boolean | null
    tracklist: string | null
    explicit_lyrics: boolean | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    type: string | null
    artistId: number | null
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    upc?: boolean
    link?: boolean
    share?: boolean
    cover?: boolean
    cover_small?: boolean
    cover_medium?: boolean
    cover_big?: boolean
    cover_xl?: boolean
    md5_image?: boolean
    genre_id?: boolean
    label?: boolean
    nb_tracks?: boolean
    duration?: boolean
    fans?: boolean
    release_date?: boolean
    record_type?: boolean
    available?: boolean
    tracklist?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    type?: boolean
    artistId?: boolean
    artist?: boolean | Album$artistArgs<ExtArgs>
    genres?: boolean | Album$genresArgs<ExtArgs>
    contributors?: boolean | Album$contributorsArgs<ExtArgs>
    tracks?: boolean | Album$tracksArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    upc?: boolean
    link?: boolean
    share?: boolean
    cover?: boolean
    cover_small?: boolean
    cover_medium?: boolean
    cover_big?: boolean
    cover_xl?: boolean
    md5_image?: boolean
    genre_id?: boolean
    label?: boolean
    nb_tracks?: boolean
    duration?: boolean
    fans?: boolean
    release_date?: boolean
    record_type?: boolean
    available?: boolean
    tracklist?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    type?: boolean
    artistId?: boolean
    artist?: boolean | Album$artistArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    upc?: boolean
    link?: boolean
    share?: boolean
    cover?: boolean
    cover_small?: boolean
    cover_medium?: boolean
    cover_big?: boolean
    cover_xl?: boolean
    md5_image?: boolean
    genre_id?: boolean
    label?: boolean
    nb_tracks?: boolean
    duration?: boolean
    fans?: boolean
    release_date?: boolean
    record_type?: boolean
    available?: boolean
    tracklist?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    type?: boolean
    artistId?: boolean
    artist?: boolean | Album$artistArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    upc?: boolean
    link?: boolean
    share?: boolean
    cover?: boolean
    cover_small?: boolean
    cover_medium?: boolean
    cover_big?: boolean
    cover_xl?: boolean
    md5_image?: boolean
    genre_id?: boolean
    label?: boolean
    nb_tracks?: boolean
    duration?: boolean
    fans?: boolean
    release_date?: boolean
    record_type?: boolean
    available?: boolean
    tracklist?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    type?: boolean
    artistId?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "upc" | "link" | "share" | "cover" | "cover_small" | "cover_medium" | "cover_big" | "cover_xl" | "md5_image" | "genre_id" | "label" | "nb_tracks" | "duration" | "fans" | "release_date" | "record_type" | "available" | "tracklist" | "explicit_lyrics" | "explicit_content_lyrics" | "explicit_content_cover" | "type" | "artistId", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Album$artistArgs<ExtArgs>
    genres?: boolean | Album$genresArgs<ExtArgs>
    contributors?: boolean | Album$contributorsArgs<ExtArgs>
    tracks?: boolean | Album$tracksArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Album$artistArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Album$artistArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs> | null
      genres: Prisma.$GenrePayload<ExtArgs>[]
      contributors: Prisma.$ContributorPayload<ExtArgs>[]
      tracks: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      upc: string | null
      link: string | null
      share: string | null
      cover: string | null
      cover_small: string | null
      cover_medium: string | null
      cover_big: string | null
      cover_xl: string | null
      md5_image: string | null
      genre_id: number | null
      label: string | null
      nb_tracks: number | null
      duration: number | null
      fans: number | null
      release_date: string | null
      record_type: string | null
      available: boolean | null
      tracklist: string | null
      explicit_lyrics: boolean | null
      explicit_content_lyrics: number | null
      explicit_content_cover: number | null
      type: string | null
      artistId: number | null
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends Album$artistArgs<ExtArgs> = {}>(args?: Subset<T, Album$artistArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    genres<T extends Album$genresArgs<ExtArgs> = {}>(args?: Subset<T, Album$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributors<T extends Album$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, Album$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tracks<T extends Album$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Album$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly title: FieldRef<"Album", 'String'>
    readonly upc: FieldRef<"Album", 'String'>
    readonly link: FieldRef<"Album", 'String'>
    readonly share: FieldRef<"Album", 'String'>
    readonly cover: FieldRef<"Album", 'String'>
    readonly cover_small: FieldRef<"Album", 'String'>
    readonly cover_medium: FieldRef<"Album", 'String'>
    readonly cover_big: FieldRef<"Album", 'String'>
    readonly cover_xl: FieldRef<"Album", 'String'>
    readonly md5_image: FieldRef<"Album", 'String'>
    readonly genre_id: FieldRef<"Album", 'Int'>
    readonly label: FieldRef<"Album", 'String'>
    readonly nb_tracks: FieldRef<"Album", 'Int'>
    readonly duration: FieldRef<"Album", 'Int'>
    readonly fans: FieldRef<"Album", 'Int'>
    readonly release_date: FieldRef<"Album", 'String'>
    readonly record_type: FieldRef<"Album", 'String'>
    readonly available: FieldRef<"Album", 'Boolean'>
    readonly tracklist: FieldRef<"Album", 'String'>
    readonly explicit_lyrics: FieldRef<"Album", 'Boolean'>
    readonly explicit_content_lyrics: FieldRef<"Album", 'Int'>
    readonly explicit_content_cover: FieldRef<"Album", 'Int'>
    readonly type: FieldRef<"Album", 'String'>
    readonly artistId: FieldRef<"Album", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.artist
   */
  export type Album$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
  }

  /**
   * Album.genres
   */
  export type Album$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Album.contributors
   */
  export type Album$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    where?: ContributorWhereInput
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    cursor?: ContributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Album.tracks
   */
  export type Album$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    track_position: number | null
    disk_number: number | null
    rank: number | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    bpm: number | null
    gain: number | null
    artistId: number | null
    albumId: number | null
  }

  export type TrackSumAggregateOutputType = {
    id: number | null
    duration: number | null
    track_position: number | null
    disk_number: number | null
    rank: number | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    bpm: number | null
    gain: number | null
    artistId: number | null
    albumId: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: number | null
    readable: boolean | null
    title: string | null
    title_short: string | null
    title_version: string | null
    isrc: string | null
    link: string | null
    share: string | null
    duration: number | null
    track_position: number | null
    disk_number: number | null
    rank: number | null
    release_date: string | null
    explicit_lyrics: boolean | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    preview: string | null
    bpm: number | null
    gain: number | null
    md5_image: string | null
    track_token: string | null
    type: string | null
    artistId: number | null
    albumId: number | null
  }

  export type TrackMaxAggregateOutputType = {
    id: number | null
    readable: boolean | null
    title: string | null
    title_short: string | null
    title_version: string | null
    isrc: string | null
    link: string | null
    share: string | null
    duration: number | null
    track_position: number | null
    disk_number: number | null
    rank: number | null
    release_date: string | null
    explicit_lyrics: boolean | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    preview: string | null
    bpm: number | null
    gain: number | null
    md5_image: string | null
    track_token: string | null
    type: string | null
    artistId: number | null
    albumId: number | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    readable: number
    title: number
    title_short: number
    title_version: number
    isrc: number
    link: number
    share: number
    duration: number
    track_position: number
    disk_number: number
    rank: number
    release_date: number
    explicit_lyrics: number
    explicit_content_lyrics: number
    explicit_content_cover: number
    preview: number
    bpm: number
    gain: number
    md5_image: number
    track_token: number
    type: number
    available_countries: number
    artistId: number
    albumId: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    id?: true
    duration?: true
    track_position?: true
    disk_number?: true
    rank?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    bpm?: true
    gain?: true
    artistId?: true
    albumId?: true
  }

  export type TrackSumAggregateInputType = {
    id?: true
    duration?: true
    track_position?: true
    disk_number?: true
    rank?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    bpm?: true
    gain?: true
    artistId?: true
    albumId?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    readable?: true
    title?: true
    title_short?: true
    title_version?: true
    isrc?: true
    link?: true
    share?: true
    duration?: true
    track_position?: true
    disk_number?: true
    rank?: true
    release_date?: true
    explicit_lyrics?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    preview?: true
    bpm?: true
    gain?: true
    md5_image?: true
    track_token?: true
    type?: true
    artistId?: true
    albumId?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    readable?: true
    title?: true
    title_short?: true
    title_version?: true
    isrc?: true
    link?: true
    share?: true
    duration?: true
    track_position?: true
    disk_number?: true
    rank?: true
    release_date?: true
    explicit_lyrics?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    preview?: true
    bpm?: true
    gain?: true
    md5_image?: true
    track_token?: true
    type?: true
    artistId?: true
    albumId?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    readable?: true
    title?: true
    title_short?: true
    title_version?: true
    isrc?: true
    link?: true
    share?: true
    duration?: true
    track_position?: true
    disk_number?: true
    rank?: true
    release_date?: true
    explicit_lyrics?: true
    explicit_content_lyrics?: true
    explicit_content_cover?: true
    preview?: true
    bpm?: true
    gain?: true
    md5_image?: true
    track_token?: true
    type?: true
    available_countries?: true
    artistId?: true
    albumId?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: number
    readable: boolean | null
    title: string
    title_short: string | null
    title_version: string | null
    isrc: string | null
    link: string | null
    share: string | null
    duration: number | null
    track_position: number | null
    disk_number: number | null
    rank: number | null
    release_date: string | null
    explicit_lyrics: boolean | null
    explicit_content_lyrics: number | null
    explicit_content_cover: number | null
    preview: string | null
    bpm: number | null
    gain: number | null
    md5_image: string | null
    track_token: string | null
    type: string | null
    available_countries: JsonValue | null
    artistId: number | null
    albumId: number | null
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readable?: boolean
    title?: boolean
    title_short?: boolean
    title_version?: boolean
    isrc?: boolean
    link?: boolean
    share?: boolean
    duration?: boolean
    track_position?: boolean
    disk_number?: boolean
    rank?: boolean
    release_date?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    preview?: boolean
    bpm?: boolean
    gain?: boolean
    md5_image?: boolean
    track_token?: boolean
    type?: boolean
    available_countries?: boolean
    artistId?: boolean
    albumId?: boolean
    artist?: boolean | Track$artistArgs<ExtArgs>
    album?: boolean | Track$albumArgs<ExtArgs>
    contributors?: boolean | Track$contributorsArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readable?: boolean
    title?: boolean
    title_short?: boolean
    title_version?: boolean
    isrc?: boolean
    link?: boolean
    share?: boolean
    duration?: boolean
    track_position?: boolean
    disk_number?: boolean
    rank?: boolean
    release_date?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    preview?: boolean
    bpm?: boolean
    gain?: boolean
    md5_image?: boolean
    track_token?: boolean
    type?: boolean
    available_countries?: boolean
    artistId?: boolean
    albumId?: boolean
    artist?: boolean | Track$artistArgs<ExtArgs>
    album?: boolean | Track$albumArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readable?: boolean
    title?: boolean
    title_short?: boolean
    title_version?: boolean
    isrc?: boolean
    link?: boolean
    share?: boolean
    duration?: boolean
    track_position?: boolean
    disk_number?: boolean
    rank?: boolean
    release_date?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    preview?: boolean
    bpm?: boolean
    gain?: boolean
    md5_image?: boolean
    track_token?: boolean
    type?: boolean
    available_countries?: boolean
    artistId?: boolean
    albumId?: boolean
    artist?: boolean | Track$artistArgs<ExtArgs>
    album?: boolean | Track$albumArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    readable?: boolean
    title?: boolean
    title_short?: boolean
    title_version?: boolean
    isrc?: boolean
    link?: boolean
    share?: boolean
    duration?: boolean
    track_position?: boolean
    disk_number?: boolean
    rank?: boolean
    release_date?: boolean
    explicit_lyrics?: boolean
    explicit_content_lyrics?: boolean
    explicit_content_cover?: boolean
    preview?: boolean
    bpm?: boolean
    gain?: boolean
    md5_image?: boolean
    track_token?: boolean
    type?: boolean
    available_countries?: boolean
    artistId?: boolean
    albumId?: boolean
  }

  export type TrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "readable" | "title" | "title_short" | "title_version" | "isrc" | "link" | "share" | "duration" | "track_position" | "disk_number" | "rank" | "release_date" | "explicit_lyrics" | "explicit_content_lyrics" | "explicit_content_cover" | "preview" | "bpm" | "gain" | "md5_image" | "track_token" | "type" | "available_countries" | "artistId" | "albumId", ExtArgs["result"]["track"]>
  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Track$artistArgs<ExtArgs>
    album?: boolean | Track$albumArgs<ExtArgs>
    contributors?: boolean | Track$contributorsArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Track$artistArgs<ExtArgs>
    album?: boolean | Track$albumArgs<ExtArgs>
  }
  export type TrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Track$artistArgs<ExtArgs>
    album?: boolean | Track$albumArgs<ExtArgs>
  }

  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs> | null
      contributors: Prisma.$ContributorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      readable: boolean | null
      title: string
      title_short: string | null
      title_version: string | null
      isrc: string | null
      link: string | null
      share: string | null
      duration: number | null
      track_position: number | null
      disk_number: number | null
      rank: number | null
      release_date: string | null
      explicit_lyrics: boolean | null
      explicit_content_lyrics: number | null
      explicit_content_cover: number | null
      preview: string | null
      bpm: number | null
      gain: number | null
      md5_image: string | null
      track_token: string | null
      type: string | null
      available_countries: Prisma.JsonValue | null
      artistId: number | null
      albumId: number | null
    }, ExtArgs["result"]["track"]>
    composites: {}
  }

  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackFindUniqueArgs>(args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Track that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackFindFirstArgs>(args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackFindManyArgs>(args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
     */
    create<T extends TrackCreateArgs>(args: SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tracks.
     * @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackCreateManyArgs>(args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TrackCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
     */
    delete<T extends TrackDeleteArgs>(args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackUpdateArgs>(args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackDeleteManyArgs>(args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackUpdateManyArgs>(args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks and returns the data updated in the database.
     * @param {TrackUpdateManyAndReturnArgs} args - Arguments to update many Tracks.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrackUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
     */
    upsert<T extends TrackUpsertArgs>(args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
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
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends Track$artistArgs<ExtArgs> = {}>(args?: Subset<T, Track$artistArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    album<T extends Track$albumArgs<ExtArgs> = {}>(args?: Subset<T, Track$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contributors<T extends Track$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, Track$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Track model
   */
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'Int'>
    readonly readable: FieldRef<"Track", 'Boolean'>
    readonly title: FieldRef<"Track", 'String'>
    readonly title_short: FieldRef<"Track", 'String'>
    readonly title_version: FieldRef<"Track", 'String'>
    readonly isrc: FieldRef<"Track", 'String'>
    readonly link: FieldRef<"Track", 'String'>
    readonly share: FieldRef<"Track", 'String'>
    readonly duration: FieldRef<"Track", 'Int'>
    readonly track_position: FieldRef<"Track", 'Int'>
    readonly disk_number: FieldRef<"Track", 'Int'>
    readonly rank: FieldRef<"Track", 'Int'>
    readonly release_date: FieldRef<"Track", 'String'>
    readonly explicit_lyrics: FieldRef<"Track", 'Boolean'>
    readonly explicit_content_lyrics: FieldRef<"Track", 'Int'>
    readonly explicit_content_cover: FieldRef<"Track", 'Int'>
    readonly preview: FieldRef<"Track", 'String'>
    readonly bpm: FieldRef<"Track", 'Float'>
    readonly gain: FieldRef<"Track", 'Float'>
    readonly md5_image: FieldRef<"Track", 'String'>
    readonly track_token: FieldRef<"Track", 'String'>
    readonly type: FieldRef<"Track", 'String'>
    readonly available_countries: FieldRef<"Track", 'Json'>
    readonly artistId: FieldRef<"Track", 'Int'>
    readonly albumId: FieldRef<"Track", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }

  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
  }

  /**
   * Track createManyAndReturn
   */
  export type TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
  }

  /**
   * Track updateManyAndReturn
   */
  export type TrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }

  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to delete.
     */
    limit?: number
  }

  /**
   * Track.artist
   */
  export type Track$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
  }

  /**
   * Track.album
   */
  export type Track$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Track.contributors
   */
  export type Track$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    where?: ContributorWhereInput
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    cursor?: ContributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    share: 'share',
    picture: 'picture',
    picture_small: 'picture_small',
    picture_medium: 'picture_medium',
    picture_big: 'picture_big',
    picture_xl: 'picture_xl',
    radio: 'radio',
    tracklist: 'tracklist',
    type: 'type'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const ContributorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    share: 'share',
    picture: 'picture',
    picture_small: 'picture_small',
    picture_medium: 'picture_medium',
    picture_big: 'picture_big',
    picture_xl: 'picture_xl',
    radio: 'radio',
    tracklist: 'tracklist',
    type: 'type',
    role: 'role',
    artistId: 'artistId',
    albumId: 'albumId',
    trackId: 'trackId'
  };

  export type ContributorScalarFieldEnum = (typeof ContributorScalarFieldEnum)[keyof typeof ContributorScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    picture: 'picture',
    picture_small: 'picture_small',
    picture_medium: 'picture_medium',
    picture_big: 'picture_big',
    picture_xl: 'picture_xl'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    upc: 'upc',
    link: 'link',
    share: 'share',
    cover: 'cover',
    cover_small: 'cover_small',
    cover_medium: 'cover_medium',
    cover_big: 'cover_big',
    cover_xl: 'cover_xl',
    md5_image: 'md5_image',
    genre_id: 'genre_id',
    label: 'label',
    nb_tracks: 'nb_tracks',
    duration: 'duration',
    fans: 'fans',
    release_date: 'release_date',
    record_type: 'record_type',
    available: 'available',
    tracklist: 'tracklist',
    explicit_lyrics: 'explicit_lyrics',
    explicit_content_lyrics: 'explicit_content_lyrics',
    explicit_content_cover: 'explicit_content_cover',
    type: 'type',
    artistId: 'artistId'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    readable: 'readable',
    title: 'title',
    title_short: 'title_short',
    title_version: 'title_version',
    isrc: 'isrc',
    link: 'link',
    share: 'share',
    duration: 'duration',
    track_position: 'track_position',
    disk_number: 'disk_number',
    rank: 'rank',
    release_date: 'release_date',
    explicit_lyrics: 'explicit_lyrics',
    explicit_content_lyrics: 'explicit_content_lyrics',
    explicit_content_cover: 'explicit_content_cover',
    preview: 'preview',
    bpm: 'bpm',
    gain: 'gain',
    md5_image: 'md5_image',
    track_token: 'track_token',
    type: 'type',
    available_countries: 'available_countries',
    artistId: 'artistId',
    albumId: 'albumId'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


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


  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: IntFilter<"Artist"> | number
    name?: StringFilter<"Artist"> | string
    link?: StringNullableFilter<"Artist"> | string | null
    share?: StringNullableFilter<"Artist"> | string | null
    picture?: StringNullableFilter<"Artist"> | string | null
    picture_small?: StringNullableFilter<"Artist"> | string | null
    picture_medium?: StringNullableFilter<"Artist"> | string | null
    picture_big?: StringNullableFilter<"Artist"> | string | null
    picture_xl?: StringNullableFilter<"Artist"> | string | null
    radio?: BoolNullableFilter<"Artist"> | boolean | null
    tracklist?: StringNullableFilter<"Artist"> | string | null
    type?: StringNullableFilter<"Artist"> | string | null
    albums?: AlbumListRelationFilter
    tracks?: TrackListRelationFilter
    contributors?: ContributorListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    picture_small?: SortOrderInput | SortOrder
    picture_medium?: SortOrderInput | SortOrder
    picture_big?: SortOrderInput | SortOrder
    picture_xl?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    tracklist?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    albums?: AlbumOrderByRelationAggregateInput
    tracks?: TrackOrderByRelationAggregateInput
    contributors?: ContributorOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    link?: StringNullableFilter<"Artist"> | string | null
    share?: StringNullableFilter<"Artist"> | string | null
    picture?: StringNullableFilter<"Artist"> | string | null
    picture_small?: StringNullableFilter<"Artist"> | string | null
    picture_medium?: StringNullableFilter<"Artist"> | string | null
    picture_big?: StringNullableFilter<"Artist"> | string | null
    picture_xl?: StringNullableFilter<"Artist"> | string | null
    radio?: BoolNullableFilter<"Artist"> | boolean | null
    tracklist?: StringNullableFilter<"Artist"> | string | null
    type?: StringNullableFilter<"Artist"> | string | null
    albums?: AlbumListRelationFilter
    tracks?: TrackListRelationFilter
    contributors?: ContributorListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    picture_small?: SortOrderInput | SortOrder
    picture_medium?: SortOrderInput | SortOrder
    picture_big?: SortOrderInput | SortOrder
    picture_xl?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    tracklist?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artist"> | number
    name?: StringWithAggregatesFilter<"Artist"> | string
    link?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    share?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    picture_small?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    picture_medium?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    picture_big?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    picture_xl?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    radio?: BoolNullableWithAggregatesFilter<"Artist"> | boolean | null
    tracklist?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    type?: StringNullableWithAggregatesFilter<"Artist"> | string | null
  }

  export type ContributorWhereInput = {
    AND?: ContributorWhereInput | ContributorWhereInput[]
    OR?: ContributorWhereInput[]
    NOT?: ContributorWhereInput | ContributorWhereInput[]
    id?: IntFilter<"Contributor"> | number
    name?: StringFilter<"Contributor"> | string
    link?: StringNullableFilter<"Contributor"> | string | null
    share?: StringNullableFilter<"Contributor"> | string | null
    picture?: StringNullableFilter<"Contributor"> | string | null
    picture_small?: StringNullableFilter<"Contributor"> | string | null
    picture_medium?: StringNullableFilter<"Contributor"> | string | null
    picture_big?: StringNullableFilter<"Contributor"> | string | null
    picture_xl?: StringNullableFilter<"Contributor"> | string | null
    radio?: BoolNullableFilter<"Contributor"> | boolean | null
    tracklist?: StringNullableFilter<"Contributor"> | string | null
    type?: StringNullableFilter<"Contributor"> | string | null
    role?: StringNullableFilter<"Contributor"> | string | null
    artistId?: IntNullableFilter<"Contributor"> | number | null
    albumId?: IntNullableFilter<"Contributor"> | number | null
    trackId?: IntNullableFilter<"Contributor"> | number | null
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    track?: XOR<TrackNullableScalarRelationFilter, TrackWhereInput> | null
  }

  export type ContributorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    picture_small?: SortOrderInput | SortOrder
    picture_medium?: SortOrderInput | SortOrder
    picture_big?: SortOrderInput | SortOrder
    picture_xl?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    tracklist?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    trackId?: SortOrderInput | SortOrder
    artist?: ArtistOrderByWithRelationInput
    album?: AlbumOrderByWithRelationInput
    track?: TrackOrderByWithRelationInput
  }

  export type ContributorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContributorWhereInput | ContributorWhereInput[]
    OR?: ContributorWhereInput[]
    NOT?: ContributorWhereInput | ContributorWhereInput[]
    name?: StringFilter<"Contributor"> | string
    link?: StringNullableFilter<"Contributor"> | string | null
    share?: StringNullableFilter<"Contributor"> | string | null
    picture?: StringNullableFilter<"Contributor"> | string | null
    picture_small?: StringNullableFilter<"Contributor"> | string | null
    picture_medium?: StringNullableFilter<"Contributor"> | string | null
    picture_big?: StringNullableFilter<"Contributor"> | string | null
    picture_xl?: StringNullableFilter<"Contributor"> | string | null
    radio?: BoolNullableFilter<"Contributor"> | boolean | null
    tracklist?: StringNullableFilter<"Contributor"> | string | null
    type?: StringNullableFilter<"Contributor"> | string | null
    role?: StringNullableFilter<"Contributor"> | string | null
    artistId?: IntNullableFilter<"Contributor"> | number | null
    albumId?: IntNullableFilter<"Contributor"> | number | null
    trackId?: IntNullableFilter<"Contributor"> | number | null
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    track?: XOR<TrackNullableScalarRelationFilter, TrackWhereInput> | null
  }, "id">

  export type ContributorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    picture_small?: SortOrderInput | SortOrder
    picture_medium?: SortOrderInput | SortOrder
    picture_big?: SortOrderInput | SortOrder
    picture_xl?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    tracklist?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    trackId?: SortOrderInput | SortOrder
    _count?: ContributorCountOrderByAggregateInput
    _avg?: ContributorAvgOrderByAggregateInput
    _max?: ContributorMaxOrderByAggregateInput
    _min?: ContributorMinOrderByAggregateInput
    _sum?: ContributorSumOrderByAggregateInput
  }

  export type ContributorScalarWhereWithAggregatesInput = {
    AND?: ContributorScalarWhereWithAggregatesInput | ContributorScalarWhereWithAggregatesInput[]
    OR?: ContributorScalarWhereWithAggregatesInput[]
    NOT?: ContributorScalarWhereWithAggregatesInput | ContributorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contributor"> | number
    name?: StringWithAggregatesFilter<"Contributor"> | string
    link?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    share?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    picture_small?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    picture_medium?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    picture_big?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    picture_xl?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    radio?: BoolNullableWithAggregatesFilter<"Contributor"> | boolean | null
    tracklist?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    type?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    role?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
    artistId?: IntNullableWithAggregatesFilter<"Contributor"> | number | null
    albumId?: IntNullableWithAggregatesFilter<"Contributor"> | number | null
    trackId?: IntNullableWithAggregatesFilter<"Contributor"> | number | null
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    picture?: StringNullableFilter<"Genre"> | string | null
    picture_small?: StringNullableFilter<"Genre"> | string | null
    picture_medium?: StringNullableFilter<"Genre"> | string | null
    picture_big?: StringNullableFilter<"Genre"> | string | null
    picture_xl?: StringNullableFilter<"Genre"> | string | null
    albums?: AlbumListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrderInput | SortOrder
    picture_small?: SortOrderInput | SortOrder
    picture_medium?: SortOrderInput | SortOrder
    picture_big?: SortOrderInput | SortOrder
    picture_xl?: SortOrderInput | SortOrder
    albums?: AlbumOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringFilter<"Genre"> | string
    picture?: StringNullableFilter<"Genre"> | string | null
    picture_small?: StringNullableFilter<"Genre"> | string | null
    picture_medium?: StringNullableFilter<"Genre"> | string | null
    picture_big?: StringNullableFilter<"Genre"> | string | null
    picture_xl?: StringNullableFilter<"Genre"> | string | null
    albums?: AlbumListRelationFilter
  }, "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrderInput | SortOrder
    picture_small?: SortOrderInput | SortOrder
    picture_medium?: SortOrderInput | SortOrder
    picture_big?: SortOrderInput | SortOrder
    picture_xl?: SortOrderInput | SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
    picture?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    picture_small?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    picture_medium?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    picture_big?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    picture_xl?: StringNullableWithAggregatesFilter<"Genre"> | string | null
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    upc?: StringNullableFilter<"Album"> | string | null
    link?: StringNullableFilter<"Album"> | string | null
    share?: StringNullableFilter<"Album"> | string | null
    cover?: StringNullableFilter<"Album"> | string | null
    cover_small?: StringNullableFilter<"Album"> | string | null
    cover_medium?: StringNullableFilter<"Album"> | string | null
    cover_big?: StringNullableFilter<"Album"> | string | null
    cover_xl?: StringNullableFilter<"Album"> | string | null
    md5_image?: StringNullableFilter<"Album"> | string | null
    genre_id?: IntNullableFilter<"Album"> | number | null
    label?: StringNullableFilter<"Album"> | string | null
    nb_tracks?: IntNullableFilter<"Album"> | number | null
    duration?: IntNullableFilter<"Album"> | number | null
    fans?: IntNullableFilter<"Album"> | number | null
    release_date?: StringNullableFilter<"Album"> | string | null
    record_type?: StringNullableFilter<"Album"> | string | null
    available?: BoolNullableFilter<"Album"> | boolean | null
    tracklist?: StringNullableFilter<"Album"> | string | null
    explicit_lyrics?: BoolNullableFilter<"Album"> | boolean | null
    explicit_content_lyrics?: IntNullableFilter<"Album"> | number | null
    explicit_content_cover?: IntNullableFilter<"Album"> | number | null
    type?: StringNullableFilter<"Album"> | string | null
    artistId?: IntNullableFilter<"Album"> | number | null
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    genres?: GenreListRelationFilter
    contributors?: ContributorListRelationFilter
    tracks?: TrackListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    upc?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    cover_small?: SortOrderInput | SortOrder
    cover_medium?: SortOrderInput | SortOrder
    cover_big?: SortOrderInput | SortOrder
    cover_xl?: SortOrderInput | SortOrder
    md5_image?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    nb_tracks?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    fans?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    record_type?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    tracklist?: SortOrderInput | SortOrder
    explicit_lyrics?: SortOrderInput | SortOrder
    explicit_content_lyrics?: SortOrderInput | SortOrder
    explicit_content_cover?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    artist?: ArtistOrderByWithRelationInput
    genres?: GenreOrderByRelationAggregateInput
    contributors?: ContributorOrderByRelationAggregateInput
    tracks?: TrackOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    upc?: StringNullableFilter<"Album"> | string | null
    link?: StringNullableFilter<"Album"> | string | null
    share?: StringNullableFilter<"Album"> | string | null
    cover?: StringNullableFilter<"Album"> | string | null
    cover_small?: StringNullableFilter<"Album"> | string | null
    cover_medium?: StringNullableFilter<"Album"> | string | null
    cover_big?: StringNullableFilter<"Album"> | string | null
    cover_xl?: StringNullableFilter<"Album"> | string | null
    md5_image?: StringNullableFilter<"Album"> | string | null
    genre_id?: IntNullableFilter<"Album"> | number | null
    label?: StringNullableFilter<"Album"> | string | null
    nb_tracks?: IntNullableFilter<"Album"> | number | null
    duration?: IntNullableFilter<"Album"> | number | null
    fans?: IntNullableFilter<"Album"> | number | null
    release_date?: StringNullableFilter<"Album"> | string | null
    record_type?: StringNullableFilter<"Album"> | string | null
    available?: BoolNullableFilter<"Album"> | boolean | null
    tracklist?: StringNullableFilter<"Album"> | string | null
    explicit_lyrics?: BoolNullableFilter<"Album"> | boolean | null
    explicit_content_lyrics?: IntNullableFilter<"Album"> | number | null
    explicit_content_cover?: IntNullableFilter<"Album"> | number | null
    type?: StringNullableFilter<"Album"> | string | null
    artistId?: IntNullableFilter<"Album"> | number | null
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    genres?: GenreListRelationFilter
    contributors?: ContributorListRelationFilter
    tracks?: TrackListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    upc?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    cover_small?: SortOrderInput | SortOrder
    cover_medium?: SortOrderInput | SortOrder
    cover_big?: SortOrderInput | SortOrder
    cover_xl?: SortOrderInput | SortOrder
    md5_image?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    nb_tracks?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    fans?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    record_type?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    tracklist?: SortOrderInput | SortOrder
    explicit_lyrics?: SortOrderInput | SortOrder
    explicit_content_lyrics?: SortOrderInput | SortOrder
    explicit_content_cover?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    title?: StringWithAggregatesFilter<"Album"> | string
    upc?: StringNullableWithAggregatesFilter<"Album"> | string | null
    link?: StringNullableWithAggregatesFilter<"Album"> | string | null
    share?: StringNullableWithAggregatesFilter<"Album"> | string | null
    cover?: StringNullableWithAggregatesFilter<"Album"> | string | null
    cover_small?: StringNullableWithAggregatesFilter<"Album"> | string | null
    cover_medium?: StringNullableWithAggregatesFilter<"Album"> | string | null
    cover_big?: StringNullableWithAggregatesFilter<"Album"> | string | null
    cover_xl?: StringNullableWithAggregatesFilter<"Album"> | string | null
    md5_image?: StringNullableWithAggregatesFilter<"Album"> | string | null
    genre_id?: IntNullableWithAggregatesFilter<"Album"> | number | null
    label?: StringNullableWithAggregatesFilter<"Album"> | string | null
    nb_tracks?: IntNullableWithAggregatesFilter<"Album"> | number | null
    duration?: IntNullableWithAggregatesFilter<"Album"> | number | null
    fans?: IntNullableWithAggregatesFilter<"Album"> | number | null
    release_date?: StringNullableWithAggregatesFilter<"Album"> | string | null
    record_type?: StringNullableWithAggregatesFilter<"Album"> | string | null
    available?: BoolNullableWithAggregatesFilter<"Album"> | boolean | null
    tracklist?: StringNullableWithAggregatesFilter<"Album"> | string | null
    explicit_lyrics?: BoolNullableWithAggregatesFilter<"Album"> | boolean | null
    explicit_content_lyrics?: IntNullableWithAggregatesFilter<"Album"> | number | null
    explicit_content_cover?: IntNullableWithAggregatesFilter<"Album"> | number | null
    type?: StringNullableWithAggregatesFilter<"Album"> | string | null
    artistId?: IntNullableWithAggregatesFilter<"Album"> | number | null
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: IntFilter<"Track"> | number
    readable?: BoolNullableFilter<"Track"> | boolean | null
    title?: StringFilter<"Track"> | string
    title_short?: StringNullableFilter<"Track"> | string | null
    title_version?: StringNullableFilter<"Track"> | string | null
    isrc?: StringNullableFilter<"Track"> | string | null
    link?: StringNullableFilter<"Track"> | string | null
    share?: StringNullableFilter<"Track"> | string | null
    duration?: IntNullableFilter<"Track"> | number | null
    track_position?: IntNullableFilter<"Track"> | number | null
    disk_number?: IntNullableFilter<"Track"> | number | null
    rank?: IntNullableFilter<"Track"> | number | null
    release_date?: StringNullableFilter<"Track"> | string | null
    explicit_lyrics?: BoolNullableFilter<"Track"> | boolean | null
    explicit_content_lyrics?: IntNullableFilter<"Track"> | number | null
    explicit_content_cover?: IntNullableFilter<"Track"> | number | null
    preview?: StringNullableFilter<"Track"> | string | null
    bpm?: FloatNullableFilter<"Track"> | number | null
    gain?: FloatNullableFilter<"Track"> | number | null
    md5_image?: StringNullableFilter<"Track"> | string | null
    track_token?: StringNullableFilter<"Track"> | string | null
    type?: StringNullableFilter<"Track"> | string | null
    available_countries?: JsonNullableFilter<"Track">
    artistId?: IntNullableFilter<"Track"> | number | null
    albumId?: IntNullableFilter<"Track"> | number | null
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    contributors?: ContributorListRelationFilter
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    readable?: SortOrderInput | SortOrder
    title?: SortOrder
    title_short?: SortOrderInput | SortOrder
    title_version?: SortOrderInput | SortOrder
    isrc?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    track_position?: SortOrderInput | SortOrder
    disk_number?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    explicit_lyrics?: SortOrderInput | SortOrder
    explicit_content_lyrics?: SortOrderInput | SortOrder
    explicit_content_cover?: SortOrderInput | SortOrder
    preview?: SortOrderInput | SortOrder
    bpm?: SortOrderInput | SortOrder
    gain?: SortOrderInput | SortOrder
    md5_image?: SortOrderInput | SortOrder
    track_token?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    available_countries?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    artist?: ArtistOrderByWithRelationInput
    album?: AlbumOrderByWithRelationInput
    contributors?: ContributorOrderByRelationAggregateInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    readable?: BoolNullableFilter<"Track"> | boolean | null
    title?: StringFilter<"Track"> | string
    title_short?: StringNullableFilter<"Track"> | string | null
    title_version?: StringNullableFilter<"Track"> | string | null
    isrc?: StringNullableFilter<"Track"> | string | null
    link?: StringNullableFilter<"Track"> | string | null
    share?: StringNullableFilter<"Track"> | string | null
    duration?: IntNullableFilter<"Track"> | number | null
    track_position?: IntNullableFilter<"Track"> | number | null
    disk_number?: IntNullableFilter<"Track"> | number | null
    rank?: IntNullableFilter<"Track"> | number | null
    release_date?: StringNullableFilter<"Track"> | string | null
    explicit_lyrics?: BoolNullableFilter<"Track"> | boolean | null
    explicit_content_lyrics?: IntNullableFilter<"Track"> | number | null
    explicit_content_cover?: IntNullableFilter<"Track"> | number | null
    preview?: StringNullableFilter<"Track"> | string | null
    bpm?: FloatNullableFilter<"Track"> | number | null
    gain?: FloatNullableFilter<"Track"> | number | null
    md5_image?: StringNullableFilter<"Track"> | string | null
    track_token?: StringNullableFilter<"Track"> | string | null
    type?: StringNullableFilter<"Track"> | string | null
    available_countries?: JsonNullableFilter<"Track">
    artistId?: IntNullableFilter<"Track"> | number | null
    albumId?: IntNullableFilter<"Track"> | number | null
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    contributors?: ContributorListRelationFilter
  }, "id">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    readable?: SortOrderInput | SortOrder
    title?: SortOrder
    title_short?: SortOrderInput | SortOrder
    title_version?: SortOrderInput | SortOrder
    isrc?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    share?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    track_position?: SortOrderInput | SortOrder
    disk_number?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    explicit_lyrics?: SortOrderInput | SortOrder
    explicit_content_lyrics?: SortOrderInput | SortOrder
    explicit_content_cover?: SortOrderInput | SortOrder
    preview?: SortOrderInput | SortOrder
    bpm?: SortOrderInput | SortOrder
    gain?: SortOrderInput | SortOrder
    md5_image?: SortOrderInput | SortOrder
    track_token?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    available_countries?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Track"> | number
    readable?: BoolNullableWithAggregatesFilter<"Track"> | boolean | null
    title?: StringWithAggregatesFilter<"Track"> | string
    title_short?: StringNullableWithAggregatesFilter<"Track"> | string | null
    title_version?: StringNullableWithAggregatesFilter<"Track"> | string | null
    isrc?: StringNullableWithAggregatesFilter<"Track"> | string | null
    link?: StringNullableWithAggregatesFilter<"Track"> | string | null
    share?: StringNullableWithAggregatesFilter<"Track"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Track"> | number | null
    track_position?: IntNullableWithAggregatesFilter<"Track"> | number | null
    disk_number?: IntNullableWithAggregatesFilter<"Track"> | number | null
    rank?: IntNullableWithAggregatesFilter<"Track"> | number | null
    release_date?: StringNullableWithAggregatesFilter<"Track"> | string | null
    explicit_lyrics?: BoolNullableWithAggregatesFilter<"Track"> | boolean | null
    explicit_content_lyrics?: IntNullableWithAggregatesFilter<"Track"> | number | null
    explicit_content_cover?: IntNullableWithAggregatesFilter<"Track"> | number | null
    preview?: StringNullableWithAggregatesFilter<"Track"> | string | null
    bpm?: FloatNullableWithAggregatesFilter<"Track"> | number | null
    gain?: FloatNullableWithAggregatesFilter<"Track"> | number | null
    md5_image?: StringNullableWithAggregatesFilter<"Track"> | string | null
    track_token?: StringNullableWithAggregatesFilter<"Track"> | string | null
    type?: StringNullableWithAggregatesFilter<"Track"> | string | null
    available_countries?: JsonNullableWithAggregatesFilter<"Track">
    artistId?: IntNullableWithAggregatesFilter<"Track"> | number | null
    albumId?: IntNullableWithAggregatesFilter<"Track"> | number | null
  }

  export type ArtistCreateInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    albums?: AlbumCreateNestedManyWithoutArtistInput
    tracks?: TrackCreateNestedManyWithoutArtistInput
    contributors?: ContributorCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    tracks?: TrackUncheckedCreateNestedManyWithoutArtistInput
    contributors?: ContributorUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    tracks?: TrackUpdateManyWithoutArtistNestedInput
    contributors?: ContributorUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutArtistNestedInput
    contributors?: ContributorUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContributorCreateInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artist?: ArtistCreateNestedOneWithoutContributorsInput
    album?: AlbumCreateNestedOneWithoutContributorsInput
    track?: TrackCreateNestedOneWithoutContributorsInput
  }

  export type ContributorUncheckedCreateInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artistId?: number | null
    albumId?: number | null
    trackId?: number | null
  }

  export type ContributorUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneWithoutContributorsNestedInput
    album?: AlbumUpdateOneWithoutContributorsNestedInput
    track?: TrackUpdateOneWithoutContributorsNestedInput
  }

  export type ContributorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    trackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContributorCreateManyInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artistId?: number | null
    albumId?: number | null
    trackId?: number | null
  }

  export type ContributorUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContributorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    trackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GenreCreateInput = {
    id: number
    name: string
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    albums?: AlbumCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id: number
    name: string
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    albums?: AlbumUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id: number
    name: string
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
  }

  export type GenreUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumCreateInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    genres?: GenreCreateNestedManyWithoutAlbumsInput
    contributors?: ContributorCreateNestedManyWithoutAlbumInput
    tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artistId?: number | null
    genres?: GenreUncheckedCreateNestedManyWithoutAlbumsInput
    contributors?: ContributorUncheckedCreateNestedManyWithoutAlbumInput
    tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    genres?: GenreUpdateManyWithoutAlbumsNestedInput
    contributors?: ContributorUpdateManyWithoutAlbumNestedInput
    tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    genres?: GenreUncheckedUpdateManyWithoutAlbumsNestedInput
    contributors?: ContributorUncheckedUpdateManyWithoutAlbumNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artistId?: number | null
  }

  export type AlbumUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrackCreateInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artist?: ArtistCreateNestedOneWithoutTracksInput
    album?: AlbumCreateNestedOneWithoutTracksInput
    contributors?: ContributorCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: number | null
    albumId?: number | null
    contributors?: ContributorUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artist?: ArtistUpdateOneWithoutTracksNestedInput
    album?: AlbumUpdateOneWithoutTracksNestedInput
    contributors?: ContributorUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: ContributorUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: number | null
    albumId?: number | null
  }

  export type TrackUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type ContributorListRelationFilter = {
    every?: ContributorWhereInput
    some?: ContributorWhereInput
    none?: ContributorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContributorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    share?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
    radio?: SortOrder
    tracklist?: SortOrder
    type?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    share?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
    radio?: SortOrder
    tracklist?: SortOrder
    type?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    share?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
    radio?: SortOrder
    tracklist?: SortOrder
    type?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArtistNullableScalarRelationFilter = {
    is?: ArtistWhereInput | null
    isNot?: ArtistWhereInput | null
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type TrackNullableScalarRelationFilter = {
    is?: TrackWhereInput | null
    isNot?: TrackWhereInput | null
  }

  export type ContributorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    share?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
    radio?: SortOrder
    tracklist?: SortOrder
    type?: SortOrder
    role?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type ContributorAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type ContributorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    share?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
    radio?: SortOrder
    tracklist?: SortOrder
    type?: SortOrder
    role?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type ContributorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    share?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
    radio?: SortOrder
    tracklist?: SortOrder
    type?: SortOrder
    role?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type ContributorSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    picture_small?: SortOrder
    picture_medium?: SortOrder
    picture_big?: SortOrder
    picture_xl?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    upc?: SortOrder
    link?: SortOrder
    share?: SortOrder
    cover?: SortOrder
    cover_small?: SortOrder
    cover_medium?: SortOrder
    cover_big?: SortOrder
    cover_xl?: SortOrder
    md5_image?: SortOrder
    genre_id?: SortOrder
    label?: SortOrder
    nb_tracks?: SortOrder
    duration?: SortOrder
    fans?: SortOrder
    release_date?: SortOrder
    record_type?: SortOrder
    available?: SortOrder
    tracklist?: SortOrder
    explicit_lyrics?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    type?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    genre_id?: SortOrder
    nb_tracks?: SortOrder
    duration?: SortOrder
    fans?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    upc?: SortOrder
    link?: SortOrder
    share?: SortOrder
    cover?: SortOrder
    cover_small?: SortOrder
    cover_medium?: SortOrder
    cover_big?: SortOrder
    cover_xl?: SortOrder
    md5_image?: SortOrder
    genre_id?: SortOrder
    label?: SortOrder
    nb_tracks?: SortOrder
    duration?: SortOrder
    fans?: SortOrder
    release_date?: SortOrder
    record_type?: SortOrder
    available?: SortOrder
    tracklist?: SortOrder
    explicit_lyrics?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    type?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    upc?: SortOrder
    link?: SortOrder
    share?: SortOrder
    cover?: SortOrder
    cover_small?: SortOrder
    cover_medium?: SortOrder
    cover_big?: SortOrder
    cover_xl?: SortOrder
    md5_image?: SortOrder
    genre_id?: SortOrder
    label?: SortOrder
    nb_tracks?: SortOrder
    duration?: SortOrder
    fans?: SortOrder
    release_date?: SortOrder
    record_type?: SortOrder
    available?: SortOrder
    tracklist?: SortOrder
    explicit_lyrics?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    type?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    genre_id?: SortOrder
    nb_tracks?: SortOrder
    duration?: SortOrder
    fans?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    artistId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    readable?: SortOrder
    title?: SortOrder
    title_short?: SortOrder
    title_version?: SortOrder
    isrc?: SortOrder
    link?: SortOrder
    share?: SortOrder
    duration?: SortOrder
    track_position?: SortOrder
    disk_number?: SortOrder
    rank?: SortOrder
    release_date?: SortOrder
    explicit_lyrics?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    preview?: SortOrder
    bpm?: SortOrder
    gain?: SortOrder
    md5_image?: SortOrder
    track_token?: SortOrder
    type?: SortOrder
    available_countries?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    track_position?: SortOrder
    disk_number?: SortOrder
    rank?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    bpm?: SortOrder
    gain?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    readable?: SortOrder
    title?: SortOrder
    title_short?: SortOrder
    title_version?: SortOrder
    isrc?: SortOrder
    link?: SortOrder
    share?: SortOrder
    duration?: SortOrder
    track_position?: SortOrder
    disk_number?: SortOrder
    rank?: SortOrder
    release_date?: SortOrder
    explicit_lyrics?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    preview?: SortOrder
    bpm?: SortOrder
    gain?: SortOrder
    md5_image?: SortOrder
    track_token?: SortOrder
    type?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    readable?: SortOrder
    title?: SortOrder
    title_short?: SortOrder
    title_version?: SortOrder
    isrc?: SortOrder
    link?: SortOrder
    share?: SortOrder
    duration?: SortOrder
    track_position?: SortOrder
    disk_number?: SortOrder
    rank?: SortOrder
    release_date?: SortOrder
    explicit_lyrics?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    preview?: SortOrder
    bpm?: SortOrder
    gain?: SortOrder
    md5_image?: SortOrder
    track_token?: SortOrder
    type?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    track_position?: SortOrder
    disk_number?: SortOrder
    rank?: SortOrder
    explicit_content_lyrics?: SortOrder
    explicit_content_cover?: SortOrder
    bpm?: SortOrder
    gain?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type TrackCreateNestedManyWithoutArtistInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type ContributorCreateNestedManyWithoutArtistInput = {
    create?: XOR<ContributorCreateWithoutArtistInput, ContributorUncheckedCreateWithoutArtistInput> | ContributorCreateWithoutArtistInput[] | ContributorUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutArtistInput | ContributorCreateOrConnectWithoutArtistInput[]
    createMany?: ContributorCreateManyArtistInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type ContributorUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ContributorCreateWithoutArtistInput, ContributorUncheckedCreateWithoutArtistInput> | ContributorCreateWithoutArtistInput[] | ContributorUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutArtistInput | ContributorCreateOrConnectWithoutArtistInput[]
    createMany?: ContributorCreateManyArtistInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type TrackUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutArtistInput | TrackUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutArtistInput | TrackUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutArtistInput | TrackUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type ContributorUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ContributorCreateWithoutArtistInput, ContributorUncheckedCreateWithoutArtistInput> | ContributorCreateWithoutArtistInput[] | ContributorUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutArtistInput | ContributorCreateOrConnectWithoutArtistInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutArtistInput | ContributorUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ContributorCreateManyArtistInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutArtistInput | ContributorUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutArtistInput | ContributorUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutArtistInput | TrackUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutArtistInput | TrackUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutArtistInput | TrackUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type ContributorUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ContributorCreateWithoutArtistInput, ContributorUncheckedCreateWithoutArtistInput> | ContributorCreateWithoutArtistInput[] | ContributorUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutArtistInput | ContributorCreateOrConnectWithoutArtistInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutArtistInput | ContributorUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ContributorCreateManyArtistInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutArtistInput | ContributorUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutArtistInput | ContributorUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutContributorsInput = {
    create?: XOR<ArtistCreateWithoutContributorsInput, ArtistUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutContributorsInput
    connect?: ArtistWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutContributorsInput = {
    create?: XOR<AlbumCreateWithoutContributorsInput, AlbumUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutContributorsInput
    connect?: AlbumWhereUniqueInput
  }

  export type TrackCreateNestedOneWithoutContributorsInput = {
    create?: XOR<TrackCreateWithoutContributorsInput, TrackUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutContributorsInput
    connect?: TrackWhereUniqueInput
  }

  export type ArtistUpdateOneWithoutContributorsNestedInput = {
    create?: XOR<ArtistCreateWithoutContributorsInput, ArtistUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutContributorsInput
    upsert?: ArtistUpsertWithoutContributorsInput
    disconnect?: ArtistWhereInput | boolean
    delete?: ArtistWhereInput | boolean
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutContributorsInput, ArtistUpdateWithoutContributorsInput>, ArtistUncheckedUpdateWithoutContributorsInput>
  }

  export type AlbumUpdateOneWithoutContributorsNestedInput = {
    create?: XOR<AlbumCreateWithoutContributorsInput, AlbumUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutContributorsInput
    upsert?: AlbumUpsertWithoutContributorsInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutContributorsInput, AlbumUpdateWithoutContributorsInput>, AlbumUncheckedUpdateWithoutContributorsInput>
  }

  export type TrackUpdateOneWithoutContributorsNestedInput = {
    create?: XOR<TrackCreateWithoutContributorsInput, TrackUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutContributorsInput
    upsert?: TrackUpsertWithoutContributorsInput
    disconnect?: TrackWhereInput | boolean
    delete?: TrackWhereInput | boolean
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutContributorsInput, TrackUpdateWithoutContributorsInput>, TrackUncheckedUpdateWithoutContributorsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlbumCreateNestedManyWithoutGenresInput = {
    create?: XOR<AlbumCreateWithoutGenresInput, AlbumUncheckedCreateWithoutGenresInput> | AlbumCreateWithoutGenresInput[] | AlbumUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenresInput | AlbumCreateOrConnectWithoutGenresInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<AlbumCreateWithoutGenresInput, AlbumUncheckedCreateWithoutGenresInput> | AlbumCreateWithoutGenresInput[] | AlbumUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenresInput | AlbumCreateOrConnectWithoutGenresInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AlbumCreateWithoutGenresInput, AlbumUncheckedCreateWithoutGenresInput> | AlbumCreateWithoutGenresInput[] | AlbumUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenresInput | AlbumCreateOrConnectWithoutGenresInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutGenresInput | AlbumUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutGenresInput | AlbumUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutGenresInput | AlbumUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AlbumCreateWithoutGenresInput, AlbumUncheckedCreateWithoutGenresInput> | AlbumCreateWithoutGenresInput[] | AlbumUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenresInput | AlbumCreateOrConnectWithoutGenresInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutGenresInput | AlbumUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutGenresInput | AlbumUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutGenresInput | AlbumUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    connect?: ArtistWhereUniqueInput
  }

  export type GenreCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput> | GenreCreateWithoutAlbumsInput[] | GenreUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput | GenreCreateOrConnectWithoutAlbumsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type ContributorCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ContributorCreateWithoutAlbumInput, ContributorUncheckedCreateWithoutAlbumInput> | ContributorCreateWithoutAlbumInput[] | ContributorUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutAlbumInput | ContributorCreateOrConnectWithoutAlbumInput[]
    createMany?: ContributorCreateManyAlbumInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type TrackCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput> | GenreCreateWithoutAlbumsInput[] | GenreUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput | GenreCreateOrConnectWithoutAlbumsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type ContributorUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ContributorCreateWithoutAlbumInput, ContributorUncheckedCreateWithoutAlbumInput> | ContributorCreateWithoutAlbumInput[] | ContributorUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutAlbumInput | ContributorCreateOrConnectWithoutAlbumInput[]
    createMany?: ContributorCreateManyAlbumInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type ArtistUpdateOneWithoutAlbumsNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistUpsertWithoutAlbumsInput
    disconnect?: ArtistWhereInput | boolean
    delete?: ArtistWhereInput | boolean
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumsInput, ArtistUpdateWithoutAlbumsInput>, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type GenreUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput> | GenreCreateWithoutAlbumsInput[] | GenreUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput | GenreCreateOrConnectWithoutAlbumsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutAlbumsInput | GenreUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutAlbumsInput | GenreUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutAlbumsInput | GenreUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type ContributorUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ContributorCreateWithoutAlbumInput, ContributorUncheckedCreateWithoutAlbumInput> | ContributorCreateWithoutAlbumInput[] | ContributorUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutAlbumInput | ContributorCreateOrConnectWithoutAlbumInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutAlbumInput | ContributorUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ContributorCreateManyAlbumInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutAlbumInput | ContributorUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutAlbumInput | ContributorUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
  }

  export type TrackUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAlbumInput | TrackUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAlbumInput | TrackUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAlbumInput | TrackUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput> | GenreCreateWithoutAlbumsInput[] | GenreUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput | GenreCreateOrConnectWithoutAlbumsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutAlbumsInput | GenreUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutAlbumsInput | GenreUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutAlbumsInput | GenreUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type ContributorUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ContributorCreateWithoutAlbumInput, ContributorUncheckedCreateWithoutAlbumInput> | ContributorCreateWithoutAlbumInput[] | ContributorUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutAlbumInput | ContributorCreateOrConnectWithoutAlbumInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutAlbumInput | ContributorUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ContributorCreateManyAlbumInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutAlbumInput | ContributorUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutAlbumInput | ContributorUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAlbumInput | TrackUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAlbumInput | TrackUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAlbumInput | TrackUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutTracksInput = {
    create?: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTracksInput
    connect?: ArtistWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutTracksInput = {
    create?: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput
    connect?: AlbumWhereUniqueInput
  }

  export type ContributorCreateNestedManyWithoutTrackInput = {
    create?: XOR<ContributorCreateWithoutTrackInput, ContributorUncheckedCreateWithoutTrackInput> | ContributorCreateWithoutTrackInput[] | ContributorUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutTrackInput | ContributorCreateOrConnectWithoutTrackInput[]
    createMany?: ContributorCreateManyTrackInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type ContributorUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<ContributorCreateWithoutTrackInput, ContributorUncheckedCreateWithoutTrackInput> | ContributorCreateWithoutTrackInput[] | ContributorUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutTrackInput | ContributorCreateOrConnectWithoutTrackInput[]
    createMany?: ContributorCreateManyTrackInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArtistUpdateOneWithoutTracksNestedInput = {
    create?: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTracksInput
    upsert?: ArtistUpsertWithoutTracksInput
    disconnect?: ArtistWhereInput | boolean
    delete?: ArtistWhereInput | boolean
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutTracksInput, ArtistUpdateWithoutTracksInput>, ArtistUncheckedUpdateWithoutTracksInput>
  }

  export type AlbumUpdateOneWithoutTracksNestedInput = {
    create?: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput
    upsert?: AlbumUpsertWithoutTracksInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutTracksInput, AlbumUpdateWithoutTracksInput>, AlbumUncheckedUpdateWithoutTracksInput>
  }

  export type ContributorUpdateManyWithoutTrackNestedInput = {
    create?: XOR<ContributorCreateWithoutTrackInput, ContributorUncheckedCreateWithoutTrackInput> | ContributorCreateWithoutTrackInput[] | ContributorUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutTrackInput | ContributorCreateOrConnectWithoutTrackInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutTrackInput | ContributorUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: ContributorCreateManyTrackInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutTrackInput | ContributorUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutTrackInput | ContributorUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
  }

  export type ContributorUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<ContributorCreateWithoutTrackInput, ContributorUncheckedCreateWithoutTrackInput> | ContributorCreateWithoutTrackInput[] | ContributorUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutTrackInput | ContributorCreateOrConnectWithoutTrackInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutTrackInput | ContributorUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: ContributorCreateManyTrackInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutTrackInput | ContributorUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutTrackInput | ContributorUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AlbumCreateWithoutArtistInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    genres?: GenreCreateNestedManyWithoutAlbumsInput
    contributors?: ContributorCreateNestedManyWithoutAlbumInput
    tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutAlbumsInput
    contributors?: ContributorUncheckedCreateNestedManyWithoutAlbumInput
    tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
  }

  export type TrackCreateWithoutArtistInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    album?: AlbumCreateNestedOneWithoutTracksInput
    contributors?: ContributorCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutArtistInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    albumId?: number | null
    contributors?: ContributorUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutArtistInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput>
  }

  export type TrackCreateManyArtistInputEnvelope = {
    data: TrackCreateManyArtistInput | TrackCreateManyArtistInput[]
  }

  export type ContributorCreateWithoutArtistInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    album?: AlbumCreateNestedOneWithoutContributorsInput
    track?: TrackCreateNestedOneWithoutContributorsInput
  }

  export type ContributorUncheckedCreateWithoutArtistInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    albumId?: number | null
    trackId?: number | null
  }

  export type ContributorCreateOrConnectWithoutArtistInput = {
    where: ContributorWhereUniqueInput
    create: XOR<ContributorCreateWithoutArtistInput, ContributorUncheckedCreateWithoutArtistInput>
  }

  export type ContributorCreateManyArtistInputEnvelope = {
    data: ContributorCreateManyArtistInput | ContributorCreateManyArtistInput[]
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    upc?: StringNullableFilter<"Album"> | string | null
    link?: StringNullableFilter<"Album"> | string | null
    share?: StringNullableFilter<"Album"> | string | null
    cover?: StringNullableFilter<"Album"> | string | null
    cover_small?: StringNullableFilter<"Album"> | string | null
    cover_medium?: StringNullableFilter<"Album"> | string | null
    cover_big?: StringNullableFilter<"Album"> | string | null
    cover_xl?: StringNullableFilter<"Album"> | string | null
    md5_image?: StringNullableFilter<"Album"> | string | null
    genre_id?: IntNullableFilter<"Album"> | number | null
    label?: StringNullableFilter<"Album"> | string | null
    nb_tracks?: IntNullableFilter<"Album"> | number | null
    duration?: IntNullableFilter<"Album"> | number | null
    fans?: IntNullableFilter<"Album"> | number | null
    release_date?: StringNullableFilter<"Album"> | string | null
    record_type?: StringNullableFilter<"Album"> | string | null
    available?: BoolNullableFilter<"Album"> | boolean | null
    tracklist?: StringNullableFilter<"Album"> | string | null
    explicit_lyrics?: BoolNullableFilter<"Album"> | boolean | null
    explicit_content_lyrics?: IntNullableFilter<"Album"> | number | null
    explicit_content_cover?: IntNullableFilter<"Album"> | number | null
    type?: StringNullableFilter<"Album"> | string | null
    artistId?: IntNullableFilter<"Album"> | number | null
  }

  export type TrackUpsertWithWhereUniqueWithoutArtistInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutArtistInput, TrackUncheckedUpdateWithoutArtistInput>
    create: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutArtistInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutArtistInput, TrackUncheckedUpdateWithoutArtistInput>
  }

  export type TrackUpdateManyWithWhereWithoutArtistInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutArtistInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    id?: IntFilter<"Track"> | number
    readable?: BoolNullableFilter<"Track"> | boolean | null
    title?: StringFilter<"Track"> | string
    title_short?: StringNullableFilter<"Track"> | string | null
    title_version?: StringNullableFilter<"Track"> | string | null
    isrc?: StringNullableFilter<"Track"> | string | null
    link?: StringNullableFilter<"Track"> | string | null
    share?: StringNullableFilter<"Track"> | string | null
    duration?: IntNullableFilter<"Track"> | number | null
    track_position?: IntNullableFilter<"Track"> | number | null
    disk_number?: IntNullableFilter<"Track"> | number | null
    rank?: IntNullableFilter<"Track"> | number | null
    release_date?: StringNullableFilter<"Track"> | string | null
    explicit_lyrics?: BoolNullableFilter<"Track"> | boolean | null
    explicit_content_lyrics?: IntNullableFilter<"Track"> | number | null
    explicit_content_cover?: IntNullableFilter<"Track"> | number | null
    preview?: StringNullableFilter<"Track"> | string | null
    bpm?: FloatNullableFilter<"Track"> | number | null
    gain?: FloatNullableFilter<"Track"> | number | null
    md5_image?: StringNullableFilter<"Track"> | string | null
    track_token?: StringNullableFilter<"Track"> | string | null
    type?: StringNullableFilter<"Track"> | string | null
    available_countries?: JsonNullableFilter<"Track">
    artistId?: IntNullableFilter<"Track"> | number | null
    albumId?: IntNullableFilter<"Track"> | number | null
  }

  export type ContributorUpsertWithWhereUniqueWithoutArtistInput = {
    where: ContributorWhereUniqueInput
    update: XOR<ContributorUpdateWithoutArtistInput, ContributorUncheckedUpdateWithoutArtistInput>
    create: XOR<ContributorCreateWithoutArtistInput, ContributorUncheckedCreateWithoutArtistInput>
  }

  export type ContributorUpdateWithWhereUniqueWithoutArtistInput = {
    where: ContributorWhereUniqueInput
    data: XOR<ContributorUpdateWithoutArtistInput, ContributorUncheckedUpdateWithoutArtistInput>
  }

  export type ContributorUpdateManyWithWhereWithoutArtistInput = {
    where: ContributorScalarWhereInput
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyWithoutArtistInput>
  }

  export type ContributorScalarWhereInput = {
    AND?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
    OR?: ContributorScalarWhereInput[]
    NOT?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
    id?: IntFilter<"Contributor"> | number
    name?: StringFilter<"Contributor"> | string
    link?: StringNullableFilter<"Contributor"> | string | null
    share?: StringNullableFilter<"Contributor"> | string | null
    picture?: StringNullableFilter<"Contributor"> | string | null
    picture_small?: StringNullableFilter<"Contributor"> | string | null
    picture_medium?: StringNullableFilter<"Contributor"> | string | null
    picture_big?: StringNullableFilter<"Contributor"> | string | null
    picture_xl?: StringNullableFilter<"Contributor"> | string | null
    radio?: BoolNullableFilter<"Contributor"> | boolean | null
    tracklist?: StringNullableFilter<"Contributor"> | string | null
    type?: StringNullableFilter<"Contributor"> | string | null
    role?: StringNullableFilter<"Contributor"> | string | null
    artistId?: IntNullableFilter<"Contributor"> | number | null
    albumId?: IntNullableFilter<"Contributor"> | number | null
    trackId?: IntNullableFilter<"Contributor"> | number | null
  }

  export type ArtistCreateWithoutContributorsInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    albums?: AlbumCreateNestedManyWithoutArtistInput
    tracks?: TrackCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutContributorsInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    tracks?: TrackUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutContributorsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutContributorsInput, ArtistUncheckedCreateWithoutContributorsInput>
  }

  export type AlbumCreateWithoutContributorsInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    genres?: GenreCreateNestedManyWithoutAlbumsInput
    tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutContributorsInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artistId?: number | null
    genres?: GenreUncheckedCreateNestedManyWithoutAlbumsInput
    tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutContributorsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutContributorsInput, AlbumUncheckedCreateWithoutContributorsInput>
  }

  export type TrackCreateWithoutContributorsInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artist?: ArtistCreateNestedOneWithoutTracksInput
    album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutContributorsInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: number | null
    albumId?: number | null
  }

  export type TrackCreateOrConnectWithoutContributorsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutContributorsInput, TrackUncheckedCreateWithoutContributorsInput>
  }

  export type ArtistUpsertWithoutContributorsInput = {
    update: XOR<ArtistUpdateWithoutContributorsInput, ArtistUncheckedUpdateWithoutContributorsInput>
    create: XOR<ArtistCreateWithoutContributorsInput, ArtistUncheckedCreateWithoutContributorsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutContributorsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutContributorsInput, ArtistUncheckedUpdateWithoutContributorsInput>
  }

  export type ArtistUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    tracks?: TrackUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type AlbumUpsertWithoutContributorsInput = {
    update: XOR<AlbumUpdateWithoutContributorsInput, AlbumUncheckedUpdateWithoutContributorsInput>
    create: XOR<AlbumCreateWithoutContributorsInput, AlbumUncheckedCreateWithoutContributorsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutContributorsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutContributorsInput, AlbumUncheckedUpdateWithoutContributorsInput>
  }

  export type AlbumUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    genres?: GenreUpdateManyWithoutAlbumsNestedInput
    tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    genres?: GenreUncheckedUpdateManyWithoutAlbumsNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type TrackUpsertWithoutContributorsInput = {
    update: XOR<TrackUpdateWithoutContributorsInput, TrackUncheckedUpdateWithoutContributorsInput>
    create: XOR<TrackCreateWithoutContributorsInput, TrackUncheckedCreateWithoutContributorsInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutContributorsInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutContributorsInput, TrackUncheckedUpdateWithoutContributorsInput>
  }

  export type TrackUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artist?: ArtistUpdateOneWithoutTracksNestedInput
    album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlbumCreateWithoutGenresInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    contributors?: ContributorCreateNestedManyWithoutAlbumInput
    tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutGenresInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artistId?: number | null
    contributors?: ContributorUncheckedCreateNestedManyWithoutAlbumInput
    tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutGenresInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutGenresInput, AlbumUncheckedCreateWithoutGenresInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutGenresInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutGenresInput, AlbumUncheckedUpdateWithoutGenresInput>
    create: XOR<AlbumCreateWithoutGenresInput, AlbumUncheckedCreateWithoutGenresInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutGenresInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutGenresInput, AlbumUncheckedUpdateWithoutGenresInput>
  }

  export type AlbumUpdateManyWithWhereWithoutGenresInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutGenresInput>
  }

  export type ArtistCreateWithoutAlbumsInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    tracks?: TrackCreateNestedManyWithoutArtistInput
    contributors?: ContributorCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutAlbumsInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    tracks?: TrackUncheckedCreateNestedManyWithoutArtistInput
    contributors?: ContributorUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
  }

  export type GenreCreateWithoutAlbumsInput = {
    id: number
    name: string
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
  }

  export type GenreUncheckedCreateWithoutAlbumsInput = {
    id: number
    name: string
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
  }

  export type GenreCreateOrConnectWithoutAlbumsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
  }

  export type ContributorCreateWithoutAlbumInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artist?: ArtistCreateNestedOneWithoutContributorsInput
    track?: TrackCreateNestedOneWithoutContributorsInput
  }

  export type ContributorUncheckedCreateWithoutAlbumInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artistId?: number | null
    trackId?: number | null
  }

  export type ContributorCreateOrConnectWithoutAlbumInput = {
    where: ContributorWhereUniqueInput
    create: XOR<ContributorCreateWithoutAlbumInput, ContributorUncheckedCreateWithoutAlbumInput>
  }

  export type ContributorCreateManyAlbumInputEnvelope = {
    data: ContributorCreateManyAlbumInput | ContributorCreateManyAlbumInput[]
  }

  export type TrackCreateWithoutAlbumInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artist?: ArtistCreateNestedOneWithoutTracksInput
    contributors?: ContributorCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutAlbumInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: number | null
    contributors?: ContributorUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackCreateManyAlbumInputEnvelope = {
    data: TrackCreateManyAlbumInput | TrackCreateManyAlbumInput[]
  }

  export type ArtistUpsertWithoutAlbumsInput = {
    update: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TrackUpdateManyWithoutArtistNestedInput
    contributors?: ContributorUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TrackUncheckedUpdateManyWithoutArtistNestedInput
    contributors?: ContributorUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type GenreUpsertWithWhereUniqueWithoutAlbumsInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutAlbumsInput, GenreUncheckedUpdateWithoutAlbumsInput>
    create: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutAlbumsInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutAlbumsInput, GenreUncheckedUpdateWithoutAlbumsInput>
  }

  export type GenreUpdateManyWithWhereWithoutAlbumsInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    picture?: StringNullableFilter<"Genre"> | string | null
    picture_small?: StringNullableFilter<"Genre"> | string | null
    picture_medium?: StringNullableFilter<"Genre"> | string | null
    picture_big?: StringNullableFilter<"Genre"> | string | null
    picture_xl?: StringNullableFilter<"Genre"> | string | null
  }

  export type ContributorUpsertWithWhereUniqueWithoutAlbumInput = {
    where: ContributorWhereUniqueInput
    update: XOR<ContributorUpdateWithoutAlbumInput, ContributorUncheckedUpdateWithoutAlbumInput>
    create: XOR<ContributorCreateWithoutAlbumInput, ContributorUncheckedCreateWithoutAlbumInput>
  }

  export type ContributorUpdateWithWhereUniqueWithoutAlbumInput = {
    where: ContributorWhereUniqueInput
    data: XOR<ContributorUpdateWithoutAlbumInput, ContributorUncheckedUpdateWithoutAlbumInput>
  }

  export type ContributorUpdateManyWithWhereWithoutAlbumInput = {
    where: ContributorScalarWhereInput
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyWithoutAlbumInput>
  }

  export type TrackUpsertWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
  }

  export type TrackUpdateManyWithWhereWithoutAlbumInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ArtistCreateWithoutTracksInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    albums?: AlbumCreateNestedManyWithoutArtistInput
    contributors?: ContributorCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutTracksInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    contributors?: ContributorUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutTracksInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
  }

  export type AlbumCreateWithoutTracksInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    genres?: GenreCreateNestedManyWithoutAlbumsInput
    contributors?: ContributorCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutTracksInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
    artistId?: number | null
    genres?: GenreUncheckedCreateNestedManyWithoutAlbumsInput
    contributors?: ContributorUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutTracksInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
  }

  export type ContributorCreateWithoutTrackInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artist?: ArtistCreateNestedOneWithoutContributorsInput
    album?: AlbumCreateNestedOneWithoutContributorsInput
  }

  export type ContributorUncheckedCreateWithoutTrackInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artistId?: number | null
    albumId?: number | null
  }

  export type ContributorCreateOrConnectWithoutTrackInput = {
    where: ContributorWhereUniqueInput
    create: XOR<ContributorCreateWithoutTrackInput, ContributorUncheckedCreateWithoutTrackInput>
  }

  export type ContributorCreateManyTrackInputEnvelope = {
    data: ContributorCreateManyTrackInput | ContributorCreateManyTrackInput[]
  }

  export type ArtistUpsertWithoutTracksInput = {
    update: XOR<ArtistUpdateWithoutTracksInput, ArtistUncheckedUpdateWithoutTracksInput>
    create: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutTracksInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutTracksInput, ArtistUncheckedUpdateWithoutTracksInput>
  }

  export type ArtistUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    contributors?: ContributorUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    contributors?: ContributorUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type AlbumUpsertWithoutTracksInput = {
    update: XOR<AlbumUpdateWithoutTracksInput, AlbumUncheckedUpdateWithoutTracksInput>
    create: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutTracksInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutTracksInput, AlbumUncheckedUpdateWithoutTracksInput>
  }

  export type AlbumUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    genres?: GenreUpdateManyWithoutAlbumsNestedInput
    contributors?: ContributorUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    genres?: GenreUncheckedUpdateManyWithoutAlbumsNestedInput
    contributors?: ContributorUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type ContributorUpsertWithWhereUniqueWithoutTrackInput = {
    where: ContributorWhereUniqueInput
    update: XOR<ContributorUpdateWithoutTrackInput, ContributorUncheckedUpdateWithoutTrackInput>
    create: XOR<ContributorCreateWithoutTrackInput, ContributorUncheckedCreateWithoutTrackInput>
  }

  export type ContributorUpdateWithWhereUniqueWithoutTrackInput = {
    where: ContributorWhereUniqueInput
    data: XOR<ContributorUpdateWithoutTrackInput, ContributorUncheckedUpdateWithoutTrackInput>
  }

  export type ContributorUpdateManyWithWhereWithoutTrackInput = {
    where: ContributorScalarWhereInput
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyWithoutTrackInput>
  }

  export type AlbumCreateManyArtistInput = {
    id: number
    title: string
    upc?: string | null
    link?: string | null
    share?: string | null
    cover?: string | null
    cover_small?: string | null
    cover_medium?: string | null
    cover_big?: string | null
    cover_xl?: string | null
    md5_image?: string | null
    genre_id?: number | null
    label?: string | null
    nb_tracks?: number | null
    duration?: number | null
    fans?: number | null
    release_date?: string | null
    record_type?: string | null
    available?: boolean | null
    tracklist?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    type?: string | null
  }

  export type TrackCreateManyArtistInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    albumId?: number | null
  }

  export type ContributorCreateManyArtistInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    albumId?: number | null
    trackId?: number | null
  }

  export type AlbumUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutAlbumsNestedInput
    contributors?: ContributorUpdateManyWithoutAlbumNestedInput
    tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutAlbumsNestedInput
    contributors?: ContributorUncheckedUpdateManyWithoutAlbumNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    album?: AlbumUpdateOneWithoutTracksNestedInput
    contributors?: ContributorUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: ContributorUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContributorUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    album?: AlbumUpdateOneWithoutContributorsNestedInput
    track?: TrackUpdateOneWithoutContributorsNestedInput
  }

  export type ContributorUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    trackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContributorUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    trackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlbumUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    contributors?: ContributorUpdateManyWithoutAlbumNestedInput
    tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: ContributorUncheckedUpdateManyWithoutAlbumNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    cover_small?: NullableStringFieldUpdateOperationsInput | string | null
    cover_medium?: NullableStringFieldUpdateOperationsInput | string | null
    cover_big?: NullableStringFieldUpdateOperationsInput | string | null
    cover_xl?: NullableStringFieldUpdateOperationsInput | string | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    nb_tracks?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fans?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    record_type?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContributorCreateManyAlbumInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artistId?: number | null
    trackId?: number | null
  }

  export type TrackCreateManyAlbumInput = {
    id: number
    readable?: boolean | null
    title: string
    title_short?: string | null
    title_version?: string | null
    isrc?: string | null
    link?: string | null
    share?: string | null
    duration?: number | null
    track_position?: number | null
    disk_number?: number | null
    rank?: number | null
    release_date?: string | null
    explicit_lyrics?: boolean | null
    explicit_content_lyrics?: number | null
    explicit_content_cover?: number | null
    preview?: string | null
    bpm?: number | null
    gain?: number | null
    md5_image?: string | null
    track_token?: string | null
    type?: string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: number | null
  }

  export type GenreUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContributorUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneWithoutContributorsNestedInput
    track?: TrackUpdateOneWithoutContributorsNestedInput
  }

  export type ContributorUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    trackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContributorUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    trackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrackUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artist?: ArtistUpdateOneWithoutTracksNestedInput
    contributors?: ContributorUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: ContributorUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    readable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    title?: StringFieldUpdateOperationsInput | string
    title_short?: NullableStringFieldUpdateOperationsInput | string | null
    title_version?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    track_position?: NullableIntFieldUpdateOperationsInput | number | null
    disk_number?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    release_date?: NullableStringFieldUpdateOperationsInput | string | null
    explicit_lyrics?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explicit_content_lyrics?: NullableIntFieldUpdateOperationsInput | number | null
    explicit_content_cover?: NullableIntFieldUpdateOperationsInput | number | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableFloatFieldUpdateOperationsInput | number | null
    gain?: NullableFloatFieldUpdateOperationsInput | number | null
    md5_image?: NullableStringFieldUpdateOperationsInput | string | null
    track_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    available_countries?: NullableJsonNullValueInput | InputJsonValue
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContributorCreateManyTrackInput = {
    id: number
    name: string
    link?: string | null
    share?: string | null
    picture?: string | null
    picture_small?: string | null
    picture_medium?: string | null
    picture_big?: string | null
    picture_xl?: string | null
    radio?: boolean | null
    tracklist?: string | null
    type?: string | null
    role?: string | null
    artistId?: number | null
    albumId?: number | null
  }

  export type ContributorUpdateWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneWithoutContributorsNestedInput
    album?: AlbumUpdateOneWithoutContributorsNestedInput
  }

  export type ContributorUncheckedUpdateWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContributorUncheckedUpdateManyWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    share?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    picture_small?: NullableStringFieldUpdateOperationsInput | string | null
    picture_medium?: NullableStringFieldUpdateOperationsInput | string | null
    picture_big?: NullableStringFieldUpdateOperationsInput | string | null
    picture_xl?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tracklist?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
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