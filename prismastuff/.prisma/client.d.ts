
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
}

/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = {
  identifier: string
  token: string
  expires: Date
}

/**
 * Model Property
 * 
 */
export type Property = {
  id: string
  userId: string
  addressId: string
}

/**
 * Model Quote
 * 
 */
export type Quote = {
  id: string
  propertyId: string
}

/**
 * Model Bill
 * 
 */
export type Bill = {
  id: string
  monthly: number
  annual: number
  month: Month
  monthly_usage: number
  annual_usage: number
  customer_type: CustomerType
}

/**
 * Model Zip
 * 
 */
export type Zip = {
  id: string
  code: string
  city: string
  state: string
  netmetering: number
  commercial_rate: number
  residential_rate: number
  utility: string
  sunstate: number
  ppkwh_state: number
  solar_ppkwh_state: number
}

/**
 * Model Address
 * 
 */
export type Address = {
  id: string
  placeId: string
  street: string
  city: string
  state: string
  owner: string | null
  sunnumber: number | null
  roofspace: number | null
  squareFeet: number | null
  lotSize: number | null
  bedrooms: number | null
  value: number | null
  zipcode: string
  locationId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Location
 * 
 */
export type Location = {
  id: string
  lat: number
  lon: number
}

/**
 * Model SolarPanel
 * 
 */
export type SolarPanel = {
  id: string
  name: string
  model: string
  wattage: number
  efficiency: number
  rating: number
  degradation: number
  output25: number
  warranty: number
  imagePanel: string
  imageMounted: string | null
  ppwMarket: number
  material: string
  manufacturer: string
  energySageLink: string
  dimensionsId: string
  solarPanelColorsId: string
}

/**
 * Model Country
 * 
 */
export type Country = {
  id: string
  name: string
}

/**
 * Model Installer
 * 
 */
export type Installer = {
  id: string
  name: string
  image: string
  founded: Date
  license: string
}

/**
 * Model InstallerType
 * 
 */
export type InstallerType = {
  id: string
  type: InstallerTypeEnum
}

/**
 * Model InstallerReview
 * 
 */
export type InstallerReview = {
  id: string
  rating: number
}

/**
 * Model State
 * 
 */
export type State = {
  name: string
  abbreviation: string
}

/**
 * Model InstallerSolarPanel
 * 
 */
export type InstallerSolarPanel = {
  installerId: string
  solarPanelId: string
  cost: number
}

/**
 * Model Dimensions
 * 
 */
export type Dimensions = {
  id: string
  length: number
  width: number
  depth: number
}

/**
 * Model SolarPanelColors
 * 
 */
export type SolarPanelColors = {
  id: string
  cell: string
  frame: string
  backsheet: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const CustomerType: {
  COMMERCIAL: 'COMMERCIAL',
  RESIDENTIAL: 'RESIDENTIAL',
  RENTER: 'RENTER'
};

export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]


export const InstallerTypeEnum: {
  RESIDENTIAL: 'RESIDENTIAL',
  COMMERCIAL: 'COMMERCIAL',
  COMMUNITY: 'COMMUNITY'
};

export type InstallerTypeEnum = (typeof InstallerTypeEnum)[keyof typeof InstallerTypeEnum]


export const Month: {
  JANUARY: 'JANUARY',
  FEBRUARY: 'FEBRUARY',
  MARCH: 'MARCH',
  APRIL: 'APRIL',
  MAY: 'MAY',
  JUNE: 'JUNE',
  JULY: 'JULY',
  AUGUST: 'AUGUST',
  SEPTEMBER: 'SEPTEMBER',
  OCTOBER: 'OCTOBER',
  NOVEMBER: 'NOVEMBER',
  DECEMBER: 'DECEMBER'
};

export type Month = (typeof Month)[keyof typeof Month]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<GlobalReject>;

  /**
   * `prisma.quote`: Exposes CRUD operations for the **Quote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotes
    * const quotes = await prisma.quote.findMany()
    * ```
    */
  get quote(): Prisma.QuoteDelegate<GlobalReject>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<GlobalReject>;

  /**
   * `prisma.zip`: Exposes CRUD operations for the **Zip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zips
    * const zips = await prisma.zip.findMany()
    * ```
    */
  get zip(): Prisma.ZipDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<GlobalReject>;

  /**
   * `prisma.solarPanel`: Exposes CRUD operations for the **SolarPanel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolarPanels
    * const solarPanels = await prisma.solarPanel.findMany()
    * ```
    */
  get solarPanel(): Prisma.SolarPanelDelegate<GlobalReject>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<GlobalReject>;

  /**
   * `prisma.installer`: Exposes CRUD operations for the **Installer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Installers
    * const installers = await prisma.installer.findMany()
    * ```
    */
  get installer(): Prisma.InstallerDelegate<GlobalReject>;

  /**
   * `prisma.installerType`: Exposes CRUD operations for the **InstallerType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstallerTypes
    * const installerTypes = await prisma.installerType.findMany()
    * ```
    */
  get installerType(): Prisma.InstallerTypeDelegate<GlobalReject>;

  /**
   * `prisma.installerReview`: Exposes CRUD operations for the **InstallerReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstallerReviews
    * const installerReviews = await prisma.installerReview.findMany()
    * ```
    */
  get installerReview(): Prisma.InstallerReviewDelegate<GlobalReject>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<GlobalReject>;

  /**
   * `prisma.installerSolarPanel`: Exposes CRUD operations for the **InstallerSolarPanel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstallerSolarPanels
    * const installerSolarPanels = await prisma.installerSolarPanel.findMany()
    * ```
    */
  get installerSolarPanel(): Prisma.InstallerSolarPanelDelegate<GlobalReject>;

  /**
   * `prisma.dimensions`: Exposes CRUD operations for the **Dimensions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dimensions
    * const dimensions = await prisma.dimensions.findMany()
    * ```
    */
  get dimensions(): Prisma.DimensionsDelegate<GlobalReject>;

  /**
   * `prisma.solarPanelColors`: Exposes CRUD operations for the **SolarPanelColors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolarPanelColors
    * const solarPanelColors = await prisma.solarPanelColors.findMany()
    * ```
    */
  get solarPanelColors(): Prisma.SolarPanelColorsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.0
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Property: 'Property',
    Quote: 'Quote',
    Bill: 'Bill',
    Zip: 'Zip',
    Address: 'Address',
    Location: 'Location',
    SolarPanel: 'SolarPanel',
    Country: 'Country',
    Installer: 'Installer',
    InstallerType: 'InstallerType',
    InstallerReview: 'InstallerReview',
    State: 'State',
    InstallerSolarPanel: 'InstallerSolarPanel',
    Dimensions: 'Dimensions',
    SolarPanelColors: 'SolarPanelColors'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
    accounts: number
    sessions: number
    properties: number
  }

  export type UserCountOutputTypeSelect = {
    accounts?: boolean
    sessions?: boolean
    properties?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PropertyCountOutputType
   */


  export type PropertyCountOutputType = {
    quotes: number
  }

  export type PropertyCountOutputTypeSelect = {
    quotes?: boolean
  }

  export type PropertyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PropertyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PropertyCountOutputType
    : S extends undefined
    ? never
    : S extends PropertyCountOutputTypeArgs
    ?'include' extends U
    ? PropertyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PropertyCountOutputType ? PropertyCountOutputType[P] : never
  } 
    : PropertyCountOutputType
  : PropertyCountOutputType




  // Custom InputTypes

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     * 
    **/
    select?: PropertyCountOutputTypeSelect | null
  }



  /**
   * Count Type AddressCountOutputType
   */


  export type AddressCountOutputType = {
    properties: number
  }

  export type AddressCountOutputTypeSelect = {
    properties?: boolean
  }

  export type AddressCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AddressCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AddressCountOutputType
    : S extends undefined
    ? never
    : S extends AddressCountOutputTypeArgs
    ?'include' extends U
    ? AddressCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AddressCountOutputType ? AddressCountOutputType[P] : never
  } 
    : AddressCountOutputType
  : AddressCountOutputType




  // Custom InputTypes

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     * 
    **/
    select?: AddressCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationCountOutputType
   */


  export type LocationCountOutputType = {
    address: number
  }

  export type LocationCountOutputTypeSelect = {
    address?: boolean
  }

  export type LocationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LocationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LocationCountOutputType
    : S extends undefined
    ? never
    : S extends LocationCountOutputTypeArgs
    ?'include' extends U
    ? LocationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LocationCountOutputType ? LocationCountOutputType[P] : never
  } 
    : LocationCountOutputType
  : LocationCountOutputType




  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     * 
    **/
    select?: LocationCountOutputTypeSelect | null
  }



  /**
   * Count Type SolarPanelCountOutputType
   */


  export type SolarPanelCountOutputType = {
    countries: number
    installers: number
  }

  export type SolarPanelCountOutputTypeSelect = {
    countries?: boolean
    installers?: boolean
  }

  export type SolarPanelCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SolarPanelCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SolarPanelCountOutputType
    : S extends undefined
    ? never
    : S extends SolarPanelCountOutputTypeArgs
    ?'include' extends U
    ? SolarPanelCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SolarPanelCountOutputType ? SolarPanelCountOutputType[P] : never
  } 
    : SolarPanelCountOutputType
  : SolarPanelCountOutputType




  // Custom InputTypes

  /**
   * SolarPanelCountOutputType without action
   */
  export type SolarPanelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelCountOutputType
     * 
    **/
    select?: SolarPanelCountOutputTypeSelect | null
  }



  /**
   * Count Type CountryCountOutputType
   */


  export type CountryCountOutputType = {
    solarPanels: number
  }

  export type CountryCountOutputTypeSelect = {
    solarPanels?: boolean
  }

  export type CountryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CountryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CountryCountOutputType
    : S extends undefined
    ? never
    : S extends CountryCountOutputTypeArgs
    ?'include' extends U
    ? CountryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CountryCountOutputType ? CountryCountOutputType[P] : never
  } 
    : CountryCountOutputType
  : CountryCountOutputType




  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     * 
    **/
    select?: CountryCountOutputTypeSelect | null
  }



  /**
   * Count Type InstallerCountOutputType
   */


  export type InstallerCountOutputType = {
    types: number
    operatingStates: number
    reviews: number
    solarPanels: number
  }

  export type InstallerCountOutputTypeSelect = {
    types?: boolean
    operatingStates?: boolean
    reviews?: boolean
    solarPanels?: boolean
  }

  export type InstallerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | InstallerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? InstallerCountOutputType
    : S extends undefined
    ? never
    : S extends InstallerCountOutputTypeArgs
    ?'include' extends U
    ? InstallerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof InstallerCountOutputType ? InstallerCountOutputType[P] : never
  } 
    : InstallerCountOutputType
  : InstallerCountOutputType




  // Custom InputTypes

  /**
   * InstallerCountOutputType without action
   */
  export type InstallerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InstallerCountOutputType
     * 
    **/
    select?: InstallerCountOutputTypeSelect | null
  }



  /**
   * Count Type InstallerTypeCountOutputType
   */


  export type InstallerTypeCountOutputType = {
    installer: number
  }

  export type InstallerTypeCountOutputTypeSelect = {
    installer?: boolean
  }

  export type InstallerTypeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | InstallerTypeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? InstallerTypeCountOutputType
    : S extends undefined
    ? never
    : S extends InstallerTypeCountOutputTypeArgs
    ?'include' extends U
    ? InstallerTypeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof InstallerTypeCountOutputType ? InstallerTypeCountOutputType[P] : never
  } 
    : InstallerTypeCountOutputType
  : InstallerTypeCountOutputType




  // Custom InputTypes

  /**
   * InstallerTypeCountOutputType without action
   */
  export type InstallerTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InstallerTypeCountOutputType
     * 
    **/
    select?: InstallerTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type InstallerReviewCountOutputType
   */


  export type InstallerReviewCountOutputType = {
    installer: number
  }

  export type InstallerReviewCountOutputTypeSelect = {
    installer?: boolean
  }

  export type InstallerReviewCountOutputTypeGetPayload<
    S extends boolean | null | undefined | InstallerReviewCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? InstallerReviewCountOutputType
    : S extends undefined
    ? never
    : S extends InstallerReviewCountOutputTypeArgs
    ?'include' extends U
    ? InstallerReviewCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof InstallerReviewCountOutputType ? InstallerReviewCountOutputType[P] : never
  } 
    : InstallerReviewCountOutputType
  : InstallerReviewCountOutputType




  // Custom InputTypes

  /**
   * InstallerReviewCountOutputType without action
   */
  export type InstallerReviewCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InstallerReviewCountOutputType
     * 
    **/
    select?: InstallerReviewCountOutputTypeSelect | null
  }



  /**
   * Count Type StateCountOutputType
   */


  export type StateCountOutputType = {
    installer: number
  }

  export type StateCountOutputTypeSelect = {
    installer?: boolean
  }

  export type StateCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StateCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StateCountOutputType
    : S extends undefined
    ? never
    : S extends StateCountOutputTypeArgs
    ?'include' extends U
    ? StateCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof StateCountOutputType ? StateCountOutputType[P] : never
  } 
    : StateCountOutputType
  : StateCountOutputType




  // Custom InputTypes

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     * 
    **/
    select?: StateCountOutputTypeSelect | null
  }



  /**
   * Count Type DimensionsCountOutputType
   */


  export type DimensionsCountOutputType = {
    panel: number
  }

  export type DimensionsCountOutputTypeSelect = {
    panel?: boolean
  }

  export type DimensionsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DimensionsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DimensionsCountOutputType
    : S extends undefined
    ? never
    : S extends DimensionsCountOutputTypeArgs
    ?'include' extends U
    ? DimensionsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DimensionsCountOutputType ? DimensionsCountOutputType[P] : never
  } 
    : DimensionsCountOutputType
  : DimensionsCountOutputType




  // Custom InputTypes

  /**
   * DimensionsCountOutputType without action
   */
  export type DimensionsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DimensionsCountOutputType
     * 
    **/
    select?: DimensionsCountOutputTypeSelect | null
  }



  /**
   * Count Type SolarPanelColorsCountOutputType
   */


  export type SolarPanelColorsCountOutputType = {
    SolarPanel: number
  }

  export type SolarPanelColorsCountOutputTypeSelect = {
    SolarPanel?: boolean
  }

  export type SolarPanelColorsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SolarPanelColorsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SolarPanelColorsCountOutputType
    : S extends undefined
    ? never
    : S extends SolarPanelColorsCountOutputTypeArgs
    ?'include' extends U
    ? SolarPanelColorsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SolarPanelColorsCountOutputType ? SolarPanelColorsCountOutputType[P] : never
  } 
    : SolarPanelColorsCountOutputType
  : SolarPanelColorsCountOutputType




  // Custom InputTypes

  /**
   * SolarPanelColorsCountOutputType without action
   */
  export type SolarPanelColorsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelColorsCountOutputType
     * 
    **/
    select?: SolarPanelColorsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
  }

  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find one Account that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }

  /**
   * Account: findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account: findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account: findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = AccountFindUniqueArgsBase
      

  /**
   * Account: findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = AccountFindFirstArgsBase
      

  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs
  }

  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find one Session that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session: findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session: findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session: findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = SessionFindUniqueArgsBase
      

  /**
   * Session: findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = SessionFindFirstArgsBase
      

  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    properties?: boolean | PropertyFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    properties?: boolean | PropertyFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'properties' ? Array < PropertyGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'properties' ? Array < PropertyGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    sessions<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    properties<T extends PropertyFindManyArgs = {}>(args?: Subset<T, PropertyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Property>>, PrismaPromise<Array<PropertyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model VerificationToken
   */


  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByWithAggregationInput>
    by: Array<VerificationTokenScalarFieldEnum>
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }


  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenGetPayload<
    S extends boolean | null | undefined | VerificationTokenArgs,
    U = keyof S
      > = S extends true
        ? VerificationToken
    : S extends undefined
    ? never
    : S extends VerificationTokenArgs | VerificationTokenFindManyArgs
    ?'include' extends U
    ? VerificationToken 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof VerificationToken ? VerificationToken[P] : never
  } 
    : VerificationToken
  : VerificationToken


  type VerificationTokenCountArgs = Merge<
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }
  >

  export interface VerificationTokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<VerificationToken>>, PrismaPromise<Array<VerificationTokenGetPayload<T>>>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Find one VerificationToken that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * VerificationToken base type for findUnique actions
   */
  export type VerificationTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken: findUnique
   */
  export interface VerificationTokenFindUniqueArgs extends VerificationTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken base type for findFirst actions
   */
  export type VerificationTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     * 
    **/
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken: findFirst
   */
  export interface VerificationTokenFindFirstArgs extends VerificationTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs = {
    /**
     * The data used to create many VerificationTokens.
     * 
    **/
    data: Enumerable<VerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    /**
     * The data used to update VerificationTokens.
     * 
    **/
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     * 
    **/
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    /**
     * Filter which VerificationTokens to delete
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken: findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs = VerificationTokenFindUniqueArgsBase
      

  /**
   * VerificationToken: findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs = VerificationTokenFindFirstArgsBase
      

  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
  }



  /**
   * Model Property
   */


  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    addressId: string | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    addressId: string | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    userId: number
    addressId: number
    _all: number
  }


  export type PropertyMinAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    _all?: true
  }

  export type PropertyAggregateArgs = {
    /**
     * Filter which Property to aggregate.
     * 
    **/
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs = {
    where?: PropertyWhereInput
    orderBy?: Enumerable<PropertyOrderByWithAggregationInput>
    by: Array<PropertyScalarFieldEnum>
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }


  export type PropertyGroupByOutputType = {
    id: string
    userId: string
    addressId: string
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    addressId?: boolean
    address?: boolean | AddressArgs
    quotes?: boolean | QuoteFindManyArgs
    _count?: boolean | PropertyCountOutputTypeArgs
  }

  export type PropertyInclude = {
    user?: boolean | UserArgs
    address?: boolean | AddressArgs
    quotes?: boolean | QuoteFindManyArgs
    _count?: boolean | PropertyCountOutputTypeArgs
  }

  export type PropertyGetPayload<
    S extends boolean | null | undefined | PropertyArgs,
    U = keyof S
      > = S extends true
        ? Property
    : S extends undefined
    ? never
    : S extends PropertyArgs | PropertyFindManyArgs
    ?'include' extends U
    ? Property  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'address' ? AddressGetPayload<S['include'][P]> :
        P extends 'quotes' ? Array < QuoteGetPayload<S['include'][P]>>  :
        P extends '_count' ? PropertyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'address' ? AddressGetPayload<S['select'][P]> :
        P extends 'quotes' ? Array < QuoteGetPayload<S['select'][P]>>  :
        P extends '_count' ? PropertyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Property ? Property[P] : never
  } 
    : Property
  : Property


  type PropertyCountArgs = Merge<
    Omit<PropertyFindManyArgs, 'select' | 'include'> & {
      select?: PropertyCountAggregateInputType | true
    }
  >

  export interface PropertyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropertyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PropertyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Property'> extends True ? CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>> : CheckSelect<T, Prisma__PropertyClient<Property | null >, Prisma__PropertyClient<PropertyGetPayload<T> | null >>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropertyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PropertyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Property'> extends True ? CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>> : CheckSelect<T, Prisma__PropertyClient<Property | null >, Prisma__PropertyClient<PropertyGetPayload<T> | null >>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PropertyFindManyArgs>(
      args?: SelectSubset<T, PropertyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Property>>, PrismaPromise<Array<PropertyGetPayload<T>>>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
    **/
    create<T extends PropertyCreateArgs>(
      args: SelectSubset<T, PropertyCreateArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Create many Properties.
     *     @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     *     @example
     *     // Create many Properties
     *     const property = await prisma.property.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropertyCreateManyArgs>(
      args?: SelectSubset<T, PropertyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
    **/
    delete<T extends PropertyDeleteArgs>(
      args: SelectSubset<T, PropertyDeleteArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropertyUpdateArgs>(
      args: SelectSubset<T, PropertyUpdateArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropertyDeleteManyArgs>(
      args?: SelectSubset<T, PropertyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropertyUpdateManyArgs>(
      args: SelectSubset<T, PropertyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
    **/
    upsert<T extends PropertyUpsertArgs>(
      args: SelectSubset<T, PropertyUpsertArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Find one Property that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PropertyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Find the first Property that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PropertyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PropertyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    address<T extends AddressArgs = {}>(args?: Subset<T, AddressArgs>): CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>;

    quotes<T extends QuoteFindManyArgs = {}>(args?: Subset<T, QuoteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Quote>>, PrismaPromise<Array<QuoteGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Property base type for findUnique actions
   */
  export type PropertyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Filter, which Property to fetch.
     * 
    **/
    where: PropertyWhereUniqueInput
  }

  /**
   * Property: findUnique
   */
  export interface PropertyFindUniqueArgs extends PropertyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Property base type for findFirst actions
   */
  export type PropertyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Filter, which Property to fetch.
     * 
    **/
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     * 
    **/
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     * 
    **/
    distinct?: Enumerable<PropertyScalarFieldEnum>
  }

  /**
   * Property: findFirst
   */
  export interface PropertyFindFirstArgs extends PropertyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Filter, which Properties to fetch.
     * 
    **/
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     * 
    **/
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PropertyScalarFieldEnum>
  }


  /**
   * Property create
   */
  export type PropertyCreateArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * The data needed to create a Property.
     * 
    **/
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }


  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs = {
    /**
     * The data used to create many Properties.
     * 
    **/
    data: Enumerable<PropertyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Property update
   */
  export type PropertyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * The data needed to update a Property.
     * 
    **/
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     * 
    **/
    where: PropertyWhereUniqueInput
  }


  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs = {
    /**
     * The data used to update Properties.
     * 
    **/
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     * 
    **/
    where?: PropertyWhereInput
  }


  /**
   * Property upsert
   */
  export type PropertyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * The filter to search for the Property to update in case it exists.
     * 
    **/
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     * 
    **/
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }


  /**
   * Property delete
   */
  export type PropertyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Filter which Property to delete.
     * 
    **/
    where: PropertyWhereUniqueInput
  }


  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs = {
    /**
     * Filter which Properties to delete
     * 
    **/
    where?: PropertyWhereInput
  }


  /**
   * Property: findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs = PropertyFindUniqueArgsBase
      

  /**
   * Property: findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs = PropertyFindFirstArgsBase
      

  /**
   * Property without action
   */
  export type PropertyArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
  }



  /**
   * Model Quote
   */


  export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  export type QuoteMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
  }

  export type QuoteMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
  }

  export type QuoteCountAggregateOutputType = {
    id: number
    propertyId: number
    _all: number
  }


  export type QuoteMinAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type QuoteMaxAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type QuoteCountAggregateInputType = {
    id?: true
    propertyId?: true
    _all?: true
  }

  export type QuoteAggregateArgs = {
    /**
     * Filter which Quote to aggregate.
     * 
    **/
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     * 
    **/
    orderBy?: Enumerable<QuoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotes
    **/
    _count?: true | QuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteMaxAggregateInputType
  }

  export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuote[P]>
      : GetScalarType<T[P], AggregateQuote[P]>
  }




  export type QuoteGroupByArgs = {
    where?: QuoteWhereInput
    orderBy?: Enumerable<QuoteOrderByWithAggregationInput>
    by: Array<QuoteScalarFieldEnum>
    having?: QuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteCountAggregateInputType | true
    _min?: QuoteMinAggregateInputType
    _max?: QuoteMaxAggregateInputType
  }


  export type QuoteGroupByOutputType = {
    id: string
    propertyId: string
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  type GetQuoteGroupByPayload<T extends QuoteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteGroupByOutputType[P]>
        }
      >
    >


  export type QuoteSelect = {
    id?: boolean
    propertyId?: boolean
    property?: boolean | PropertyArgs
  }

  export type QuoteInclude = {
    property?: boolean | PropertyArgs
  }

  export type QuoteGetPayload<
    S extends boolean | null | undefined | QuoteArgs,
    U = keyof S
      > = S extends true
        ? Quote
    : S extends undefined
    ? never
    : S extends QuoteArgs | QuoteFindManyArgs
    ?'include' extends U
    ? Quote  & {
    [P in TrueKeys<S['include']>]:
        P extends 'property' ? PropertyGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'property' ? PropertyGetPayload<S['select'][P]> :  P extends keyof Quote ? Quote[P] : never
  } 
    : Quote
  : Quote


  type QuoteCountArgs = Merge<
    Omit<QuoteFindManyArgs, 'select' | 'include'> & {
      select?: QuoteCountAggregateInputType | true
    }
  >

  export interface QuoteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Quote that matches the filter.
     * @param {QuoteFindUniqueArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuoteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuoteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Quote'> extends True ? CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>> : CheckSelect<T, Prisma__QuoteClient<Quote | null >, Prisma__QuoteClient<QuoteGetPayload<T> | null >>

    /**
     * Find the first Quote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuoteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuoteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Quote'> extends True ? CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>> : CheckSelect<T, Prisma__QuoteClient<Quote | null >, Prisma__QuoteClient<QuoteGetPayload<T> | null >>

    /**
     * Find zero or more Quotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotes
     * const quotes = await prisma.quote.findMany()
     * 
     * // Get first 10 Quotes
     * const quotes = await prisma.quote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteWithIdOnly = await prisma.quote.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuoteFindManyArgs>(
      args?: SelectSubset<T, QuoteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Quote>>, PrismaPromise<Array<QuoteGetPayload<T>>>>

    /**
     * Create a Quote.
     * @param {QuoteCreateArgs} args - Arguments to create a Quote.
     * @example
     * // Create one Quote
     * const Quote = await prisma.quote.create({
     *   data: {
     *     // ... data to create a Quote
     *   }
     * })
     * 
    **/
    create<T extends QuoteCreateArgs>(
      args: SelectSubset<T, QuoteCreateArgs>
    ): CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>>

    /**
     * Create many Quotes.
     *     @param {QuoteCreateManyArgs} args - Arguments to create many Quotes.
     *     @example
     *     // Create many Quotes
     *     const quote = await prisma.quote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuoteCreateManyArgs>(
      args?: SelectSubset<T, QuoteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Quote.
     * @param {QuoteDeleteArgs} args - Arguments to delete one Quote.
     * @example
     * // Delete one Quote
     * const Quote = await prisma.quote.delete({
     *   where: {
     *     // ... filter to delete one Quote
     *   }
     * })
     * 
    **/
    delete<T extends QuoteDeleteArgs>(
      args: SelectSubset<T, QuoteDeleteArgs>
    ): CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>>

    /**
     * Update one Quote.
     * @param {QuoteUpdateArgs} args - Arguments to update one Quote.
     * @example
     * // Update one Quote
     * const quote = await prisma.quote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuoteUpdateArgs>(
      args: SelectSubset<T, QuoteUpdateArgs>
    ): CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>>

    /**
     * Delete zero or more Quotes.
     * @param {QuoteDeleteManyArgs} args - Arguments to filter Quotes to delete.
     * @example
     * // Delete a few Quotes
     * const { count } = await prisma.quote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuoteDeleteManyArgs>(
      args?: SelectSubset<T, QuoteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuoteUpdateManyArgs>(
      args: SelectSubset<T, QuoteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Quote.
     * @param {QuoteUpsertArgs} args - Arguments to update or create a Quote.
     * @example
     * // Update or create a Quote
     * const quote = await prisma.quote.upsert({
     *   create: {
     *     // ... data to create a Quote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote we want to update
     *   }
     * })
    **/
    upsert<T extends QuoteUpsertArgs>(
      args: SelectSubset<T, QuoteUpsertArgs>
    ): CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>>

    /**
     * Find one Quote that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {QuoteFindUniqueOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuoteFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuoteFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>>

    /**
     * Find the first Quote that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuoteFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__QuoteClient<Quote>, Prisma__QuoteClient<QuoteGetPayload<T>>>

    /**
     * Count the number of Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteCountArgs} args - Arguments to filter Quotes to count.
     * @example
     * // Count the number of Quotes
     * const count = await prisma.quote.count({
     *   where: {
     *     // ... the filter for the Quotes we want to count
     *   }
     * })
    **/
    count<T extends QuoteCountArgs>(
      args?: Subset<T, QuoteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuoteAggregateArgs>(args: Subset<T, QuoteAggregateArgs>): PrismaPromise<GetQuoteAggregateType<T>>

    /**
     * Group by Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteGroupByArgs} args - Group by arguments.
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
      T extends QuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteGroupByArgs['orderBy'] }
        : { orderBy?: QuoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuoteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    property<T extends PropertyArgs = {}>(args?: Subset<T, PropertyArgs>): CheckSelect<T, Prisma__PropertyClient<Property | null >, Prisma__PropertyClient<PropertyGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Quote base type for findUnique actions
   */
  export type QuoteFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
    /**
     * Filter, which Quote to fetch.
     * 
    **/
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote: findUnique
   */
  export interface QuoteFindUniqueArgs extends QuoteFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quote base type for findFirst actions
   */
  export type QuoteFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
    /**
     * Filter, which Quote to fetch.
     * 
    **/
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     * 
    **/
    orderBy?: Enumerable<QuoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     * 
    **/
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     * 
    **/
    distinct?: Enumerable<QuoteScalarFieldEnum>
  }

  /**
   * Quote: findFirst
   */
  export interface QuoteFindFirstArgs extends QuoteFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quote findMany
   */
  export type QuoteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
    /**
     * Filter, which Quotes to fetch.
     * 
    **/
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     * 
    **/
    orderBy?: Enumerable<QuoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotes.
     * 
    **/
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuoteScalarFieldEnum>
  }


  /**
   * Quote create
   */
  export type QuoteCreateArgs = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
    /**
     * The data needed to create a Quote.
     * 
    **/
    data: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
  }


  /**
   * Quote createMany
   */
  export type QuoteCreateManyArgs = {
    /**
     * The data used to create many Quotes.
     * 
    **/
    data: Enumerable<QuoteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Quote update
   */
  export type QuoteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
    /**
     * The data needed to update a Quote.
     * 
    **/
    data: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
    /**
     * Choose, which Quote to update.
     * 
    **/
    where: QuoteWhereUniqueInput
  }


  /**
   * Quote updateMany
   */
  export type QuoteUpdateManyArgs = {
    /**
     * The data used to update Quotes.
     * 
    **/
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyInput>
    /**
     * Filter which Quotes to update
     * 
    **/
    where?: QuoteWhereInput
  }


  /**
   * Quote upsert
   */
  export type QuoteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
    /**
     * The filter to search for the Quote to update in case it exists.
     * 
    **/
    where: QuoteWhereUniqueInput
    /**
     * In case the Quote found by the `where` argument doesn't exist, create a new Quote with this data.
     * 
    **/
    create: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
    /**
     * In case the Quote was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
  }


  /**
   * Quote delete
   */
  export type QuoteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
    /**
     * Filter which Quote to delete.
     * 
    **/
    where: QuoteWhereUniqueInput
  }


  /**
   * Quote deleteMany
   */
  export type QuoteDeleteManyArgs = {
    /**
     * Filter which Quotes to delete
     * 
    **/
    where?: QuoteWhereInput
  }


  /**
   * Quote: findUniqueOrThrow
   */
  export type QuoteFindUniqueOrThrowArgs = QuoteFindUniqueArgsBase
      

  /**
   * Quote: findFirstOrThrow
   */
  export type QuoteFindFirstOrThrowArgs = QuoteFindFirstArgsBase
      

  /**
   * Quote without action
   */
  export type QuoteArgs = {
    /**
     * Select specific fields to fetch from the Quote
     * 
    **/
    select?: QuoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuoteInclude | null
  }



  /**
   * Model Bill
   */


  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    monthly: number | null
    annual: number | null
    monthly_usage: number | null
    annual_usage: number | null
  }

  export type BillSumAggregateOutputType = {
    monthly: number | null
    annual: number | null
    monthly_usage: number | null
    annual_usage: number | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    monthly: number | null
    annual: number | null
    month: Month | null
    monthly_usage: number | null
    annual_usage: number | null
    customer_type: CustomerType | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    monthly: number | null
    annual: number | null
    month: Month | null
    monthly_usage: number | null
    annual_usage: number | null
    customer_type: CustomerType | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    monthly: number
    annual: number
    month: number
    monthly_usage: number
    annual_usage: number
    customer_type: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    monthly?: true
    annual?: true
    monthly_usage?: true
    annual_usage?: true
  }

  export type BillSumAggregateInputType = {
    monthly?: true
    annual?: true
    monthly_usage?: true
    annual_usage?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    monthly?: true
    annual?: true
    month?: true
    monthly_usage?: true
    annual_usage?: true
    customer_type?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    monthly?: true
    annual?: true
    month?: true
    monthly_usage?: true
    annual_usage?: true
    customer_type?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    monthly?: true
    annual?: true
    month?: true
    monthly_usage?: true
    annual_usage?: true
    customer_type?: true
    _all?: true
  }

  export type BillAggregateArgs = {
    /**
     * Filter which Bill to aggregate.
     * 
    **/
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     * 
    **/
    orderBy?: Enumerable<BillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs = {
    where?: BillWhereInput
    orderBy?: Enumerable<BillOrderByWithAggregationInput>
    by: Array<BillScalarFieldEnum>
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }


  export type BillGroupByOutputType = {
    id: string
    monthly: number
    annual: number
    month: Month
    monthly_usage: number
    annual_usage: number
    customer_type: CustomerType
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect = {
    id?: boolean
    monthly?: boolean
    annual?: boolean
    month?: boolean
    monthly_usage?: boolean
    annual_usage?: boolean
    customer_type?: boolean
  }

  export type BillGetPayload<
    S extends boolean | null | undefined | BillArgs,
    U = keyof S
      > = S extends true
        ? Bill
    : S extends undefined
    ? never
    : S extends BillArgs | BillFindManyArgs
    ?'include' extends U
    ? Bill 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Bill ? Bill[P] : never
  } 
    : Bill
  : Bill


  type BillCountArgs = Merge<
    Omit<BillFindManyArgs, 'select' | 'include'> & {
      select?: BillCountAggregateInputType | true
    }
  >

  export interface BillDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BillFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BillFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Bill'> extends True ? CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>> : CheckSelect<T, Prisma__BillClient<Bill | null >, Prisma__BillClient<BillGetPayload<T> | null >>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BillFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BillFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Bill'> extends True ? CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>> : CheckSelect<T, Prisma__BillClient<Bill | null >, Prisma__BillClient<BillGetPayload<T> | null >>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BillFindManyArgs>(
      args?: SelectSubset<T, BillFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Bill>>, PrismaPromise<Array<BillGetPayload<T>>>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
    **/
    create<T extends BillCreateArgs>(
      args: SelectSubset<T, BillCreateArgs>
    ): CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>>

    /**
     * Create many Bills.
     *     @param {BillCreateManyArgs} args - Arguments to create many Bills.
     *     @example
     *     // Create many Bills
     *     const bill = await prisma.bill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BillCreateManyArgs>(
      args?: SelectSubset<T, BillCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
    **/
    delete<T extends BillDeleteArgs>(
      args: SelectSubset<T, BillDeleteArgs>
    ): CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BillUpdateArgs>(
      args: SelectSubset<T, BillUpdateArgs>
    ): CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BillDeleteManyArgs>(
      args?: SelectSubset<T, BillDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BillUpdateManyArgs>(
      args: SelectSubset<T, BillUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
    **/
    upsert<T extends BillUpsertArgs>(
      args: SelectSubset<T, BillUpsertArgs>
    ): CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>>

    /**
     * Find one Bill that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BillFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>>

    /**
     * Find the first Bill that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BillFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__BillClient<Bill>, Prisma__BillClient<BillGetPayload<T>>>

    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BillClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Bill base type for findUnique actions
   */
  export type BillFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
    /**
     * Filter, which Bill to fetch.
     * 
    **/
    where: BillWhereUniqueInput
  }

  /**
   * Bill: findUnique
   */
  export interface BillFindUniqueArgs extends BillFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Bill base type for findFirst actions
   */
  export type BillFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
    /**
     * Filter, which Bill to fetch.
     * 
    **/
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     * 
    **/
    orderBy?: Enumerable<BillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     * 
    **/
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     * 
    **/
    distinct?: Enumerable<BillScalarFieldEnum>
  }

  /**
   * Bill: findFirst
   */
  export interface BillFindFirstArgs extends BillFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Bill findMany
   */
  export type BillFindManyArgs = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
    /**
     * Filter, which Bills to fetch.
     * 
    **/
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     * 
    **/
    orderBy?: Enumerable<BillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     * 
    **/
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BillScalarFieldEnum>
  }


  /**
   * Bill create
   */
  export type BillCreateArgs = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
    /**
     * The data needed to create a Bill.
     * 
    **/
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }


  /**
   * Bill createMany
   */
  export type BillCreateManyArgs = {
    /**
     * The data used to create many Bills.
     * 
    **/
    data: Enumerable<BillCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Bill update
   */
  export type BillUpdateArgs = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
    /**
     * The data needed to update a Bill.
     * 
    **/
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     * 
    **/
    where: BillWhereUniqueInput
  }


  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs = {
    /**
     * The data used to update Bills.
     * 
    **/
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     * 
    **/
    where?: BillWhereInput
  }


  /**
   * Bill upsert
   */
  export type BillUpsertArgs = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
    /**
     * The filter to search for the Bill to update in case it exists.
     * 
    **/
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     * 
    **/
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }


  /**
   * Bill delete
   */
  export type BillDeleteArgs = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
    /**
     * Filter which Bill to delete.
     * 
    **/
    where: BillWhereUniqueInput
  }


  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs = {
    /**
     * Filter which Bills to delete
     * 
    **/
    where?: BillWhereInput
  }


  /**
   * Bill: findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs = BillFindUniqueArgsBase
      

  /**
   * Bill: findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs = BillFindFirstArgsBase
      

  /**
   * Bill without action
   */
  export type BillArgs = {
    /**
     * Select specific fields to fetch from the Bill
     * 
    **/
    select?: BillSelect | null
  }



  /**
   * Model Zip
   */


  export type AggregateZip = {
    _count: ZipCountAggregateOutputType | null
    _avg: ZipAvgAggregateOutputType | null
    _sum: ZipSumAggregateOutputType | null
    _min: ZipMinAggregateOutputType | null
    _max: ZipMaxAggregateOutputType | null
  }

  export type ZipAvgAggregateOutputType = {
    netmetering: number | null
    commercial_rate: number | null
    residential_rate: number | null
    sunstate: number | null
    ppkwh_state: number | null
    solar_ppkwh_state: number | null
  }

  export type ZipSumAggregateOutputType = {
    netmetering: number | null
    commercial_rate: number | null
    residential_rate: number | null
    sunstate: number | null
    ppkwh_state: number | null
    solar_ppkwh_state: number | null
  }

  export type ZipMinAggregateOutputType = {
    id: string | null
    code: string | null
    city: string | null
    state: string | null
    netmetering: number | null
    commercial_rate: number | null
    residential_rate: number | null
    utility: string | null
    sunstate: number | null
    ppkwh_state: number | null
    solar_ppkwh_state: number | null
  }

  export type ZipMaxAggregateOutputType = {
    id: string | null
    code: string | null
    city: string | null
    state: string | null
    netmetering: number | null
    commercial_rate: number | null
    residential_rate: number | null
    utility: string | null
    sunstate: number | null
    ppkwh_state: number | null
    solar_ppkwh_state: number | null
  }

  export type ZipCountAggregateOutputType = {
    id: number
    code: number
    city: number
    state: number
    netmetering: number
    commercial_rate: number
    residential_rate: number
    utility: number
    sunstate: number
    ppkwh_state: number
    solar_ppkwh_state: number
    _all: number
  }


  export type ZipAvgAggregateInputType = {
    netmetering?: true
    commercial_rate?: true
    residential_rate?: true
    sunstate?: true
    ppkwh_state?: true
    solar_ppkwh_state?: true
  }

  export type ZipSumAggregateInputType = {
    netmetering?: true
    commercial_rate?: true
    residential_rate?: true
    sunstate?: true
    ppkwh_state?: true
    solar_ppkwh_state?: true
  }

  export type ZipMinAggregateInputType = {
    id?: true
    code?: true
    city?: true
    state?: true
    netmetering?: true
    commercial_rate?: true
    residential_rate?: true
    utility?: true
    sunstate?: true
    ppkwh_state?: true
    solar_ppkwh_state?: true
  }

  export type ZipMaxAggregateInputType = {
    id?: true
    code?: true
    city?: true
    state?: true
    netmetering?: true
    commercial_rate?: true
    residential_rate?: true
    utility?: true
    sunstate?: true
    ppkwh_state?: true
    solar_ppkwh_state?: true
  }

  export type ZipCountAggregateInputType = {
    id?: true
    code?: true
    city?: true
    state?: true
    netmetering?: true
    commercial_rate?: true
    residential_rate?: true
    utility?: true
    sunstate?: true
    ppkwh_state?: true
    solar_ppkwh_state?: true
    _all?: true
  }

  export type ZipAggregateArgs = {
    /**
     * Filter which Zip to aggregate.
     * 
    **/
    where?: ZipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zips to fetch.
     * 
    **/
    orderBy?: Enumerable<ZipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zips
    **/
    _count?: true | ZipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZipMaxAggregateInputType
  }

  export type GetZipAggregateType<T extends ZipAggregateArgs> = {
        [P in keyof T & keyof AggregateZip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZip[P]>
      : GetScalarType<T[P], AggregateZip[P]>
  }




  export type ZipGroupByArgs = {
    where?: ZipWhereInput
    orderBy?: Enumerable<ZipOrderByWithAggregationInput>
    by: Array<ZipScalarFieldEnum>
    having?: ZipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZipCountAggregateInputType | true
    _avg?: ZipAvgAggregateInputType
    _sum?: ZipSumAggregateInputType
    _min?: ZipMinAggregateInputType
    _max?: ZipMaxAggregateInputType
  }


  export type ZipGroupByOutputType = {
    id: string
    code: string
    city: string
    state: string
    netmetering: number
    commercial_rate: number
    residential_rate: number
    utility: string
    sunstate: number
    ppkwh_state: number
    solar_ppkwh_state: number
    _count: ZipCountAggregateOutputType | null
    _avg: ZipAvgAggregateOutputType | null
    _sum: ZipSumAggregateOutputType | null
    _min: ZipMinAggregateOutputType | null
    _max: ZipMaxAggregateOutputType | null
  }

  type GetZipGroupByPayload<T extends ZipGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ZipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZipGroupByOutputType[P]>
            : GetScalarType<T[P], ZipGroupByOutputType[P]>
        }
      >
    >


  export type ZipSelect = {
    id?: boolean
    code?: boolean
    city?: boolean
    state?: boolean
    netmetering?: boolean
    commercial_rate?: boolean
    residential_rate?: boolean
    utility?: boolean
    sunstate?: boolean
    ppkwh_state?: boolean
    solar_ppkwh_state?: boolean
  }

  export type ZipGetPayload<
    S extends boolean | null | undefined | ZipArgs,
    U = keyof S
      > = S extends true
        ? Zip
    : S extends undefined
    ? never
    : S extends ZipArgs | ZipFindManyArgs
    ?'include' extends U
    ? Zip 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Zip ? Zip[P] : never
  } 
    : Zip
  : Zip


  type ZipCountArgs = Merge<
    Omit<ZipFindManyArgs, 'select' | 'include'> & {
      select?: ZipCountAggregateInputType | true
    }
  >

  export interface ZipDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Zip that matches the filter.
     * @param {ZipFindUniqueArgs} args - Arguments to find a Zip
     * @example
     * // Get one Zip
     * const zip = await prisma.zip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZipFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZipFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Zip'> extends True ? CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>> : CheckSelect<T, Prisma__ZipClient<Zip | null >, Prisma__ZipClient<ZipGetPayload<T> | null >>

    /**
     * Find the first Zip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZipFindFirstArgs} args - Arguments to find a Zip
     * @example
     * // Get one Zip
     * const zip = await prisma.zip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZipFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZipFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Zip'> extends True ? CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>> : CheckSelect<T, Prisma__ZipClient<Zip | null >, Prisma__ZipClient<ZipGetPayload<T> | null >>

    /**
     * Find zero or more Zips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zips
     * const zips = await prisma.zip.findMany()
     * 
     * // Get first 10 Zips
     * const zips = await prisma.zip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zipWithIdOnly = await prisma.zip.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ZipFindManyArgs>(
      args?: SelectSubset<T, ZipFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Zip>>, PrismaPromise<Array<ZipGetPayload<T>>>>

    /**
     * Create a Zip.
     * @param {ZipCreateArgs} args - Arguments to create a Zip.
     * @example
     * // Create one Zip
     * const Zip = await prisma.zip.create({
     *   data: {
     *     // ... data to create a Zip
     *   }
     * })
     * 
    **/
    create<T extends ZipCreateArgs>(
      args: SelectSubset<T, ZipCreateArgs>
    ): CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>>

    /**
     * Create many Zips.
     *     @param {ZipCreateManyArgs} args - Arguments to create many Zips.
     *     @example
     *     // Create many Zips
     *     const zip = await prisma.zip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZipCreateManyArgs>(
      args?: SelectSubset<T, ZipCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Zip.
     * @param {ZipDeleteArgs} args - Arguments to delete one Zip.
     * @example
     * // Delete one Zip
     * const Zip = await prisma.zip.delete({
     *   where: {
     *     // ... filter to delete one Zip
     *   }
     * })
     * 
    **/
    delete<T extends ZipDeleteArgs>(
      args: SelectSubset<T, ZipDeleteArgs>
    ): CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>>

    /**
     * Update one Zip.
     * @param {ZipUpdateArgs} args - Arguments to update one Zip.
     * @example
     * // Update one Zip
     * const zip = await prisma.zip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZipUpdateArgs>(
      args: SelectSubset<T, ZipUpdateArgs>
    ): CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>>

    /**
     * Delete zero or more Zips.
     * @param {ZipDeleteManyArgs} args - Arguments to filter Zips to delete.
     * @example
     * // Delete a few Zips
     * const { count } = await prisma.zip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZipDeleteManyArgs>(
      args?: SelectSubset<T, ZipDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zips
     * const zip = await prisma.zip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZipUpdateManyArgs>(
      args: SelectSubset<T, ZipUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Zip.
     * @param {ZipUpsertArgs} args - Arguments to update or create a Zip.
     * @example
     * // Update or create a Zip
     * const zip = await prisma.zip.upsert({
     *   create: {
     *     // ... data to create a Zip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zip we want to update
     *   }
     * })
    **/
    upsert<T extends ZipUpsertArgs>(
      args: SelectSubset<T, ZipUpsertArgs>
    ): CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>>

    /**
     * Find one Zip that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ZipFindUniqueOrThrowArgs} args - Arguments to find a Zip
     * @example
     * // Get one Zip
     * const zip = await prisma.zip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ZipFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ZipFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>>

    /**
     * Find the first Zip that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZipFindFirstOrThrowArgs} args - Arguments to find a Zip
     * @example
     * // Get one Zip
     * const zip = await prisma.zip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ZipFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ZipFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ZipClient<Zip>, Prisma__ZipClient<ZipGetPayload<T>>>

    /**
     * Count the number of Zips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZipCountArgs} args - Arguments to filter Zips to count.
     * @example
     * // Count the number of Zips
     * const count = await prisma.zip.count({
     *   where: {
     *     // ... the filter for the Zips we want to count
     *   }
     * })
    **/
    count<T extends ZipCountArgs>(
      args?: Subset<T, ZipCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZipAggregateArgs>(args: Subset<T, ZipAggregateArgs>): PrismaPromise<GetZipAggregateType<T>>

    /**
     * Group by Zip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZipGroupByArgs} args - Group by arguments.
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
      T extends ZipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZipGroupByArgs['orderBy'] }
        : { orderBy?: ZipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ZipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZipGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZipClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Zip base type for findUnique actions
   */
  export type ZipFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
    /**
     * Filter, which Zip to fetch.
     * 
    **/
    where: ZipWhereUniqueInput
  }

  /**
   * Zip: findUnique
   */
  export interface ZipFindUniqueArgs extends ZipFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Zip base type for findFirst actions
   */
  export type ZipFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
    /**
     * Filter, which Zip to fetch.
     * 
    **/
    where?: ZipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zips to fetch.
     * 
    **/
    orderBy?: Enumerable<ZipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zips.
     * 
    **/
    cursor?: ZipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zips.
     * 
    **/
    distinct?: Enumerable<ZipScalarFieldEnum>
  }

  /**
   * Zip: findFirst
   */
  export interface ZipFindFirstArgs extends ZipFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Zip findMany
   */
  export type ZipFindManyArgs = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
    /**
     * Filter, which Zips to fetch.
     * 
    **/
    where?: ZipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zips to fetch.
     * 
    **/
    orderBy?: Enumerable<ZipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zips.
     * 
    **/
    cursor?: ZipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zips.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZipScalarFieldEnum>
  }


  /**
   * Zip create
   */
  export type ZipCreateArgs = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
    /**
     * The data needed to create a Zip.
     * 
    **/
    data: XOR<ZipCreateInput, ZipUncheckedCreateInput>
  }


  /**
   * Zip createMany
   */
  export type ZipCreateManyArgs = {
    /**
     * The data used to create many Zips.
     * 
    **/
    data: Enumerable<ZipCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Zip update
   */
  export type ZipUpdateArgs = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
    /**
     * The data needed to update a Zip.
     * 
    **/
    data: XOR<ZipUpdateInput, ZipUncheckedUpdateInput>
    /**
     * Choose, which Zip to update.
     * 
    **/
    where: ZipWhereUniqueInput
  }


  /**
   * Zip updateMany
   */
  export type ZipUpdateManyArgs = {
    /**
     * The data used to update Zips.
     * 
    **/
    data: XOR<ZipUpdateManyMutationInput, ZipUncheckedUpdateManyInput>
    /**
     * Filter which Zips to update
     * 
    **/
    where?: ZipWhereInput
  }


  /**
   * Zip upsert
   */
  export type ZipUpsertArgs = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
    /**
     * The filter to search for the Zip to update in case it exists.
     * 
    **/
    where: ZipWhereUniqueInput
    /**
     * In case the Zip found by the `where` argument doesn't exist, create a new Zip with this data.
     * 
    **/
    create: XOR<ZipCreateInput, ZipUncheckedCreateInput>
    /**
     * In case the Zip was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZipUpdateInput, ZipUncheckedUpdateInput>
  }


  /**
   * Zip delete
   */
  export type ZipDeleteArgs = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
    /**
     * Filter which Zip to delete.
     * 
    **/
    where: ZipWhereUniqueInput
  }


  /**
   * Zip deleteMany
   */
  export type ZipDeleteManyArgs = {
    /**
     * Filter which Zips to delete
     * 
    **/
    where?: ZipWhereInput
  }


  /**
   * Zip: findUniqueOrThrow
   */
  export type ZipFindUniqueOrThrowArgs = ZipFindUniqueArgsBase
      

  /**
   * Zip: findFirstOrThrow
   */
  export type ZipFindFirstOrThrowArgs = ZipFindFirstArgsBase
      

  /**
   * Zip without action
   */
  export type ZipArgs = {
    /**
     * Select specific fields to fetch from the Zip
     * 
    **/
    select?: ZipSelect | null
  }



  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    sunnumber: number | null
    roofspace: number | null
    squareFeet: number | null
    lotSize: number | null
    bedrooms: number | null
    value: number | null
  }

  export type AddressSumAggregateOutputType = {
    sunnumber: number | null
    roofspace: number | null
    squareFeet: number | null
    lotSize: number | null
    bedrooms: number | null
    value: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    placeId: string | null
    street: string | null
    city: string | null
    state: string | null
    owner: string | null
    sunnumber: number | null
    roofspace: number | null
    squareFeet: number | null
    lotSize: number | null
    bedrooms: number | null
    value: number | null
    zipcode: string | null
    locationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    placeId: string | null
    street: string | null
    city: string | null
    state: string | null
    owner: string | null
    sunnumber: number | null
    roofspace: number | null
    squareFeet: number | null
    lotSize: number | null
    bedrooms: number | null
    value: number | null
    zipcode: string | null
    locationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    placeId: number
    street: number
    city: number
    state: number
    owner: number
    sunnumber: number
    roofspace: number
    squareFeet: number
    lotSize: number
    bedrooms: number
    value: number
    zipcode: number
    locationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    sunnumber?: true
    roofspace?: true
    squareFeet?: true
    lotSize?: true
    bedrooms?: true
    value?: true
  }

  export type AddressSumAggregateInputType = {
    sunnumber?: true
    roofspace?: true
    squareFeet?: true
    lotSize?: true
    bedrooms?: true
    value?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    placeId?: true
    street?: true
    city?: true
    state?: true
    owner?: true
    sunnumber?: true
    roofspace?: true
    squareFeet?: true
    lotSize?: true
    bedrooms?: true
    value?: true
    zipcode?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    placeId?: true
    street?: true
    city?: true
    state?: true
    owner?: true
    sunnumber?: true
    roofspace?: true
    squareFeet?: true
    lotSize?: true
    bedrooms?: true
    value?: true
    zipcode?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    placeId?: true
    street?: true
    city?: true
    state?: true
    owner?: true
    sunnumber?: true
    roofspace?: true
    squareFeet?: true
    lotSize?: true
    bedrooms?: true
    value?: true
    zipcode?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: Array<AddressScalarFieldEnum>
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: string
    placeId: string
    street: string
    city: string
    state: string
    owner: string | null
    sunnumber: number | null
    roofspace: number | null
    squareFeet: number | null
    lotSize: number | null
    bedrooms: number | null
    value: number | null
    zipcode: string
    locationId: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    id?: boolean
    placeId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    owner?: boolean
    sunnumber?: boolean
    roofspace?: boolean
    squareFeet?: boolean
    lotSize?: boolean
    bedrooms?: boolean
    value?: boolean
    zipcode?: boolean
    locationId?: boolean
    location?: boolean | LocationArgs
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | PropertyFindManyArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }

  export type AddressInclude = {
    location?: boolean | LocationArgs
    properties?: boolean | PropertyFindManyArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }

  export type AddressGetPayload<
    S extends boolean | null | undefined | AddressArgs,
    U = keyof S
      > = S extends true
        ? Address
    : S extends undefined
    ? never
    : S extends AddressArgs | AddressFindManyArgs
    ?'include' extends U
    ? Address  & {
    [P in TrueKeys<S['include']>]:
        P extends 'location' ? LocationGetPayload<S['include'][P]> :
        P extends 'properties' ? Array < PropertyGetPayload<S['include'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'location' ? LocationGetPayload<S['select'][P]> :
        P extends 'properties' ? Array < PropertyGetPayload<S['select'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Address ? Address[P] : never
  } 
    : Address
  : Address


  type AddressCountArgs = Merge<
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }
  >

  export interface AddressDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>> : CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>> : CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Find one Address that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    location<T extends LocationArgs = {}>(args?: Subset<T, LocationArgs>): CheckSelect<T, Prisma__LocationClient<Location | null >, Prisma__LocationClient<LocationGetPayload<T> | null >>;

    properties<T extends PropertyFindManyArgs = {}>(args?: Subset<T, PropertyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Property>>, PrismaPromise<Array<PropertyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Address base type for findUnique actions
   */
  export type AddressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }

  /**
   * Address: findUnique
   */
  export interface AddressFindUniqueArgs extends AddressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address base type for findFirst actions
   */
  export type AddressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * Address: findFirst
   */
  export interface AddressFindFirstArgs extends AddressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     * 
    **/
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     * 
    **/
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     * 
    **/
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     * 
    **/
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     * 
    **/
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     * 
    **/
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address: findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs = AddressFindUniqueArgsBase
      

  /**
   * Address: findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs = AddressFindFirstArgsBase
      

  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
  }



  /**
   * Model Location
   */


  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    lat: number | null
    lon: number | null
  }

  export type LocationSumAggregateOutputType = {
    lat: number | null
    lon: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    lat: number | null
    lon: number | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    lat: number | null
    lon: number | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    lat: number
    lon: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    lat?: true
    lon?: true
  }

  export type LocationSumAggregateInputType = {
    lat?: true
    lon?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    lat?: true
    lon?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    lat?: true
    lon?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    lat?: true
    lon?: true
    _all?: true
  }

  export type LocationAggregateArgs = {
    /**
     * Filter which Location to aggregate.
     * 
    **/
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     * 
    **/
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs = {
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithAggregationInput>
    by: Array<LocationScalarFieldEnum>
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }


  export type LocationGroupByOutputType = {
    id: string
    lat: number
    lon: number
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect = {
    id?: boolean
    lat?: boolean
    lon?: boolean
    address?: boolean | AddressFindManyArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }

  export type LocationInclude = {
    address?: boolean | AddressFindManyArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }

  export type LocationGetPayload<
    S extends boolean | null | undefined | LocationArgs,
    U = keyof S
      > = S extends true
        ? Location
    : S extends undefined
    ? never
    : S extends LocationArgs | LocationFindManyArgs
    ?'include' extends U
    ? Location  & {
    [P in TrueKeys<S['include']>]:
        P extends 'address' ? Array < AddressGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'address' ? Array < AddressGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Location ? Location[P] : never
  } 
    : Location
  : Location


  type LocationCountArgs = Merge<
    Omit<LocationFindManyArgs, 'select' | 'include'> & {
      select?: LocationCountAggregateInputType | true
    }
  >

  export interface LocationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Location'> extends True ? CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>> : CheckSelect<T, Prisma__LocationClient<Location | null >, Prisma__LocationClient<LocationGetPayload<T> | null >>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Location'> extends True ? CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>> : CheckSelect<T, Prisma__LocationClient<Location | null >, Prisma__LocationClient<LocationGetPayload<T> | null >>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs>(
      args?: SelectSubset<T, LocationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Location>>, PrismaPromise<Array<LocationGetPayload<T>>>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs>(
      args: SelectSubset<T, LocationCreateArgs>
    ): CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>>

    /**
     * Create many Locations.
     *     @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationCreateManyArgs>(
      args?: SelectSubset<T, LocationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs>(
      args: SelectSubset<T, LocationDeleteArgs>
    ): CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs>(
      args: SelectSubset<T, LocationUpdateArgs>
    ): CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs>(
      args?: SelectSubset<T, LocationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs>(
      args: SelectSubset<T, LocationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs>(
      args: SelectSubset<T, LocationUpsertArgs>
    ): CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>>

    /**
     * Find one Location that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>>

    /**
     * Find the first Location that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__LocationClient<Location>, Prisma__LocationClient<LocationGetPayload<T>>>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    address<T extends AddressFindManyArgs = {}>(args?: Subset<T, AddressFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Location base type for findUnique actions
   */
  export type LocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     * 
    **/
    where: LocationWhereUniqueInput
  }

  /**
   * Location: findUnique
   */
  export interface LocationFindUniqueArgs extends LocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location base type for findFirst actions
   */
  export type LocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     * 
    **/
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     * 
    **/
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     * 
    **/
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     * 
    **/
    distinct?: Enumerable<LocationScalarFieldEnum>
  }

  /**
   * Location: findFirst
   */
  export interface LocationFindFirstArgs extends LocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findMany
   */
  export type LocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Locations to fetch.
     * 
    **/
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     * 
    **/
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     * 
    **/
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location create
   */
  export type LocationCreateArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * The data needed to create a Location.
     * 
    **/
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location createMany
   */
  export type LocationCreateManyArgs = {
    /**
     * The data used to create many Locations.
     * 
    **/
    data: Enumerable<LocationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * The data needed to update a Location.
     * 
    **/
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     * 
    **/
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs = {
    /**
     * The data used to update Locations.
     * 
    **/
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     * 
    **/
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * The filter to search for the Location to update in case it exists.
     * 
    **/
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     * 
    **/
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter which Location to delete.
     * 
    **/
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs = {
    /**
     * Filter which Locations to delete
     * 
    **/
    where?: LocationWhereInput
  }


  /**
   * Location: findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs = LocationFindUniqueArgsBase
      

  /**
   * Location: findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs = LocationFindFirstArgsBase
      

  /**
   * Location without action
   */
  export type LocationArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
  }



  /**
   * Model SolarPanel
   */


  export type AggregateSolarPanel = {
    _count: SolarPanelCountAggregateOutputType | null
    _avg: SolarPanelAvgAggregateOutputType | null
    _sum: SolarPanelSumAggregateOutputType | null
    _min: SolarPanelMinAggregateOutputType | null
    _max: SolarPanelMaxAggregateOutputType | null
  }

  export type SolarPanelAvgAggregateOutputType = {
    wattage: number | null
    efficiency: number | null
    rating: number | null
    degradation: number | null
    output25: number | null
    warranty: number | null
    ppwMarket: number | null
  }

  export type SolarPanelSumAggregateOutputType = {
    wattage: number | null
    efficiency: number | null
    rating: number | null
    degradation: number | null
    output25: number | null
    warranty: number | null
    ppwMarket: number | null
  }

  export type SolarPanelMinAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    wattage: number | null
    efficiency: number | null
    rating: number | null
    degradation: number | null
    output25: number | null
    warranty: number | null
    imagePanel: string | null
    imageMounted: string | null
    ppwMarket: number | null
    material: string | null
    manufacturer: string | null
    energySageLink: string | null
    dimensionsId: string | null
    solarPanelColorsId: string | null
  }

  export type SolarPanelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    wattage: number | null
    efficiency: number | null
    rating: number | null
    degradation: number | null
    output25: number | null
    warranty: number | null
    imagePanel: string | null
    imageMounted: string | null
    ppwMarket: number | null
    material: string | null
    manufacturer: string | null
    energySageLink: string | null
    dimensionsId: string | null
    solarPanelColorsId: string | null
  }

  export type SolarPanelCountAggregateOutputType = {
    id: number
    name: number
    model: number
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: number
    imageMounted: number
    ppwMarket: number
    material: number
    manufacturer: number
    energySageLink: number
    dimensionsId: number
    solarPanelColorsId: number
    _all: number
  }


  export type SolarPanelAvgAggregateInputType = {
    wattage?: true
    efficiency?: true
    rating?: true
    degradation?: true
    output25?: true
    warranty?: true
    ppwMarket?: true
  }

  export type SolarPanelSumAggregateInputType = {
    wattage?: true
    efficiency?: true
    rating?: true
    degradation?: true
    output25?: true
    warranty?: true
    ppwMarket?: true
  }

  export type SolarPanelMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    wattage?: true
    efficiency?: true
    rating?: true
    degradation?: true
    output25?: true
    warranty?: true
    imagePanel?: true
    imageMounted?: true
    ppwMarket?: true
    material?: true
    manufacturer?: true
    energySageLink?: true
    dimensionsId?: true
    solarPanelColorsId?: true
  }

  export type SolarPanelMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    wattage?: true
    efficiency?: true
    rating?: true
    degradation?: true
    output25?: true
    warranty?: true
    imagePanel?: true
    imageMounted?: true
    ppwMarket?: true
    material?: true
    manufacturer?: true
    energySageLink?: true
    dimensionsId?: true
    solarPanelColorsId?: true
  }

  export type SolarPanelCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    wattage?: true
    efficiency?: true
    rating?: true
    degradation?: true
    output25?: true
    warranty?: true
    imagePanel?: true
    imageMounted?: true
    ppwMarket?: true
    material?: true
    manufacturer?: true
    energySageLink?: true
    dimensionsId?: true
    solarPanelColorsId?: true
    _all?: true
  }

  export type SolarPanelAggregateArgs = {
    /**
     * Filter which SolarPanel to aggregate.
     * 
    **/
    where?: SolarPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolarPanels to fetch.
     * 
    **/
    orderBy?: Enumerable<SolarPanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SolarPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolarPanels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolarPanels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolarPanels
    **/
    _count?: true | SolarPanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolarPanelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolarPanelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolarPanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolarPanelMaxAggregateInputType
  }

  export type GetSolarPanelAggregateType<T extends SolarPanelAggregateArgs> = {
        [P in keyof T & keyof AggregateSolarPanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolarPanel[P]>
      : GetScalarType<T[P], AggregateSolarPanel[P]>
  }




  export type SolarPanelGroupByArgs = {
    where?: SolarPanelWhereInput
    orderBy?: Enumerable<SolarPanelOrderByWithAggregationInput>
    by: Array<SolarPanelScalarFieldEnum>
    having?: SolarPanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolarPanelCountAggregateInputType | true
    _avg?: SolarPanelAvgAggregateInputType
    _sum?: SolarPanelSumAggregateInputType
    _min?: SolarPanelMinAggregateInputType
    _max?: SolarPanelMaxAggregateInputType
  }


  export type SolarPanelGroupByOutputType = {
    id: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    dimensionsId: string
    solarPanelColorsId: string
    _count: SolarPanelCountAggregateOutputType | null
    _avg: SolarPanelAvgAggregateOutputType | null
    _sum: SolarPanelSumAggregateOutputType | null
    _min: SolarPanelMinAggregateOutputType | null
    _max: SolarPanelMaxAggregateOutputType | null
  }

  type GetSolarPanelGroupByPayload<T extends SolarPanelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SolarPanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolarPanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolarPanelGroupByOutputType[P]>
            : GetScalarType<T[P], SolarPanelGroupByOutputType[P]>
        }
      >
    >


  export type SolarPanelSelect = {
    id?: boolean
    name?: boolean
    model?: boolean
    wattage?: boolean
    efficiency?: boolean
    rating?: boolean
    degradation?: boolean
    output25?: boolean
    warranty?: boolean
    imagePanel?: boolean
    imageMounted?: boolean
    dimensions?: boolean | DimensionsArgs
    ppwMarket?: boolean
    material?: boolean
    colors?: boolean | SolarPanelColorsArgs
    manufacturer?: boolean
    energySageLink?: boolean
    countries?: boolean | CountryFindManyArgs
    dimensionsId?: boolean
    solarPanelColorsId?: boolean
    installers?: boolean | InstallerSolarPanelFindManyArgs
    _count?: boolean | SolarPanelCountOutputTypeArgs
  }

  export type SolarPanelInclude = {
    dimensions?: boolean | DimensionsArgs
    colors?: boolean | SolarPanelColorsArgs
    countries?: boolean | CountryFindManyArgs
    installers?: boolean | InstallerSolarPanelFindManyArgs
    _count?: boolean | SolarPanelCountOutputTypeArgs
  }

  export type SolarPanelGetPayload<
    S extends boolean | null | undefined | SolarPanelArgs,
    U = keyof S
      > = S extends true
        ? SolarPanel
    : S extends undefined
    ? never
    : S extends SolarPanelArgs | SolarPanelFindManyArgs
    ?'include' extends U
    ? SolarPanel  & {
    [P in TrueKeys<S['include']>]:
        P extends 'dimensions' ? DimensionsGetPayload<S['include'][P]> :
        P extends 'colors' ? SolarPanelColorsGetPayload<S['include'][P]> :
        P extends 'countries' ? Array < CountryGetPayload<S['include'][P]>>  :
        P extends 'installers' ? Array < InstallerSolarPanelGetPayload<S['include'][P]>>  :
        P extends '_count' ? SolarPanelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'dimensions' ? DimensionsGetPayload<S['select'][P]> :
        P extends 'colors' ? SolarPanelColorsGetPayload<S['select'][P]> :
        P extends 'countries' ? Array < CountryGetPayload<S['select'][P]>>  :
        P extends 'installers' ? Array < InstallerSolarPanelGetPayload<S['select'][P]>>  :
        P extends '_count' ? SolarPanelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof SolarPanel ? SolarPanel[P] : never
  } 
    : SolarPanel
  : SolarPanel


  type SolarPanelCountArgs = Merge<
    Omit<SolarPanelFindManyArgs, 'select' | 'include'> & {
      select?: SolarPanelCountAggregateInputType | true
    }
  >

  export interface SolarPanelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SolarPanel that matches the filter.
     * @param {SolarPanelFindUniqueArgs} args - Arguments to find a SolarPanel
     * @example
     * // Get one SolarPanel
     * const solarPanel = await prisma.solarPanel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SolarPanelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SolarPanelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SolarPanel'> extends True ? CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>> : CheckSelect<T, Prisma__SolarPanelClient<SolarPanel | null >, Prisma__SolarPanelClient<SolarPanelGetPayload<T> | null >>

    /**
     * Find the first SolarPanel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelFindFirstArgs} args - Arguments to find a SolarPanel
     * @example
     * // Get one SolarPanel
     * const solarPanel = await prisma.solarPanel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SolarPanelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SolarPanelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SolarPanel'> extends True ? CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>> : CheckSelect<T, Prisma__SolarPanelClient<SolarPanel | null >, Prisma__SolarPanelClient<SolarPanelGetPayload<T> | null >>

    /**
     * Find zero or more SolarPanels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolarPanels
     * const solarPanels = await prisma.solarPanel.findMany()
     * 
     * // Get first 10 SolarPanels
     * const solarPanels = await prisma.solarPanel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solarPanelWithIdOnly = await prisma.solarPanel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SolarPanelFindManyArgs>(
      args?: SelectSubset<T, SolarPanelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SolarPanel>>, PrismaPromise<Array<SolarPanelGetPayload<T>>>>

    /**
     * Create a SolarPanel.
     * @param {SolarPanelCreateArgs} args - Arguments to create a SolarPanel.
     * @example
     * // Create one SolarPanel
     * const SolarPanel = await prisma.solarPanel.create({
     *   data: {
     *     // ... data to create a SolarPanel
     *   }
     * })
     * 
    **/
    create<T extends SolarPanelCreateArgs>(
      args: SelectSubset<T, SolarPanelCreateArgs>
    ): CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>>

    /**
     * Create many SolarPanels.
     *     @param {SolarPanelCreateManyArgs} args - Arguments to create many SolarPanels.
     *     @example
     *     // Create many SolarPanels
     *     const solarPanel = await prisma.solarPanel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SolarPanelCreateManyArgs>(
      args?: SelectSubset<T, SolarPanelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SolarPanel.
     * @param {SolarPanelDeleteArgs} args - Arguments to delete one SolarPanel.
     * @example
     * // Delete one SolarPanel
     * const SolarPanel = await prisma.solarPanel.delete({
     *   where: {
     *     // ... filter to delete one SolarPanel
     *   }
     * })
     * 
    **/
    delete<T extends SolarPanelDeleteArgs>(
      args: SelectSubset<T, SolarPanelDeleteArgs>
    ): CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>>

    /**
     * Update one SolarPanel.
     * @param {SolarPanelUpdateArgs} args - Arguments to update one SolarPanel.
     * @example
     * // Update one SolarPanel
     * const solarPanel = await prisma.solarPanel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SolarPanelUpdateArgs>(
      args: SelectSubset<T, SolarPanelUpdateArgs>
    ): CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>>

    /**
     * Delete zero or more SolarPanels.
     * @param {SolarPanelDeleteManyArgs} args - Arguments to filter SolarPanels to delete.
     * @example
     * // Delete a few SolarPanels
     * const { count } = await prisma.solarPanel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SolarPanelDeleteManyArgs>(
      args?: SelectSubset<T, SolarPanelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolarPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolarPanels
     * const solarPanel = await prisma.solarPanel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SolarPanelUpdateManyArgs>(
      args: SelectSubset<T, SolarPanelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SolarPanel.
     * @param {SolarPanelUpsertArgs} args - Arguments to update or create a SolarPanel.
     * @example
     * // Update or create a SolarPanel
     * const solarPanel = await prisma.solarPanel.upsert({
     *   create: {
     *     // ... data to create a SolarPanel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolarPanel we want to update
     *   }
     * })
    **/
    upsert<T extends SolarPanelUpsertArgs>(
      args: SelectSubset<T, SolarPanelUpsertArgs>
    ): CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>>

    /**
     * Find one SolarPanel that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SolarPanelFindUniqueOrThrowArgs} args - Arguments to find a SolarPanel
     * @example
     * // Get one SolarPanel
     * const solarPanel = await prisma.solarPanel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SolarPanelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SolarPanelFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>>

    /**
     * Find the first SolarPanel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelFindFirstOrThrowArgs} args - Arguments to find a SolarPanel
     * @example
     * // Get one SolarPanel
     * const solarPanel = await prisma.solarPanel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SolarPanelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SolarPanelFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SolarPanelClient<SolarPanel>, Prisma__SolarPanelClient<SolarPanelGetPayload<T>>>

    /**
     * Count the number of SolarPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelCountArgs} args - Arguments to filter SolarPanels to count.
     * @example
     * // Count the number of SolarPanels
     * const count = await prisma.solarPanel.count({
     *   where: {
     *     // ... the filter for the SolarPanels we want to count
     *   }
     * })
    **/
    count<T extends SolarPanelCountArgs>(
      args?: Subset<T, SolarPanelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolarPanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolarPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolarPanelAggregateArgs>(args: Subset<T, SolarPanelAggregateArgs>): PrismaPromise<GetSolarPanelAggregateType<T>>

    /**
     * Group by SolarPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelGroupByArgs} args - Group by arguments.
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
      T extends SolarPanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolarPanelGroupByArgs['orderBy'] }
        : { orderBy?: SolarPanelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SolarPanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolarPanelGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolarPanel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SolarPanelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    dimensions<T extends DimensionsArgs = {}>(args?: Subset<T, DimensionsArgs>): CheckSelect<T, Prisma__DimensionsClient<Dimensions | null >, Prisma__DimensionsClient<DimensionsGetPayload<T> | null >>;

    colors<T extends SolarPanelColorsArgs = {}>(args?: Subset<T, SolarPanelColorsArgs>): CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors | null >, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T> | null >>;

    countries<T extends CountryFindManyArgs = {}>(args?: Subset<T, CountryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Country>>, PrismaPromise<Array<CountryGetPayload<T>>>>;

    installers<T extends InstallerSolarPanelFindManyArgs = {}>(args?: Subset<T, InstallerSolarPanelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<InstallerSolarPanel>>, PrismaPromise<Array<InstallerSolarPanelGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SolarPanel base type for findUnique actions
   */
  export type SolarPanelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
    /**
     * Filter, which SolarPanel to fetch.
     * 
    **/
    where: SolarPanelWhereUniqueInput
  }

  /**
   * SolarPanel: findUnique
   */
  export interface SolarPanelFindUniqueArgs extends SolarPanelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SolarPanel base type for findFirst actions
   */
  export type SolarPanelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
    /**
     * Filter, which SolarPanel to fetch.
     * 
    **/
    where?: SolarPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolarPanels to fetch.
     * 
    **/
    orderBy?: Enumerable<SolarPanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolarPanels.
     * 
    **/
    cursor?: SolarPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolarPanels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolarPanels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolarPanels.
     * 
    **/
    distinct?: Enumerable<SolarPanelScalarFieldEnum>
  }

  /**
   * SolarPanel: findFirst
   */
  export interface SolarPanelFindFirstArgs extends SolarPanelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SolarPanel findMany
   */
  export type SolarPanelFindManyArgs = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
    /**
     * Filter, which SolarPanels to fetch.
     * 
    **/
    where?: SolarPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolarPanels to fetch.
     * 
    **/
    orderBy?: Enumerable<SolarPanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolarPanels.
     * 
    **/
    cursor?: SolarPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolarPanels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolarPanels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SolarPanelScalarFieldEnum>
  }


  /**
   * SolarPanel create
   */
  export type SolarPanelCreateArgs = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
    /**
     * The data needed to create a SolarPanel.
     * 
    **/
    data: XOR<SolarPanelCreateInput, SolarPanelUncheckedCreateInput>
  }


  /**
   * SolarPanel createMany
   */
  export type SolarPanelCreateManyArgs = {
    /**
     * The data used to create many SolarPanels.
     * 
    **/
    data: Enumerable<SolarPanelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SolarPanel update
   */
  export type SolarPanelUpdateArgs = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
    /**
     * The data needed to update a SolarPanel.
     * 
    **/
    data: XOR<SolarPanelUpdateInput, SolarPanelUncheckedUpdateInput>
    /**
     * Choose, which SolarPanel to update.
     * 
    **/
    where: SolarPanelWhereUniqueInput
  }


  /**
   * SolarPanel updateMany
   */
  export type SolarPanelUpdateManyArgs = {
    /**
     * The data used to update SolarPanels.
     * 
    **/
    data: XOR<SolarPanelUpdateManyMutationInput, SolarPanelUncheckedUpdateManyInput>
    /**
     * Filter which SolarPanels to update
     * 
    **/
    where?: SolarPanelWhereInput
  }


  /**
   * SolarPanel upsert
   */
  export type SolarPanelUpsertArgs = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
    /**
     * The filter to search for the SolarPanel to update in case it exists.
     * 
    **/
    where: SolarPanelWhereUniqueInput
    /**
     * In case the SolarPanel found by the `where` argument doesn't exist, create a new SolarPanel with this data.
     * 
    **/
    create: XOR<SolarPanelCreateInput, SolarPanelUncheckedCreateInput>
    /**
     * In case the SolarPanel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SolarPanelUpdateInput, SolarPanelUncheckedUpdateInput>
  }


  /**
   * SolarPanel delete
   */
  export type SolarPanelDeleteArgs = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
    /**
     * Filter which SolarPanel to delete.
     * 
    **/
    where: SolarPanelWhereUniqueInput
  }


  /**
   * SolarPanel deleteMany
   */
  export type SolarPanelDeleteManyArgs = {
    /**
     * Filter which SolarPanels to delete
     * 
    **/
    where?: SolarPanelWhereInput
  }


  /**
   * SolarPanel: findUniqueOrThrow
   */
  export type SolarPanelFindUniqueOrThrowArgs = SolarPanelFindUniqueArgsBase
      

  /**
   * SolarPanel: findFirstOrThrow
   */
  export type SolarPanelFindFirstOrThrowArgs = SolarPanelFindFirstArgsBase
      

  /**
   * SolarPanel without action
   */
  export type SolarPanelArgs = {
    /**
     * Select specific fields to fetch from the SolarPanel
     * 
    **/
    select?: SolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelInclude | null
  }



  /**
   * Model Country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs = {
    /**
     * Filter which Country to aggregate.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs = {
    where?: CountryWhereInput
    orderBy?: Enumerable<CountryOrderByWithAggregationInput>
    by: Array<CountryScalarFieldEnum>
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    id: string
    name: string
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect = {
    id?: boolean
    name?: boolean
    solarPanels?: boolean | SolarPanelFindManyArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type CountryInclude = {
    solarPanels?: boolean | SolarPanelFindManyArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type CountryGetPayload<
    S extends boolean | null | undefined | CountryArgs,
    U = keyof S
      > = S extends true
        ? Country
    : S extends undefined
    ? never
    : S extends CountryArgs | CountryFindManyArgs
    ?'include' extends U
    ? Country  & {
    [P in TrueKeys<S['include']>]:
        P extends 'solarPanels' ? Array < SolarPanelGetPayload<S['include'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'solarPanels' ? Array < SolarPanelGetPayload<S['select'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Country ? Country[P] : never
  } 
    : Country
  : Country


  type CountryCountArgs = Merge<
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }
  >

  export interface CountryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Country'> extends True ? CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>> : CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Country'> extends True ? CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>> : CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs>(
      args?: SelectSubset<T, CountryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Country>>, PrismaPromise<Array<CountryGetPayload<T>>>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs>(
      args: SelectSubset<T, CountryCreateArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs>(
      args?: SelectSubset<T, CountryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs>(
      args: SelectSubset<T, CountryDeleteArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs>(
      args: SelectSubset<T, CountryUpdateArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs>(
      args?: SelectSubset<T, CountryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs>(
      args: SelectSubset<T, CountryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs>(
      args: SelectSubset<T, CountryUpsertArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Find one Country that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Find the first Country that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    solarPanels<T extends SolarPanelFindManyArgs = {}>(args?: Subset<T, SolarPanelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SolarPanel>>, PrismaPromise<Array<SolarPanelGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Country base type for findUnique actions
   */
  export type CountryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     * 
    **/
    where: CountryWhereUniqueInput
  }

  /**
   * Country: findUnique
   */
  export interface CountryFindUniqueArgs extends CountryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country base type for findFirst actions
   */
  export type CountryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     * 
    **/
    distinct?: Enumerable<CountryScalarFieldEnum>
  }

  /**
   * Country: findFirst
   */
  export interface CountryFindFirstArgs extends CountryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findMany
   */
  export type CountryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter, which Countries to fetch.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country create
   */
  export type CountryCreateArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The data needed to create a Country.
     * 
    **/
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs = {
    /**
     * The data used to create many Countries.
     * 
    **/
    data: Enumerable<CountryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The data needed to update a Country.
     * 
    **/
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     * 
    **/
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs = {
    /**
     * The data used to update Countries.
     * 
    **/
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     * 
    **/
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The filter to search for the Country to update in case it exists.
     * 
    **/
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     * 
    **/
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter which Country to delete.
     * 
    **/
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs = {
    /**
     * Filter which Countries to delete
     * 
    **/
    where?: CountryWhereInput
  }


  /**
   * Country: findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs = CountryFindUniqueArgsBase
      

  /**
   * Country: findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs = CountryFindFirstArgsBase
      

  /**
   * Country without action
   */
  export type CountryArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
  }



  /**
   * Model Installer
   */


  export type AggregateInstaller = {
    _count: InstallerCountAggregateOutputType | null
    _min: InstallerMinAggregateOutputType | null
    _max: InstallerMaxAggregateOutputType | null
  }

  export type InstallerMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    founded: Date | null
    license: string | null
  }

  export type InstallerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    founded: Date | null
    license: string | null
  }

  export type InstallerCountAggregateOutputType = {
    id: number
    name: number
    image: number
    founded: number
    license: number
    _all: number
  }


  export type InstallerMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    founded?: true
    license?: true
  }

  export type InstallerMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    founded?: true
    license?: true
  }

  export type InstallerCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    founded?: true
    license?: true
    _all?: true
  }

  export type InstallerAggregateArgs = {
    /**
     * Filter which Installer to aggregate.
     * 
    **/
    where?: InstallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installers to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InstallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Installers
    **/
    _count?: true | InstallerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallerMaxAggregateInputType
  }

  export type GetInstallerAggregateType<T extends InstallerAggregateArgs> = {
        [P in keyof T & keyof AggregateInstaller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstaller[P]>
      : GetScalarType<T[P], AggregateInstaller[P]>
  }




  export type InstallerGroupByArgs = {
    where?: InstallerWhereInput
    orderBy?: Enumerable<InstallerOrderByWithAggregationInput>
    by: Array<InstallerScalarFieldEnum>
    having?: InstallerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallerCountAggregateInputType | true
    _min?: InstallerMinAggregateInputType
    _max?: InstallerMaxAggregateInputType
  }


  export type InstallerGroupByOutputType = {
    id: string
    name: string
    image: string
    founded: Date
    license: string
    _count: InstallerCountAggregateOutputType | null
    _min: InstallerMinAggregateOutputType | null
    _max: InstallerMaxAggregateOutputType | null
  }

  type GetInstallerGroupByPayload<T extends InstallerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InstallerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallerGroupByOutputType[P]>
            : GetScalarType<T[P], InstallerGroupByOutputType[P]>
        }
      >
    >


  export type InstallerSelect = {
    id?: boolean
    name?: boolean
    image?: boolean
    founded?: boolean
    types?: boolean | InstallerTypeFindManyArgs
    license?: boolean
    operatingStates?: boolean | StateFindManyArgs
    reviews?: boolean | InstallerReviewFindManyArgs
    solarPanels?: boolean | InstallerSolarPanelFindManyArgs
    _count?: boolean | InstallerCountOutputTypeArgs
  }

  export type InstallerInclude = {
    types?: boolean | InstallerTypeFindManyArgs
    operatingStates?: boolean | StateFindManyArgs
    reviews?: boolean | InstallerReviewFindManyArgs
    solarPanels?: boolean | InstallerSolarPanelFindManyArgs
    _count?: boolean | InstallerCountOutputTypeArgs
  }

  export type InstallerGetPayload<
    S extends boolean | null | undefined | InstallerArgs,
    U = keyof S
      > = S extends true
        ? Installer
    : S extends undefined
    ? never
    : S extends InstallerArgs | InstallerFindManyArgs
    ?'include' extends U
    ? Installer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'types' ? Array < InstallerTypeGetPayload<S['include'][P]>>  :
        P extends 'operatingStates' ? Array < StateGetPayload<S['include'][P]>>  :
        P extends 'reviews' ? Array < InstallerReviewGetPayload<S['include'][P]>>  :
        P extends 'solarPanels' ? Array < InstallerSolarPanelGetPayload<S['include'][P]>>  :
        P extends '_count' ? InstallerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'types' ? Array < InstallerTypeGetPayload<S['select'][P]>>  :
        P extends 'operatingStates' ? Array < StateGetPayload<S['select'][P]>>  :
        P extends 'reviews' ? Array < InstallerReviewGetPayload<S['select'][P]>>  :
        P extends 'solarPanels' ? Array < InstallerSolarPanelGetPayload<S['select'][P]>>  :
        P extends '_count' ? InstallerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Installer ? Installer[P] : never
  } 
    : Installer
  : Installer


  type InstallerCountArgs = Merge<
    Omit<InstallerFindManyArgs, 'select' | 'include'> & {
      select?: InstallerCountAggregateInputType | true
    }
  >

  export interface InstallerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Installer that matches the filter.
     * @param {InstallerFindUniqueArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstallerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InstallerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Installer'> extends True ? CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>> : CheckSelect<T, Prisma__InstallerClient<Installer | null >, Prisma__InstallerClient<InstallerGetPayload<T> | null >>

    /**
     * Find the first Installer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerFindFirstArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstallerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InstallerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Installer'> extends True ? CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>> : CheckSelect<T, Prisma__InstallerClient<Installer | null >, Prisma__InstallerClient<InstallerGetPayload<T> | null >>

    /**
     * Find zero or more Installers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Installers
     * const installers = await prisma.installer.findMany()
     * 
     * // Get first 10 Installers
     * const installers = await prisma.installer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installerWithIdOnly = await prisma.installer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstallerFindManyArgs>(
      args?: SelectSubset<T, InstallerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Installer>>, PrismaPromise<Array<InstallerGetPayload<T>>>>

    /**
     * Create a Installer.
     * @param {InstallerCreateArgs} args - Arguments to create a Installer.
     * @example
     * // Create one Installer
     * const Installer = await prisma.installer.create({
     *   data: {
     *     // ... data to create a Installer
     *   }
     * })
     * 
    **/
    create<T extends InstallerCreateArgs>(
      args: SelectSubset<T, InstallerCreateArgs>
    ): CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>>

    /**
     * Create many Installers.
     *     @param {InstallerCreateManyArgs} args - Arguments to create many Installers.
     *     @example
     *     // Create many Installers
     *     const installer = await prisma.installer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstallerCreateManyArgs>(
      args?: SelectSubset<T, InstallerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Installer.
     * @param {InstallerDeleteArgs} args - Arguments to delete one Installer.
     * @example
     * // Delete one Installer
     * const Installer = await prisma.installer.delete({
     *   where: {
     *     // ... filter to delete one Installer
     *   }
     * })
     * 
    **/
    delete<T extends InstallerDeleteArgs>(
      args: SelectSubset<T, InstallerDeleteArgs>
    ): CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>>

    /**
     * Update one Installer.
     * @param {InstallerUpdateArgs} args - Arguments to update one Installer.
     * @example
     * // Update one Installer
     * const installer = await prisma.installer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstallerUpdateArgs>(
      args: SelectSubset<T, InstallerUpdateArgs>
    ): CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>>

    /**
     * Delete zero or more Installers.
     * @param {InstallerDeleteManyArgs} args - Arguments to filter Installers to delete.
     * @example
     * // Delete a few Installers
     * const { count } = await prisma.installer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstallerDeleteManyArgs>(
      args?: SelectSubset<T, InstallerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Installers
     * const installer = await prisma.installer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstallerUpdateManyArgs>(
      args: SelectSubset<T, InstallerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Installer.
     * @param {InstallerUpsertArgs} args - Arguments to update or create a Installer.
     * @example
     * // Update or create a Installer
     * const installer = await prisma.installer.upsert({
     *   create: {
     *     // ... data to create a Installer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Installer we want to update
     *   }
     * })
    **/
    upsert<T extends InstallerUpsertArgs>(
      args: SelectSubset<T, InstallerUpsertArgs>
    ): CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>>

    /**
     * Find one Installer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InstallerFindUniqueOrThrowArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstallerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InstallerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>>

    /**
     * Find the first Installer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerFindFirstOrThrowArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstallerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InstallerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerClient<Installer>, Prisma__InstallerClient<InstallerGetPayload<T>>>

    /**
     * Count the number of Installers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerCountArgs} args - Arguments to filter Installers to count.
     * @example
     * // Count the number of Installers
     * const count = await prisma.installer.count({
     *   where: {
     *     // ... the filter for the Installers we want to count
     *   }
     * })
    **/
    count<T extends InstallerCountArgs>(
      args?: Subset<T, InstallerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Installer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstallerAggregateArgs>(args: Subset<T, InstallerAggregateArgs>): PrismaPromise<GetInstallerAggregateType<T>>

    /**
     * Group by Installer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerGroupByArgs} args - Group by arguments.
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
      T extends InstallerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallerGroupByArgs['orderBy'] }
        : { orderBy?: InstallerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InstallerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Installer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InstallerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    types<T extends InstallerTypeFindManyArgs = {}>(args?: Subset<T, InstallerTypeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<InstallerType>>, PrismaPromise<Array<InstallerTypeGetPayload<T>>>>;

    operatingStates<T extends StateFindManyArgs = {}>(args?: Subset<T, StateFindManyArgs>): CheckSelect<T, PrismaPromise<Array<State>>, PrismaPromise<Array<StateGetPayload<T>>>>;

    reviews<T extends InstallerReviewFindManyArgs = {}>(args?: Subset<T, InstallerReviewFindManyArgs>): CheckSelect<T, PrismaPromise<Array<InstallerReview>>, PrismaPromise<Array<InstallerReviewGetPayload<T>>>>;

    solarPanels<T extends InstallerSolarPanelFindManyArgs = {}>(args?: Subset<T, InstallerSolarPanelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<InstallerSolarPanel>>, PrismaPromise<Array<InstallerSolarPanelGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Installer base type for findUnique actions
   */
  export type InstallerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
    /**
     * Filter, which Installer to fetch.
     * 
    **/
    where: InstallerWhereUniqueInput
  }

  /**
   * Installer: findUnique
   */
  export interface InstallerFindUniqueArgs extends InstallerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Installer base type for findFirst actions
   */
  export type InstallerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
    /**
     * Filter, which Installer to fetch.
     * 
    **/
    where?: InstallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installers to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installers.
     * 
    **/
    cursor?: InstallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installers.
     * 
    **/
    distinct?: Enumerable<InstallerScalarFieldEnum>
  }

  /**
   * Installer: findFirst
   */
  export interface InstallerFindFirstArgs extends InstallerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Installer findMany
   */
  export type InstallerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
    /**
     * Filter, which Installers to fetch.
     * 
    **/
    where?: InstallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installers to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Installers.
     * 
    **/
    cursor?: InstallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InstallerScalarFieldEnum>
  }


  /**
   * Installer create
   */
  export type InstallerCreateArgs = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
    /**
     * The data needed to create a Installer.
     * 
    **/
    data: XOR<InstallerCreateInput, InstallerUncheckedCreateInput>
  }


  /**
   * Installer createMany
   */
  export type InstallerCreateManyArgs = {
    /**
     * The data used to create many Installers.
     * 
    **/
    data: Enumerable<InstallerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Installer update
   */
  export type InstallerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
    /**
     * The data needed to update a Installer.
     * 
    **/
    data: XOR<InstallerUpdateInput, InstallerUncheckedUpdateInput>
    /**
     * Choose, which Installer to update.
     * 
    **/
    where: InstallerWhereUniqueInput
  }


  /**
   * Installer updateMany
   */
  export type InstallerUpdateManyArgs = {
    /**
     * The data used to update Installers.
     * 
    **/
    data: XOR<InstallerUpdateManyMutationInput, InstallerUncheckedUpdateManyInput>
    /**
     * Filter which Installers to update
     * 
    **/
    where?: InstallerWhereInput
  }


  /**
   * Installer upsert
   */
  export type InstallerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
    /**
     * The filter to search for the Installer to update in case it exists.
     * 
    **/
    where: InstallerWhereUniqueInput
    /**
     * In case the Installer found by the `where` argument doesn't exist, create a new Installer with this data.
     * 
    **/
    create: XOR<InstallerCreateInput, InstallerUncheckedCreateInput>
    /**
     * In case the Installer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InstallerUpdateInput, InstallerUncheckedUpdateInput>
  }


  /**
   * Installer delete
   */
  export type InstallerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
    /**
     * Filter which Installer to delete.
     * 
    **/
    where: InstallerWhereUniqueInput
  }


  /**
   * Installer deleteMany
   */
  export type InstallerDeleteManyArgs = {
    /**
     * Filter which Installers to delete
     * 
    **/
    where?: InstallerWhereInput
  }


  /**
   * Installer: findUniqueOrThrow
   */
  export type InstallerFindUniqueOrThrowArgs = InstallerFindUniqueArgsBase
      

  /**
   * Installer: findFirstOrThrow
   */
  export type InstallerFindFirstOrThrowArgs = InstallerFindFirstArgsBase
      

  /**
   * Installer without action
   */
  export type InstallerArgs = {
    /**
     * Select specific fields to fetch from the Installer
     * 
    **/
    select?: InstallerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerInclude | null
  }



  /**
   * Model InstallerType
   */


  export type AggregateInstallerType = {
    _count: InstallerTypeCountAggregateOutputType | null
    _min: InstallerTypeMinAggregateOutputType | null
    _max: InstallerTypeMaxAggregateOutputType | null
  }

  export type InstallerTypeMinAggregateOutputType = {
    id: string | null
    type: InstallerTypeEnum | null
  }

  export type InstallerTypeMaxAggregateOutputType = {
    id: string | null
    type: InstallerTypeEnum | null
  }

  export type InstallerTypeCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type InstallerTypeMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type InstallerTypeMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type InstallerTypeCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type InstallerTypeAggregateArgs = {
    /**
     * Filter which InstallerType to aggregate.
     * 
    **/
    where?: InstallerTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InstallerTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstallerTypes
    **/
    _count?: true | InstallerTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallerTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallerTypeMaxAggregateInputType
  }

  export type GetInstallerTypeAggregateType<T extends InstallerTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateInstallerType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallerType[P]>
      : GetScalarType<T[P], AggregateInstallerType[P]>
  }




  export type InstallerTypeGroupByArgs = {
    where?: InstallerTypeWhereInput
    orderBy?: Enumerable<InstallerTypeOrderByWithAggregationInput>
    by: Array<InstallerTypeScalarFieldEnum>
    having?: InstallerTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallerTypeCountAggregateInputType | true
    _min?: InstallerTypeMinAggregateInputType
    _max?: InstallerTypeMaxAggregateInputType
  }


  export type InstallerTypeGroupByOutputType = {
    id: string
    type: InstallerTypeEnum
    _count: InstallerTypeCountAggregateOutputType | null
    _min: InstallerTypeMinAggregateOutputType | null
    _max: InstallerTypeMaxAggregateOutputType | null
  }

  type GetInstallerTypeGroupByPayload<T extends InstallerTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InstallerTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallerTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallerTypeGroupByOutputType[P]>
            : GetScalarType<T[P], InstallerTypeGroupByOutputType[P]>
        }
      >
    >


  export type InstallerTypeSelect = {
    id?: boolean
    installer?: boolean | InstallerFindManyArgs
    type?: boolean
    _count?: boolean | InstallerTypeCountOutputTypeArgs
  }

  export type InstallerTypeInclude = {
    installer?: boolean | InstallerFindManyArgs
    _count?: boolean | InstallerTypeCountOutputTypeArgs
  }

  export type InstallerTypeGetPayload<
    S extends boolean | null | undefined | InstallerTypeArgs,
    U = keyof S
      > = S extends true
        ? InstallerType
    : S extends undefined
    ? never
    : S extends InstallerTypeArgs | InstallerTypeFindManyArgs
    ?'include' extends U
    ? InstallerType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'installer' ? Array < InstallerGetPayload<S['include'][P]>>  :
        P extends '_count' ? InstallerTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'installer' ? Array < InstallerGetPayload<S['select'][P]>>  :
        P extends '_count' ? InstallerTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof InstallerType ? InstallerType[P] : never
  } 
    : InstallerType
  : InstallerType


  type InstallerTypeCountArgs = Merge<
    Omit<InstallerTypeFindManyArgs, 'select' | 'include'> & {
      select?: InstallerTypeCountAggregateInputType | true
    }
  >

  export interface InstallerTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one InstallerType that matches the filter.
     * @param {InstallerTypeFindUniqueArgs} args - Arguments to find a InstallerType
     * @example
     * // Get one InstallerType
     * const installerType = await prisma.installerType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstallerTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InstallerTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InstallerType'> extends True ? CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>> : CheckSelect<T, Prisma__InstallerTypeClient<InstallerType | null >, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T> | null >>

    /**
     * Find the first InstallerType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerTypeFindFirstArgs} args - Arguments to find a InstallerType
     * @example
     * // Get one InstallerType
     * const installerType = await prisma.installerType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstallerTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InstallerTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InstallerType'> extends True ? CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>> : CheckSelect<T, Prisma__InstallerTypeClient<InstallerType | null >, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T> | null >>

    /**
     * Find zero or more InstallerTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstallerTypes
     * const installerTypes = await prisma.installerType.findMany()
     * 
     * // Get first 10 InstallerTypes
     * const installerTypes = await prisma.installerType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installerTypeWithIdOnly = await prisma.installerType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstallerTypeFindManyArgs>(
      args?: SelectSubset<T, InstallerTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<InstallerType>>, PrismaPromise<Array<InstallerTypeGetPayload<T>>>>

    /**
     * Create a InstallerType.
     * @param {InstallerTypeCreateArgs} args - Arguments to create a InstallerType.
     * @example
     * // Create one InstallerType
     * const InstallerType = await prisma.installerType.create({
     *   data: {
     *     // ... data to create a InstallerType
     *   }
     * })
     * 
    **/
    create<T extends InstallerTypeCreateArgs>(
      args: SelectSubset<T, InstallerTypeCreateArgs>
    ): CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>>

    /**
     * Create many InstallerTypes.
     *     @param {InstallerTypeCreateManyArgs} args - Arguments to create many InstallerTypes.
     *     @example
     *     // Create many InstallerTypes
     *     const installerType = await prisma.installerType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstallerTypeCreateManyArgs>(
      args?: SelectSubset<T, InstallerTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a InstallerType.
     * @param {InstallerTypeDeleteArgs} args - Arguments to delete one InstallerType.
     * @example
     * // Delete one InstallerType
     * const InstallerType = await prisma.installerType.delete({
     *   where: {
     *     // ... filter to delete one InstallerType
     *   }
     * })
     * 
    **/
    delete<T extends InstallerTypeDeleteArgs>(
      args: SelectSubset<T, InstallerTypeDeleteArgs>
    ): CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>>

    /**
     * Update one InstallerType.
     * @param {InstallerTypeUpdateArgs} args - Arguments to update one InstallerType.
     * @example
     * // Update one InstallerType
     * const installerType = await prisma.installerType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstallerTypeUpdateArgs>(
      args: SelectSubset<T, InstallerTypeUpdateArgs>
    ): CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>>

    /**
     * Delete zero or more InstallerTypes.
     * @param {InstallerTypeDeleteManyArgs} args - Arguments to filter InstallerTypes to delete.
     * @example
     * // Delete a few InstallerTypes
     * const { count } = await prisma.installerType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstallerTypeDeleteManyArgs>(
      args?: SelectSubset<T, InstallerTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstallerTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstallerTypes
     * const installerType = await prisma.installerType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstallerTypeUpdateManyArgs>(
      args: SelectSubset<T, InstallerTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one InstallerType.
     * @param {InstallerTypeUpsertArgs} args - Arguments to update or create a InstallerType.
     * @example
     * // Update or create a InstallerType
     * const installerType = await prisma.installerType.upsert({
     *   create: {
     *     // ... data to create a InstallerType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstallerType we want to update
     *   }
     * })
    **/
    upsert<T extends InstallerTypeUpsertArgs>(
      args: SelectSubset<T, InstallerTypeUpsertArgs>
    ): CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>>

    /**
     * Find one InstallerType that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InstallerTypeFindUniqueOrThrowArgs} args - Arguments to find a InstallerType
     * @example
     * // Get one InstallerType
     * const installerType = await prisma.installerType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstallerTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InstallerTypeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>>

    /**
     * Find the first InstallerType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerTypeFindFirstOrThrowArgs} args - Arguments to find a InstallerType
     * @example
     * // Get one InstallerType
     * const installerType = await prisma.installerType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstallerTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InstallerTypeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerTypeClient<InstallerType>, Prisma__InstallerTypeClient<InstallerTypeGetPayload<T>>>

    /**
     * Count the number of InstallerTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerTypeCountArgs} args - Arguments to filter InstallerTypes to count.
     * @example
     * // Count the number of InstallerTypes
     * const count = await prisma.installerType.count({
     *   where: {
     *     // ... the filter for the InstallerTypes we want to count
     *   }
     * })
    **/
    count<T extends InstallerTypeCountArgs>(
      args?: Subset<T, InstallerTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallerTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstallerType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstallerTypeAggregateArgs>(args: Subset<T, InstallerTypeAggregateArgs>): PrismaPromise<GetInstallerTypeAggregateType<T>>

    /**
     * Group by InstallerType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerTypeGroupByArgs} args - Group by arguments.
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
      T extends InstallerTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallerTypeGroupByArgs['orderBy'] }
        : { orderBy?: InstallerTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InstallerTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallerTypeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstallerType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InstallerTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    installer<T extends InstallerFindManyArgs = {}>(args?: Subset<T, InstallerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Installer>>, PrismaPromise<Array<InstallerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * InstallerType base type for findUnique actions
   */
  export type InstallerTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
    /**
     * Filter, which InstallerType to fetch.
     * 
    **/
    where: InstallerTypeWhereUniqueInput
  }

  /**
   * InstallerType: findUnique
   */
  export interface InstallerTypeFindUniqueArgs extends InstallerTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InstallerType base type for findFirst actions
   */
  export type InstallerTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
    /**
     * Filter, which InstallerType to fetch.
     * 
    **/
    where?: InstallerTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstallerTypes.
     * 
    **/
    cursor?: InstallerTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstallerTypes.
     * 
    **/
    distinct?: Enumerable<InstallerTypeScalarFieldEnum>
  }

  /**
   * InstallerType: findFirst
   */
  export interface InstallerTypeFindFirstArgs extends InstallerTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InstallerType findMany
   */
  export type InstallerTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
    /**
     * Filter, which InstallerTypes to fetch.
     * 
    **/
    where?: InstallerTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstallerTypes.
     * 
    **/
    cursor?: InstallerTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InstallerTypeScalarFieldEnum>
  }


  /**
   * InstallerType create
   */
  export type InstallerTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
    /**
     * The data needed to create a InstallerType.
     * 
    **/
    data: XOR<InstallerTypeCreateInput, InstallerTypeUncheckedCreateInput>
  }


  /**
   * InstallerType createMany
   */
  export type InstallerTypeCreateManyArgs = {
    /**
     * The data used to create many InstallerTypes.
     * 
    **/
    data: Enumerable<InstallerTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * InstallerType update
   */
  export type InstallerTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
    /**
     * The data needed to update a InstallerType.
     * 
    **/
    data: XOR<InstallerTypeUpdateInput, InstallerTypeUncheckedUpdateInput>
    /**
     * Choose, which InstallerType to update.
     * 
    **/
    where: InstallerTypeWhereUniqueInput
  }


  /**
   * InstallerType updateMany
   */
  export type InstallerTypeUpdateManyArgs = {
    /**
     * The data used to update InstallerTypes.
     * 
    **/
    data: XOR<InstallerTypeUpdateManyMutationInput, InstallerTypeUncheckedUpdateManyInput>
    /**
     * Filter which InstallerTypes to update
     * 
    **/
    where?: InstallerTypeWhereInput
  }


  /**
   * InstallerType upsert
   */
  export type InstallerTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
    /**
     * The filter to search for the InstallerType to update in case it exists.
     * 
    **/
    where: InstallerTypeWhereUniqueInput
    /**
     * In case the InstallerType found by the `where` argument doesn't exist, create a new InstallerType with this data.
     * 
    **/
    create: XOR<InstallerTypeCreateInput, InstallerTypeUncheckedCreateInput>
    /**
     * In case the InstallerType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InstallerTypeUpdateInput, InstallerTypeUncheckedUpdateInput>
  }


  /**
   * InstallerType delete
   */
  export type InstallerTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
    /**
     * Filter which InstallerType to delete.
     * 
    **/
    where: InstallerTypeWhereUniqueInput
  }


  /**
   * InstallerType deleteMany
   */
  export type InstallerTypeDeleteManyArgs = {
    /**
     * Filter which InstallerTypes to delete
     * 
    **/
    where?: InstallerTypeWhereInput
  }


  /**
   * InstallerType: findUniqueOrThrow
   */
  export type InstallerTypeFindUniqueOrThrowArgs = InstallerTypeFindUniqueArgsBase
      

  /**
   * InstallerType: findFirstOrThrow
   */
  export type InstallerTypeFindFirstOrThrowArgs = InstallerTypeFindFirstArgsBase
      

  /**
   * InstallerType without action
   */
  export type InstallerTypeArgs = {
    /**
     * Select specific fields to fetch from the InstallerType
     * 
    **/
    select?: InstallerTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerTypeInclude | null
  }



  /**
   * Model InstallerReview
   */


  export type AggregateInstallerReview = {
    _count: InstallerReviewCountAggregateOutputType | null
    _avg: InstallerReviewAvgAggregateOutputType | null
    _sum: InstallerReviewSumAggregateOutputType | null
    _min: InstallerReviewMinAggregateOutputType | null
    _max: InstallerReviewMaxAggregateOutputType | null
  }

  export type InstallerReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type InstallerReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type InstallerReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
  }

  export type InstallerReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
  }

  export type InstallerReviewCountAggregateOutputType = {
    id: number
    rating: number
    _all: number
  }


  export type InstallerReviewAvgAggregateInputType = {
    rating?: true
  }

  export type InstallerReviewSumAggregateInputType = {
    rating?: true
  }

  export type InstallerReviewMinAggregateInputType = {
    id?: true
    rating?: true
  }

  export type InstallerReviewMaxAggregateInputType = {
    id?: true
    rating?: true
  }

  export type InstallerReviewCountAggregateInputType = {
    id?: true
    rating?: true
    _all?: true
  }

  export type InstallerReviewAggregateArgs = {
    /**
     * Filter which InstallerReview to aggregate.
     * 
    **/
    where?: InstallerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerReviews to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InstallerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerReviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerReviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstallerReviews
    **/
    _count?: true | InstallerReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstallerReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstallerReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallerReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallerReviewMaxAggregateInputType
  }

  export type GetInstallerReviewAggregateType<T extends InstallerReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInstallerReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallerReview[P]>
      : GetScalarType<T[P], AggregateInstallerReview[P]>
  }




  export type InstallerReviewGroupByArgs = {
    where?: InstallerReviewWhereInput
    orderBy?: Enumerable<InstallerReviewOrderByWithAggregationInput>
    by: Array<InstallerReviewScalarFieldEnum>
    having?: InstallerReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallerReviewCountAggregateInputType | true
    _avg?: InstallerReviewAvgAggregateInputType
    _sum?: InstallerReviewSumAggregateInputType
    _min?: InstallerReviewMinAggregateInputType
    _max?: InstallerReviewMaxAggregateInputType
  }


  export type InstallerReviewGroupByOutputType = {
    id: string
    rating: number
    _count: InstallerReviewCountAggregateOutputType | null
    _avg: InstallerReviewAvgAggregateOutputType | null
    _sum: InstallerReviewSumAggregateOutputType | null
    _min: InstallerReviewMinAggregateOutputType | null
    _max: InstallerReviewMaxAggregateOutputType | null
  }

  type GetInstallerReviewGroupByPayload<T extends InstallerReviewGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InstallerReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallerReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallerReviewGroupByOutputType[P]>
            : GetScalarType<T[P], InstallerReviewGroupByOutputType[P]>
        }
      >
    >


  export type InstallerReviewSelect = {
    id?: boolean
    rating?: boolean
    installer?: boolean | InstallerFindManyArgs
    _count?: boolean | InstallerReviewCountOutputTypeArgs
  }

  export type InstallerReviewInclude = {
    installer?: boolean | InstallerFindManyArgs
    _count?: boolean | InstallerReviewCountOutputTypeArgs
  }

  export type InstallerReviewGetPayload<
    S extends boolean | null | undefined | InstallerReviewArgs,
    U = keyof S
      > = S extends true
        ? InstallerReview
    : S extends undefined
    ? never
    : S extends InstallerReviewArgs | InstallerReviewFindManyArgs
    ?'include' extends U
    ? InstallerReview  & {
    [P in TrueKeys<S['include']>]:
        P extends 'installer' ? Array < InstallerGetPayload<S['include'][P]>>  :
        P extends '_count' ? InstallerReviewCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'installer' ? Array < InstallerGetPayload<S['select'][P]>>  :
        P extends '_count' ? InstallerReviewCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof InstallerReview ? InstallerReview[P] : never
  } 
    : InstallerReview
  : InstallerReview


  type InstallerReviewCountArgs = Merge<
    Omit<InstallerReviewFindManyArgs, 'select' | 'include'> & {
      select?: InstallerReviewCountAggregateInputType | true
    }
  >

  export interface InstallerReviewDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one InstallerReview that matches the filter.
     * @param {InstallerReviewFindUniqueArgs} args - Arguments to find a InstallerReview
     * @example
     * // Get one InstallerReview
     * const installerReview = await prisma.installerReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstallerReviewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InstallerReviewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InstallerReview'> extends True ? CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>> : CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview | null >, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T> | null >>

    /**
     * Find the first InstallerReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerReviewFindFirstArgs} args - Arguments to find a InstallerReview
     * @example
     * // Get one InstallerReview
     * const installerReview = await prisma.installerReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstallerReviewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InstallerReviewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InstallerReview'> extends True ? CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>> : CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview | null >, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T> | null >>

    /**
     * Find zero or more InstallerReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstallerReviews
     * const installerReviews = await prisma.installerReview.findMany()
     * 
     * // Get first 10 InstallerReviews
     * const installerReviews = await prisma.installerReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installerReviewWithIdOnly = await prisma.installerReview.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstallerReviewFindManyArgs>(
      args?: SelectSubset<T, InstallerReviewFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<InstallerReview>>, PrismaPromise<Array<InstallerReviewGetPayload<T>>>>

    /**
     * Create a InstallerReview.
     * @param {InstallerReviewCreateArgs} args - Arguments to create a InstallerReview.
     * @example
     * // Create one InstallerReview
     * const InstallerReview = await prisma.installerReview.create({
     *   data: {
     *     // ... data to create a InstallerReview
     *   }
     * })
     * 
    **/
    create<T extends InstallerReviewCreateArgs>(
      args: SelectSubset<T, InstallerReviewCreateArgs>
    ): CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>>

    /**
     * Create many InstallerReviews.
     *     @param {InstallerReviewCreateManyArgs} args - Arguments to create many InstallerReviews.
     *     @example
     *     // Create many InstallerReviews
     *     const installerReview = await prisma.installerReview.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstallerReviewCreateManyArgs>(
      args?: SelectSubset<T, InstallerReviewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a InstallerReview.
     * @param {InstallerReviewDeleteArgs} args - Arguments to delete one InstallerReview.
     * @example
     * // Delete one InstallerReview
     * const InstallerReview = await prisma.installerReview.delete({
     *   where: {
     *     // ... filter to delete one InstallerReview
     *   }
     * })
     * 
    **/
    delete<T extends InstallerReviewDeleteArgs>(
      args: SelectSubset<T, InstallerReviewDeleteArgs>
    ): CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>>

    /**
     * Update one InstallerReview.
     * @param {InstallerReviewUpdateArgs} args - Arguments to update one InstallerReview.
     * @example
     * // Update one InstallerReview
     * const installerReview = await prisma.installerReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstallerReviewUpdateArgs>(
      args: SelectSubset<T, InstallerReviewUpdateArgs>
    ): CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>>

    /**
     * Delete zero or more InstallerReviews.
     * @param {InstallerReviewDeleteManyArgs} args - Arguments to filter InstallerReviews to delete.
     * @example
     * // Delete a few InstallerReviews
     * const { count } = await prisma.installerReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstallerReviewDeleteManyArgs>(
      args?: SelectSubset<T, InstallerReviewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstallerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstallerReviews
     * const installerReview = await prisma.installerReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstallerReviewUpdateManyArgs>(
      args: SelectSubset<T, InstallerReviewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one InstallerReview.
     * @param {InstallerReviewUpsertArgs} args - Arguments to update or create a InstallerReview.
     * @example
     * // Update or create a InstallerReview
     * const installerReview = await prisma.installerReview.upsert({
     *   create: {
     *     // ... data to create a InstallerReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstallerReview we want to update
     *   }
     * })
    **/
    upsert<T extends InstallerReviewUpsertArgs>(
      args: SelectSubset<T, InstallerReviewUpsertArgs>
    ): CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>>

    /**
     * Find one InstallerReview that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InstallerReviewFindUniqueOrThrowArgs} args - Arguments to find a InstallerReview
     * @example
     * // Get one InstallerReview
     * const installerReview = await prisma.installerReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstallerReviewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InstallerReviewFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>>

    /**
     * Find the first InstallerReview that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerReviewFindFirstOrThrowArgs} args - Arguments to find a InstallerReview
     * @example
     * // Get one InstallerReview
     * const installerReview = await prisma.installerReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstallerReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InstallerReviewFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerReviewClient<InstallerReview>, Prisma__InstallerReviewClient<InstallerReviewGetPayload<T>>>

    /**
     * Count the number of InstallerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerReviewCountArgs} args - Arguments to filter InstallerReviews to count.
     * @example
     * // Count the number of InstallerReviews
     * const count = await prisma.installerReview.count({
     *   where: {
     *     // ... the filter for the InstallerReviews we want to count
     *   }
     * })
    **/
    count<T extends InstallerReviewCountArgs>(
      args?: Subset<T, InstallerReviewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallerReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstallerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstallerReviewAggregateArgs>(args: Subset<T, InstallerReviewAggregateArgs>): PrismaPromise<GetInstallerReviewAggregateType<T>>

    /**
     * Group by InstallerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerReviewGroupByArgs} args - Group by arguments.
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
      T extends InstallerReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallerReviewGroupByArgs['orderBy'] }
        : { orderBy?: InstallerReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InstallerReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallerReviewGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstallerReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InstallerReviewClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    installer<T extends InstallerFindManyArgs = {}>(args?: Subset<T, InstallerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Installer>>, PrismaPromise<Array<InstallerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * InstallerReview base type for findUnique actions
   */
  export type InstallerReviewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
    /**
     * Filter, which InstallerReview to fetch.
     * 
    **/
    where: InstallerReviewWhereUniqueInput
  }

  /**
   * InstallerReview: findUnique
   */
  export interface InstallerReviewFindUniqueArgs extends InstallerReviewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InstallerReview base type for findFirst actions
   */
  export type InstallerReviewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
    /**
     * Filter, which InstallerReview to fetch.
     * 
    **/
    where?: InstallerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerReviews to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstallerReviews.
     * 
    **/
    cursor?: InstallerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerReviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerReviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstallerReviews.
     * 
    **/
    distinct?: Enumerable<InstallerReviewScalarFieldEnum>
  }

  /**
   * InstallerReview: findFirst
   */
  export interface InstallerReviewFindFirstArgs extends InstallerReviewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InstallerReview findMany
   */
  export type InstallerReviewFindManyArgs = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
    /**
     * Filter, which InstallerReviews to fetch.
     * 
    **/
    where?: InstallerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerReviews to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstallerReviews.
     * 
    **/
    cursor?: InstallerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerReviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerReviews.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InstallerReviewScalarFieldEnum>
  }


  /**
   * InstallerReview create
   */
  export type InstallerReviewCreateArgs = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
    /**
     * The data needed to create a InstallerReview.
     * 
    **/
    data: XOR<InstallerReviewCreateInput, InstallerReviewUncheckedCreateInput>
  }


  /**
   * InstallerReview createMany
   */
  export type InstallerReviewCreateManyArgs = {
    /**
     * The data used to create many InstallerReviews.
     * 
    **/
    data: Enumerable<InstallerReviewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * InstallerReview update
   */
  export type InstallerReviewUpdateArgs = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
    /**
     * The data needed to update a InstallerReview.
     * 
    **/
    data: XOR<InstallerReviewUpdateInput, InstallerReviewUncheckedUpdateInput>
    /**
     * Choose, which InstallerReview to update.
     * 
    **/
    where: InstallerReviewWhereUniqueInput
  }


  /**
   * InstallerReview updateMany
   */
  export type InstallerReviewUpdateManyArgs = {
    /**
     * The data used to update InstallerReviews.
     * 
    **/
    data: XOR<InstallerReviewUpdateManyMutationInput, InstallerReviewUncheckedUpdateManyInput>
    /**
     * Filter which InstallerReviews to update
     * 
    **/
    where?: InstallerReviewWhereInput
  }


  /**
   * InstallerReview upsert
   */
  export type InstallerReviewUpsertArgs = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
    /**
     * The filter to search for the InstallerReview to update in case it exists.
     * 
    **/
    where: InstallerReviewWhereUniqueInput
    /**
     * In case the InstallerReview found by the `where` argument doesn't exist, create a new InstallerReview with this data.
     * 
    **/
    create: XOR<InstallerReviewCreateInput, InstallerReviewUncheckedCreateInput>
    /**
     * In case the InstallerReview was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InstallerReviewUpdateInput, InstallerReviewUncheckedUpdateInput>
  }


  /**
   * InstallerReview delete
   */
  export type InstallerReviewDeleteArgs = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
    /**
     * Filter which InstallerReview to delete.
     * 
    **/
    where: InstallerReviewWhereUniqueInput
  }


  /**
   * InstallerReview deleteMany
   */
  export type InstallerReviewDeleteManyArgs = {
    /**
     * Filter which InstallerReviews to delete
     * 
    **/
    where?: InstallerReviewWhereInput
  }


  /**
   * InstallerReview: findUniqueOrThrow
   */
  export type InstallerReviewFindUniqueOrThrowArgs = InstallerReviewFindUniqueArgsBase
      

  /**
   * InstallerReview: findFirstOrThrow
   */
  export type InstallerReviewFindFirstOrThrowArgs = InstallerReviewFindFirstArgsBase
      

  /**
   * InstallerReview without action
   */
  export type InstallerReviewArgs = {
    /**
     * Select specific fields to fetch from the InstallerReview
     * 
    **/
    select?: InstallerReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerReviewInclude | null
  }



  /**
   * Model State
   */


  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateMinAggregateOutputType = {
    name: string | null
    abbreviation: string | null
  }

  export type StateMaxAggregateOutputType = {
    name: string | null
    abbreviation: string | null
  }

  export type StateCountAggregateOutputType = {
    name: number
    abbreviation: number
    _all: number
  }


  export type StateMinAggregateInputType = {
    name?: true
    abbreviation?: true
  }

  export type StateMaxAggregateInputType = {
    name?: true
    abbreviation?: true
  }

  export type StateCountAggregateInputType = {
    name?: true
    abbreviation?: true
    _all?: true
  }

  export type StateAggregateArgs = {
    /**
     * Filter which State to aggregate.
     * 
    **/
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     * 
    **/
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs = {
    where?: StateWhereInput
    orderBy?: Enumerable<StateOrderByWithAggregationInput>
    by: Array<StateScalarFieldEnum>
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }


  export type StateGroupByOutputType = {
    name: string
    abbreviation: string
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect = {
    name?: boolean
    abbreviation?: boolean
    installer?: boolean | InstallerFindManyArgs
    _count?: boolean | StateCountOutputTypeArgs
  }

  export type StateInclude = {
    installer?: boolean | InstallerFindManyArgs
    _count?: boolean | StateCountOutputTypeArgs
  }

  export type StateGetPayload<
    S extends boolean | null | undefined | StateArgs,
    U = keyof S
      > = S extends true
        ? State
    : S extends undefined
    ? never
    : S extends StateArgs | StateFindManyArgs
    ?'include' extends U
    ? State  & {
    [P in TrueKeys<S['include']>]:
        P extends 'installer' ? Array < InstallerGetPayload<S['include'][P]>>  :
        P extends '_count' ? StateCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'installer' ? Array < InstallerGetPayload<S['select'][P]>>  :
        P extends '_count' ? StateCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof State ? State[P] : never
  } 
    : State
  : State


  type StateCountArgs = Merge<
    Omit<StateFindManyArgs, 'select' | 'include'> & {
      select?: StateCountAggregateInputType | true
    }
  >

  export interface StateDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'State'> extends True ? CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>> : CheckSelect<T, Prisma__StateClient<State | null >, Prisma__StateClient<StateGetPayload<T> | null >>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'State'> extends True ? CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>> : CheckSelect<T, Prisma__StateClient<State | null >, Prisma__StateClient<StateGetPayload<T> | null >>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const stateWithNameOnly = await prisma.state.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends StateFindManyArgs>(
      args?: SelectSubset<T, StateFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<State>>, PrismaPromise<Array<StateGetPayload<T>>>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
    **/
    create<T extends StateCreateArgs>(
      args: SelectSubset<T, StateCreateArgs>
    ): CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>>

    /**
     * Create many States.
     *     @param {StateCreateManyArgs} args - Arguments to create many States.
     *     @example
     *     // Create many States
     *     const state = await prisma.state.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StateCreateManyArgs>(
      args?: SelectSubset<T, StateCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
    **/
    delete<T extends StateDeleteArgs>(
      args: SelectSubset<T, StateDeleteArgs>
    ): CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StateUpdateArgs>(
      args: SelectSubset<T, StateUpdateArgs>
    ): CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StateDeleteManyArgs>(
      args?: SelectSubset<T, StateDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StateUpdateManyArgs>(
      args: SelectSubset<T, StateUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
    **/
    upsert<T extends StateUpsertArgs>(
      args: SelectSubset<T, StateUpsertArgs>
    ): CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>>

    /**
     * Find one State that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StateFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>>

    /**
     * Find the first State that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StateFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StateClient<State>, Prisma__StateClient<StateGetPayload<T>>>

    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StateClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    installer<T extends InstallerFindManyArgs = {}>(args?: Subset<T, InstallerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Installer>>, PrismaPromise<Array<InstallerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * State base type for findUnique actions
   */
  export type StateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     * 
    **/
    where: StateWhereUniqueInput
  }

  /**
   * State: findUnique
   */
  export interface StateFindUniqueArgs extends StateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * State base type for findFirst actions
   */
  export type StateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     * 
    **/
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     * 
    **/
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     * 
    **/
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     * 
    **/
    distinct?: Enumerable<StateScalarFieldEnum>
  }

  /**
   * State: findFirst
   */
  export interface StateFindFirstArgs extends StateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * State findMany
   */
  export type StateFindManyArgs = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
    /**
     * Filter, which States to fetch.
     * 
    **/
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     * 
    **/
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     * 
    **/
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StateScalarFieldEnum>
  }


  /**
   * State create
   */
  export type StateCreateArgs = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
    /**
     * The data needed to create a State.
     * 
    **/
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }


  /**
   * State createMany
   */
  export type StateCreateManyArgs = {
    /**
     * The data used to create many States.
     * 
    **/
    data: Enumerable<StateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * State update
   */
  export type StateUpdateArgs = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
    /**
     * The data needed to update a State.
     * 
    **/
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     * 
    **/
    where: StateWhereUniqueInput
  }


  /**
   * State updateMany
   */
  export type StateUpdateManyArgs = {
    /**
     * The data used to update States.
     * 
    **/
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     * 
    **/
    where?: StateWhereInput
  }


  /**
   * State upsert
   */
  export type StateUpsertArgs = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
    /**
     * The filter to search for the State to update in case it exists.
     * 
    **/
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     * 
    **/
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }


  /**
   * State delete
   */
  export type StateDeleteArgs = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
    /**
     * Filter which State to delete.
     * 
    **/
    where: StateWhereUniqueInput
  }


  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs = {
    /**
     * Filter which States to delete
     * 
    **/
    where?: StateWhereInput
  }


  /**
   * State: findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs = StateFindUniqueArgsBase
      

  /**
   * State: findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs = StateFindFirstArgsBase
      

  /**
   * State without action
   */
  export type StateArgs = {
    /**
     * Select specific fields to fetch from the State
     * 
    **/
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StateInclude | null
  }



  /**
   * Model InstallerSolarPanel
   */


  export type AggregateInstallerSolarPanel = {
    _count: InstallerSolarPanelCountAggregateOutputType | null
    _avg: InstallerSolarPanelAvgAggregateOutputType | null
    _sum: InstallerSolarPanelSumAggregateOutputType | null
    _min: InstallerSolarPanelMinAggregateOutputType | null
    _max: InstallerSolarPanelMaxAggregateOutputType | null
  }

  export type InstallerSolarPanelAvgAggregateOutputType = {
    cost: number | null
  }

  export type InstallerSolarPanelSumAggregateOutputType = {
    cost: number | null
  }

  export type InstallerSolarPanelMinAggregateOutputType = {
    installerId: string | null
    solarPanelId: string | null
    cost: number | null
  }

  export type InstallerSolarPanelMaxAggregateOutputType = {
    installerId: string | null
    solarPanelId: string | null
    cost: number | null
  }

  export type InstallerSolarPanelCountAggregateOutputType = {
    installerId: number
    solarPanelId: number
    cost: number
    _all: number
  }


  export type InstallerSolarPanelAvgAggregateInputType = {
    cost?: true
  }

  export type InstallerSolarPanelSumAggregateInputType = {
    cost?: true
  }

  export type InstallerSolarPanelMinAggregateInputType = {
    installerId?: true
    solarPanelId?: true
    cost?: true
  }

  export type InstallerSolarPanelMaxAggregateInputType = {
    installerId?: true
    solarPanelId?: true
    cost?: true
  }

  export type InstallerSolarPanelCountAggregateInputType = {
    installerId?: true
    solarPanelId?: true
    cost?: true
    _all?: true
  }

  export type InstallerSolarPanelAggregateArgs = {
    /**
     * Filter which InstallerSolarPanel to aggregate.
     * 
    **/
    where?: InstallerSolarPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerSolarPanels to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerSolarPanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InstallerSolarPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerSolarPanels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerSolarPanels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstallerSolarPanels
    **/
    _count?: true | InstallerSolarPanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstallerSolarPanelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstallerSolarPanelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallerSolarPanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallerSolarPanelMaxAggregateInputType
  }

  export type GetInstallerSolarPanelAggregateType<T extends InstallerSolarPanelAggregateArgs> = {
        [P in keyof T & keyof AggregateInstallerSolarPanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallerSolarPanel[P]>
      : GetScalarType<T[P], AggregateInstallerSolarPanel[P]>
  }




  export type InstallerSolarPanelGroupByArgs = {
    where?: InstallerSolarPanelWhereInput
    orderBy?: Enumerable<InstallerSolarPanelOrderByWithAggregationInput>
    by: Array<InstallerSolarPanelScalarFieldEnum>
    having?: InstallerSolarPanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallerSolarPanelCountAggregateInputType | true
    _avg?: InstallerSolarPanelAvgAggregateInputType
    _sum?: InstallerSolarPanelSumAggregateInputType
    _min?: InstallerSolarPanelMinAggregateInputType
    _max?: InstallerSolarPanelMaxAggregateInputType
  }


  export type InstallerSolarPanelGroupByOutputType = {
    installerId: string
    solarPanelId: string
    cost: number
    _count: InstallerSolarPanelCountAggregateOutputType | null
    _avg: InstallerSolarPanelAvgAggregateOutputType | null
    _sum: InstallerSolarPanelSumAggregateOutputType | null
    _min: InstallerSolarPanelMinAggregateOutputType | null
    _max: InstallerSolarPanelMaxAggregateOutputType | null
  }

  type GetInstallerSolarPanelGroupByPayload<T extends InstallerSolarPanelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InstallerSolarPanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallerSolarPanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallerSolarPanelGroupByOutputType[P]>
            : GetScalarType<T[P], InstallerSolarPanelGroupByOutputType[P]>
        }
      >
    >


  export type InstallerSolarPanelSelect = {
    installer?: boolean | InstallerArgs
    solarPanel?: boolean | SolarPanelArgs
    installerId?: boolean
    solarPanelId?: boolean
    cost?: boolean
  }

  export type InstallerSolarPanelInclude = {
    installer?: boolean | InstallerArgs
    solarPanel?: boolean | SolarPanelArgs
  }

  export type InstallerSolarPanelGetPayload<
    S extends boolean | null | undefined | InstallerSolarPanelArgs,
    U = keyof S
      > = S extends true
        ? InstallerSolarPanel
    : S extends undefined
    ? never
    : S extends InstallerSolarPanelArgs | InstallerSolarPanelFindManyArgs
    ?'include' extends U
    ? InstallerSolarPanel  & {
    [P in TrueKeys<S['include']>]:
        P extends 'installer' ? InstallerGetPayload<S['include'][P]> :
        P extends 'solarPanel' ? SolarPanelGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'installer' ? InstallerGetPayload<S['select'][P]> :
        P extends 'solarPanel' ? SolarPanelGetPayload<S['select'][P]> :  P extends keyof InstallerSolarPanel ? InstallerSolarPanel[P] : never
  } 
    : InstallerSolarPanel
  : InstallerSolarPanel


  type InstallerSolarPanelCountArgs = Merge<
    Omit<InstallerSolarPanelFindManyArgs, 'select' | 'include'> & {
      select?: InstallerSolarPanelCountAggregateInputType | true
    }
  >

  export interface InstallerSolarPanelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one InstallerSolarPanel that matches the filter.
     * @param {InstallerSolarPanelFindUniqueArgs} args - Arguments to find a InstallerSolarPanel
     * @example
     * // Get one InstallerSolarPanel
     * const installerSolarPanel = await prisma.installerSolarPanel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstallerSolarPanelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InstallerSolarPanelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InstallerSolarPanel'> extends True ? CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>> : CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel | null >, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T> | null >>

    /**
     * Find the first InstallerSolarPanel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerSolarPanelFindFirstArgs} args - Arguments to find a InstallerSolarPanel
     * @example
     * // Get one InstallerSolarPanel
     * const installerSolarPanel = await prisma.installerSolarPanel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstallerSolarPanelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InstallerSolarPanelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InstallerSolarPanel'> extends True ? CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>> : CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel | null >, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T> | null >>

    /**
     * Find zero or more InstallerSolarPanels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerSolarPanelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstallerSolarPanels
     * const installerSolarPanels = await prisma.installerSolarPanel.findMany()
     * 
     * // Get first 10 InstallerSolarPanels
     * const installerSolarPanels = await prisma.installerSolarPanel.findMany({ take: 10 })
     * 
     * // Only select the `installerId`
     * const installerSolarPanelWithInstallerIdOnly = await prisma.installerSolarPanel.findMany({ select: { installerId: true } })
     * 
    **/
    findMany<T extends InstallerSolarPanelFindManyArgs>(
      args?: SelectSubset<T, InstallerSolarPanelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<InstallerSolarPanel>>, PrismaPromise<Array<InstallerSolarPanelGetPayload<T>>>>

    /**
     * Create a InstallerSolarPanel.
     * @param {InstallerSolarPanelCreateArgs} args - Arguments to create a InstallerSolarPanel.
     * @example
     * // Create one InstallerSolarPanel
     * const InstallerSolarPanel = await prisma.installerSolarPanel.create({
     *   data: {
     *     // ... data to create a InstallerSolarPanel
     *   }
     * })
     * 
    **/
    create<T extends InstallerSolarPanelCreateArgs>(
      args: SelectSubset<T, InstallerSolarPanelCreateArgs>
    ): CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>>

    /**
     * Create many InstallerSolarPanels.
     *     @param {InstallerSolarPanelCreateManyArgs} args - Arguments to create many InstallerSolarPanels.
     *     @example
     *     // Create many InstallerSolarPanels
     *     const installerSolarPanel = await prisma.installerSolarPanel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstallerSolarPanelCreateManyArgs>(
      args?: SelectSubset<T, InstallerSolarPanelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a InstallerSolarPanel.
     * @param {InstallerSolarPanelDeleteArgs} args - Arguments to delete one InstallerSolarPanel.
     * @example
     * // Delete one InstallerSolarPanel
     * const InstallerSolarPanel = await prisma.installerSolarPanel.delete({
     *   where: {
     *     // ... filter to delete one InstallerSolarPanel
     *   }
     * })
     * 
    **/
    delete<T extends InstallerSolarPanelDeleteArgs>(
      args: SelectSubset<T, InstallerSolarPanelDeleteArgs>
    ): CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>>

    /**
     * Update one InstallerSolarPanel.
     * @param {InstallerSolarPanelUpdateArgs} args - Arguments to update one InstallerSolarPanel.
     * @example
     * // Update one InstallerSolarPanel
     * const installerSolarPanel = await prisma.installerSolarPanel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstallerSolarPanelUpdateArgs>(
      args: SelectSubset<T, InstallerSolarPanelUpdateArgs>
    ): CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>>

    /**
     * Delete zero or more InstallerSolarPanels.
     * @param {InstallerSolarPanelDeleteManyArgs} args - Arguments to filter InstallerSolarPanels to delete.
     * @example
     * // Delete a few InstallerSolarPanels
     * const { count } = await prisma.installerSolarPanel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstallerSolarPanelDeleteManyArgs>(
      args?: SelectSubset<T, InstallerSolarPanelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstallerSolarPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerSolarPanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstallerSolarPanels
     * const installerSolarPanel = await prisma.installerSolarPanel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstallerSolarPanelUpdateManyArgs>(
      args: SelectSubset<T, InstallerSolarPanelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one InstallerSolarPanel.
     * @param {InstallerSolarPanelUpsertArgs} args - Arguments to update or create a InstallerSolarPanel.
     * @example
     * // Update or create a InstallerSolarPanel
     * const installerSolarPanel = await prisma.installerSolarPanel.upsert({
     *   create: {
     *     // ... data to create a InstallerSolarPanel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstallerSolarPanel we want to update
     *   }
     * })
    **/
    upsert<T extends InstallerSolarPanelUpsertArgs>(
      args: SelectSubset<T, InstallerSolarPanelUpsertArgs>
    ): CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>>

    /**
     * Find one InstallerSolarPanel that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InstallerSolarPanelFindUniqueOrThrowArgs} args - Arguments to find a InstallerSolarPanel
     * @example
     * // Get one InstallerSolarPanel
     * const installerSolarPanel = await prisma.installerSolarPanel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstallerSolarPanelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InstallerSolarPanelFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>>

    /**
     * Find the first InstallerSolarPanel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerSolarPanelFindFirstOrThrowArgs} args - Arguments to find a InstallerSolarPanel
     * @example
     * // Get one InstallerSolarPanel
     * const installerSolarPanel = await prisma.installerSolarPanel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstallerSolarPanelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InstallerSolarPanelFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__InstallerSolarPanelClient<InstallerSolarPanel>, Prisma__InstallerSolarPanelClient<InstallerSolarPanelGetPayload<T>>>

    /**
     * Count the number of InstallerSolarPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerSolarPanelCountArgs} args - Arguments to filter InstallerSolarPanels to count.
     * @example
     * // Count the number of InstallerSolarPanels
     * const count = await prisma.installerSolarPanel.count({
     *   where: {
     *     // ... the filter for the InstallerSolarPanels we want to count
     *   }
     * })
    **/
    count<T extends InstallerSolarPanelCountArgs>(
      args?: Subset<T, InstallerSolarPanelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallerSolarPanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstallerSolarPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerSolarPanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstallerSolarPanelAggregateArgs>(args: Subset<T, InstallerSolarPanelAggregateArgs>): PrismaPromise<GetInstallerSolarPanelAggregateType<T>>

    /**
     * Group by InstallerSolarPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerSolarPanelGroupByArgs} args - Group by arguments.
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
      T extends InstallerSolarPanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallerSolarPanelGroupByArgs['orderBy'] }
        : { orderBy?: InstallerSolarPanelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InstallerSolarPanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallerSolarPanelGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstallerSolarPanel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InstallerSolarPanelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    installer<T extends InstallerArgs = {}>(args?: Subset<T, InstallerArgs>): CheckSelect<T, Prisma__InstallerClient<Installer | null >, Prisma__InstallerClient<InstallerGetPayload<T> | null >>;

    solarPanel<T extends SolarPanelArgs = {}>(args?: Subset<T, SolarPanelArgs>): CheckSelect<T, Prisma__SolarPanelClient<SolarPanel | null >, Prisma__SolarPanelClient<SolarPanelGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * InstallerSolarPanel base type for findUnique actions
   */
  export type InstallerSolarPanelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
    /**
     * Filter, which InstallerSolarPanel to fetch.
     * 
    **/
    where: InstallerSolarPanelWhereUniqueInput
  }

  /**
   * InstallerSolarPanel: findUnique
   */
  export interface InstallerSolarPanelFindUniqueArgs extends InstallerSolarPanelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InstallerSolarPanel base type for findFirst actions
   */
  export type InstallerSolarPanelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
    /**
     * Filter, which InstallerSolarPanel to fetch.
     * 
    **/
    where?: InstallerSolarPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerSolarPanels to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerSolarPanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstallerSolarPanels.
     * 
    **/
    cursor?: InstallerSolarPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerSolarPanels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerSolarPanels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstallerSolarPanels.
     * 
    **/
    distinct?: Enumerable<InstallerSolarPanelScalarFieldEnum>
  }

  /**
   * InstallerSolarPanel: findFirst
   */
  export interface InstallerSolarPanelFindFirstArgs extends InstallerSolarPanelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InstallerSolarPanel findMany
   */
  export type InstallerSolarPanelFindManyArgs = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
    /**
     * Filter, which InstallerSolarPanels to fetch.
     * 
    **/
    where?: InstallerSolarPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallerSolarPanels to fetch.
     * 
    **/
    orderBy?: Enumerable<InstallerSolarPanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstallerSolarPanels.
     * 
    **/
    cursor?: InstallerSolarPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallerSolarPanels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallerSolarPanels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InstallerSolarPanelScalarFieldEnum>
  }


  /**
   * InstallerSolarPanel create
   */
  export type InstallerSolarPanelCreateArgs = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
    /**
     * The data needed to create a InstallerSolarPanel.
     * 
    **/
    data: XOR<InstallerSolarPanelCreateInput, InstallerSolarPanelUncheckedCreateInput>
  }


  /**
   * InstallerSolarPanel createMany
   */
  export type InstallerSolarPanelCreateManyArgs = {
    /**
     * The data used to create many InstallerSolarPanels.
     * 
    **/
    data: Enumerable<InstallerSolarPanelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * InstallerSolarPanel update
   */
  export type InstallerSolarPanelUpdateArgs = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
    /**
     * The data needed to update a InstallerSolarPanel.
     * 
    **/
    data: XOR<InstallerSolarPanelUpdateInput, InstallerSolarPanelUncheckedUpdateInput>
    /**
     * Choose, which InstallerSolarPanel to update.
     * 
    **/
    where: InstallerSolarPanelWhereUniqueInput
  }


  /**
   * InstallerSolarPanel updateMany
   */
  export type InstallerSolarPanelUpdateManyArgs = {
    /**
     * The data used to update InstallerSolarPanels.
     * 
    **/
    data: XOR<InstallerSolarPanelUpdateManyMutationInput, InstallerSolarPanelUncheckedUpdateManyInput>
    /**
     * Filter which InstallerSolarPanels to update
     * 
    **/
    where?: InstallerSolarPanelWhereInput
  }


  /**
   * InstallerSolarPanel upsert
   */
  export type InstallerSolarPanelUpsertArgs = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
    /**
     * The filter to search for the InstallerSolarPanel to update in case it exists.
     * 
    **/
    where: InstallerSolarPanelWhereUniqueInput
    /**
     * In case the InstallerSolarPanel found by the `where` argument doesn't exist, create a new InstallerSolarPanel with this data.
     * 
    **/
    create: XOR<InstallerSolarPanelCreateInput, InstallerSolarPanelUncheckedCreateInput>
    /**
     * In case the InstallerSolarPanel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InstallerSolarPanelUpdateInput, InstallerSolarPanelUncheckedUpdateInput>
  }


  /**
   * InstallerSolarPanel delete
   */
  export type InstallerSolarPanelDeleteArgs = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
    /**
     * Filter which InstallerSolarPanel to delete.
     * 
    **/
    where: InstallerSolarPanelWhereUniqueInput
  }


  /**
   * InstallerSolarPanel deleteMany
   */
  export type InstallerSolarPanelDeleteManyArgs = {
    /**
     * Filter which InstallerSolarPanels to delete
     * 
    **/
    where?: InstallerSolarPanelWhereInput
  }


  /**
   * InstallerSolarPanel: findUniqueOrThrow
   */
  export type InstallerSolarPanelFindUniqueOrThrowArgs = InstallerSolarPanelFindUniqueArgsBase
      

  /**
   * InstallerSolarPanel: findFirstOrThrow
   */
  export type InstallerSolarPanelFindFirstOrThrowArgs = InstallerSolarPanelFindFirstArgsBase
      

  /**
   * InstallerSolarPanel without action
   */
  export type InstallerSolarPanelArgs = {
    /**
     * Select specific fields to fetch from the InstallerSolarPanel
     * 
    **/
    select?: InstallerSolarPanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstallerSolarPanelInclude | null
  }



  /**
   * Model Dimensions
   */


  export type AggregateDimensions = {
    _count: DimensionsCountAggregateOutputType | null
    _avg: DimensionsAvgAggregateOutputType | null
    _sum: DimensionsSumAggregateOutputType | null
    _min: DimensionsMinAggregateOutputType | null
    _max: DimensionsMaxAggregateOutputType | null
  }

  export type DimensionsAvgAggregateOutputType = {
    length: number | null
    width: number | null
    depth: number | null
  }

  export type DimensionsSumAggregateOutputType = {
    length: number | null
    width: number | null
    depth: number | null
  }

  export type DimensionsMinAggregateOutputType = {
    id: string | null
    length: number | null
    width: number | null
    depth: number | null
  }

  export type DimensionsMaxAggregateOutputType = {
    id: string | null
    length: number | null
    width: number | null
    depth: number | null
  }

  export type DimensionsCountAggregateOutputType = {
    id: number
    length: number
    width: number
    depth: number
    _all: number
  }


  export type DimensionsAvgAggregateInputType = {
    length?: true
    width?: true
    depth?: true
  }

  export type DimensionsSumAggregateInputType = {
    length?: true
    width?: true
    depth?: true
  }

  export type DimensionsMinAggregateInputType = {
    id?: true
    length?: true
    width?: true
    depth?: true
  }

  export type DimensionsMaxAggregateInputType = {
    id?: true
    length?: true
    width?: true
    depth?: true
  }

  export type DimensionsCountAggregateInputType = {
    id?: true
    length?: true
    width?: true
    depth?: true
    _all?: true
  }

  export type DimensionsAggregateArgs = {
    /**
     * Filter which Dimensions to aggregate.
     * 
    **/
    where?: DimensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensions to fetch.
     * 
    **/
    orderBy?: Enumerable<DimensionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DimensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dimensions
    **/
    _count?: true | DimensionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DimensionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DimensionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DimensionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DimensionsMaxAggregateInputType
  }

  export type GetDimensionsAggregateType<T extends DimensionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDimensions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDimensions[P]>
      : GetScalarType<T[P], AggregateDimensions[P]>
  }




  export type DimensionsGroupByArgs = {
    where?: DimensionsWhereInput
    orderBy?: Enumerable<DimensionsOrderByWithAggregationInput>
    by: Array<DimensionsScalarFieldEnum>
    having?: DimensionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DimensionsCountAggregateInputType | true
    _avg?: DimensionsAvgAggregateInputType
    _sum?: DimensionsSumAggregateInputType
    _min?: DimensionsMinAggregateInputType
    _max?: DimensionsMaxAggregateInputType
  }


  export type DimensionsGroupByOutputType = {
    id: string
    length: number
    width: number
    depth: number
    _count: DimensionsCountAggregateOutputType | null
    _avg: DimensionsAvgAggregateOutputType | null
    _sum: DimensionsSumAggregateOutputType | null
    _min: DimensionsMinAggregateOutputType | null
    _max: DimensionsMaxAggregateOutputType | null
  }

  type GetDimensionsGroupByPayload<T extends DimensionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DimensionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DimensionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DimensionsGroupByOutputType[P]>
            : GetScalarType<T[P], DimensionsGroupByOutputType[P]>
        }
      >
    >


  export type DimensionsSelect = {
    id?: boolean
    length?: boolean
    width?: boolean
    depth?: boolean
    panel?: boolean | SolarPanelFindManyArgs
    _count?: boolean | DimensionsCountOutputTypeArgs
  }

  export type DimensionsInclude = {
    panel?: boolean | SolarPanelFindManyArgs
    _count?: boolean | DimensionsCountOutputTypeArgs
  }

  export type DimensionsGetPayload<
    S extends boolean | null | undefined | DimensionsArgs,
    U = keyof S
      > = S extends true
        ? Dimensions
    : S extends undefined
    ? never
    : S extends DimensionsArgs | DimensionsFindManyArgs
    ?'include' extends U
    ? Dimensions  & {
    [P in TrueKeys<S['include']>]:
        P extends 'panel' ? Array < SolarPanelGetPayload<S['include'][P]>>  :
        P extends '_count' ? DimensionsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'panel' ? Array < SolarPanelGetPayload<S['select'][P]>>  :
        P extends '_count' ? DimensionsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Dimensions ? Dimensions[P] : never
  } 
    : Dimensions
  : Dimensions


  type DimensionsCountArgs = Merge<
    Omit<DimensionsFindManyArgs, 'select' | 'include'> & {
      select?: DimensionsCountAggregateInputType | true
    }
  >

  export interface DimensionsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dimensions that matches the filter.
     * @param {DimensionsFindUniqueArgs} args - Arguments to find a Dimensions
     * @example
     * // Get one Dimensions
     * const dimensions = await prisma.dimensions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DimensionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DimensionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dimensions'> extends True ? CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>> : CheckSelect<T, Prisma__DimensionsClient<Dimensions | null >, Prisma__DimensionsClient<DimensionsGetPayload<T> | null >>

    /**
     * Find the first Dimensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensionsFindFirstArgs} args - Arguments to find a Dimensions
     * @example
     * // Get one Dimensions
     * const dimensions = await prisma.dimensions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DimensionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DimensionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dimensions'> extends True ? CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>> : CheckSelect<T, Prisma__DimensionsClient<Dimensions | null >, Prisma__DimensionsClient<DimensionsGetPayload<T> | null >>

    /**
     * Find zero or more Dimensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dimensions
     * const dimensions = await prisma.dimensions.findMany()
     * 
     * // Get first 10 Dimensions
     * const dimensions = await prisma.dimensions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dimensionsWithIdOnly = await prisma.dimensions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DimensionsFindManyArgs>(
      args?: SelectSubset<T, DimensionsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dimensions>>, PrismaPromise<Array<DimensionsGetPayload<T>>>>

    /**
     * Create a Dimensions.
     * @param {DimensionsCreateArgs} args - Arguments to create a Dimensions.
     * @example
     * // Create one Dimensions
     * const Dimensions = await prisma.dimensions.create({
     *   data: {
     *     // ... data to create a Dimensions
     *   }
     * })
     * 
    **/
    create<T extends DimensionsCreateArgs>(
      args: SelectSubset<T, DimensionsCreateArgs>
    ): CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>>

    /**
     * Create many Dimensions.
     *     @param {DimensionsCreateManyArgs} args - Arguments to create many Dimensions.
     *     @example
     *     // Create many Dimensions
     *     const dimensions = await prisma.dimensions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DimensionsCreateManyArgs>(
      args?: SelectSubset<T, DimensionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dimensions.
     * @param {DimensionsDeleteArgs} args - Arguments to delete one Dimensions.
     * @example
     * // Delete one Dimensions
     * const Dimensions = await prisma.dimensions.delete({
     *   where: {
     *     // ... filter to delete one Dimensions
     *   }
     * })
     * 
    **/
    delete<T extends DimensionsDeleteArgs>(
      args: SelectSubset<T, DimensionsDeleteArgs>
    ): CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>>

    /**
     * Update one Dimensions.
     * @param {DimensionsUpdateArgs} args - Arguments to update one Dimensions.
     * @example
     * // Update one Dimensions
     * const dimensions = await prisma.dimensions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DimensionsUpdateArgs>(
      args: SelectSubset<T, DimensionsUpdateArgs>
    ): CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>>

    /**
     * Delete zero or more Dimensions.
     * @param {DimensionsDeleteManyArgs} args - Arguments to filter Dimensions to delete.
     * @example
     * // Delete a few Dimensions
     * const { count } = await prisma.dimensions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DimensionsDeleteManyArgs>(
      args?: SelectSubset<T, DimensionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dimensions
     * const dimensions = await prisma.dimensions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DimensionsUpdateManyArgs>(
      args: SelectSubset<T, DimensionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dimensions.
     * @param {DimensionsUpsertArgs} args - Arguments to update or create a Dimensions.
     * @example
     * // Update or create a Dimensions
     * const dimensions = await prisma.dimensions.upsert({
     *   create: {
     *     // ... data to create a Dimensions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dimensions we want to update
     *   }
     * })
    **/
    upsert<T extends DimensionsUpsertArgs>(
      args: SelectSubset<T, DimensionsUpsertArgs>
    ): CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>>

    /**
     * Find one Dimensions that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DimensionsFindUniqueOrThrowArgs} args - Arguments to find a Dimensions
     * @example
     * // Get one Dimensions
     * const dimensions = await prisma.dimensions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DimensionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DimensionsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>>

    /**
     * Find the first Dimensions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensionsFindFirstOrThrowArgs} args - Arguments to find a Dimensions
     * @example
     * // Get one Dimensions
     * const dimensions = await prisma.dimensions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DimensionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DimensionsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DimensionsClient<Dimensions>, Prisma__DimensionsClient<DimensionsGetPayload<T>>>

    /**
     * Count the number of Dimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensionsCountArgs} args - Arguments to filter Dimensions to count.
     * @example
     * // Count the number of Dimensions
     * const count = await prisma.dimensions.count({
     *   where: {
     *     // ... the filter for the Dimensions we want to count
     *   }
     * })
    **/
    count<T extends DimensionsCountArgs>(
      args?: Subset<T, DimensionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DimensionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DimensionsAggregateArgs>(args: Subset<T, DimensionsAggregateArgs>): PrismaPromise<GetDimensionsAggregateType<T>>

    /**
     * Group by Dimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensionsGroupByArgs} args - Group by arguments.
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
      T extends DimensionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DimensionsGroupByArgs['orderBy'] }
        : { orderBy?: DimensionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DimensionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDimensionsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dimensions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DimensionsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    panel<T extends SolarPanelFindManyArgs = {}>(args?: Subset<T, SolarPanelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SolarPanel>>, PrismaPromise<Array<SolarPanelGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Dimensions base type for findUnique actions
   */
  export type DimensionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
    /**
     * Filter, which Dimensions to fetch.
     * 
    **/
    where: DimensionsWhereUniqueInput
  }

  /**
   * Dimensions: findUnique
   */
  export interface DimensionsFindUniqueArgs extends DimensionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dimensions base type for findFirst actions
   */
  export type DimensionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
    /**
     * Filter, which Dimensions to fetch.
     * 
    **/
    where?: DimensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensions to fetch.
     * 
    **/
    orderBy?: Enumerable<DimensionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dimensions.
     * 
    **/
    cursor?: DimensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dimensions.
     * 
    **/
    distinct?: Enumerable<DimensionsScalarFieldEnum>
  }

  /**
   * Dimensions: findFirst
   */
  export interface DimensionsFindFirstArgs extends DimensionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dimensions findMany
   */
  export type DimensionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
    /**
     * Filter, which Dimensions to fetch.
     * 
    **/
    where?: DimensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensions to fetch.
     * 
    **/
    orderBy?: Enumerable<DimensionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dimensions.
     * 
    **/
    cursor?: DimensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DimensionsScalarFieldEnum>
  }


  /**
   * Dimensions create
   */
  export type DimensionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
    /**
     * The data needed to create a Dimensions.
     * 
    **/
    data: XOR<DimensionsCreateInput, DimensionsUncheckedCreateInput>
  }


  /**
   * Dimensions createMany
   */
  export type DimensionsCreateManyArgs = {
    /**
     * The data used to create many Dimensions.
     * 
    **/
    data: Enumerable<DimensionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dimensions update
   */
  export type DimensionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
    /**
     * The data needed to update a Dimensions.
     * 
    **/
    data: XOR<DimensionsUpdateInput, DimensionsUncheckedUpdateInput>
    /**
     * Choose, which Dimensions to update.
     * 
    **/
    where: DimensionsWhereUniqueInput
  }


  /**
   * Dimensions updateMany
   */
  export type DimensionsUpdateManyArgs = {
    /**
     * The data used to update Dimensions.
     * 
    **/
    data: XOR<DimensionsUpdateManyMutationInput, DimensionsUncheckedUpdateManyInput>
    /**
     * Filter which Dimensions to update
     * 
    **/
    where?: DimensionsWhereInput
  }


  /**
   * Dimensions upsert
   */
  export type DimensionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
    /**
     * The filter to search for the Dimensions to update in case it exists.
     * 
    **/
    where: DimensionsWhereUniqueInput
    /**
     * In case the Dimensions found by the `where` argument doesn't exist, create a new Dimensions with this data.
     * 
    **/
    create: XOR<DimensionsCreateInput, DimensionsUncheckedCreateInput>
    /**
     * In case the Dimensions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DimensionsUpdateInput, DimensionsUncheckedUpdateInput>
  }


  /**
   * Dimensions delete
   */
  export type DimensionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
    /**
     * Filter which Dimensions to delete.
     * 
    **/
    where: DimensionsWhereUniqueInput
  }


  /**
   * Dimensions deleteMany
   */
  export type DimensionsDeleteManyArgs = {
    /**
     * Filter which Dimensions to delete
     * 
    **/
    where?: DimensionsWhereInput
  }


  /**
   * Dimensions: findUniqueOrThrow
   */
  export type DimensionsFindUniqueOrThrowArgs = DimensionsFindUniqueArgsBase
      

  /**
   * Dimensions: findFirstOrThrow
   */
  export type DimensionsFindFirstOrThrowArgs = DimensionsFindFirstArgsBase
      

  /**
   * Dimensions without action
   */
  export type DimensionsArgs = {
    /**
     * Select specific fields to fetch from the Dimensions
     * 
    **/
    select?: DimensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensionsInclude | null
  }



  /**
   * Model SolarPanelColors
   */


  export type AggregateSolarPanelColors = {
    _count: SolarPanelColorsCountAggregateOutputType | null
    _min: SolarPanelColorsMinAggregateOutputType | null
    _max: SolarPanelColorsMaxAggregateOutputType | null
  }

  export type SolarPanelColorsMinAggregateOutputType = {
    id: string | null
    cell: string | null
    frame: string | null
    backsheet: string | null
  }

  export type SolarPanelColorsMaxAggregateOutputType = {
    id: string | null
    cell: string | null
    frame: string | null
    backsheet: string | null
  }

  export type SolarPanelColorsCountAggregateOutputType = {
    id: number
    cell: number
    frame: number
    backsheet: number
    _all: number
  }


  export type SolarPanelColorsMinAggregateInputType = {
    id?: true
    cell?: true
    frame?: true
    backsheet?: true
  }

  export type SolarPanelColorsMaxAggregateInputType = {
    id?: true
    cell?: true
    frame?: true
    backsheet?: true
  }

  export type SolarPanelColorsCountAggregateInputType = {
    id?: true
    cell?: true
    frame?: true
    backsheet?: true
    _all?: true
  }

  export type SolarPanelColorsAggregateArgs = {
    /**
     * Filter which SolarPanelColors to aggregate.
     * 
    **/
    where?: SolarPanelColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolarPanelColors to fetch.
     * 
    **/
    orderBy?: Enumerable<SolarPanelColorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SolarPanelColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolarPanelColors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolarPanelColors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolarPanelColors
    **/
    _count?: true | SolarPanelColorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolarPanelColorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolarPanelColorsMaxAggregateInputType
  }

  export type GetSolarPanelColorsAggregateType<T extends SolarPanelColorsAggregateArgs> = {
        [P in keyof T & keyof AggregateSolarPanelColors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolarPanelColors[P]>
      : GetScalarType<T[P], AggregateSolarPanelColors[P]>
  }




  export type SolarPanelColorsGroupByArgs = {
    where?: SolarPanelColorsWhereInput
    orderBy?: Enumerable<SolarPanelColorsOrderByWithAggregationInput>
    by: Array<SolarPanelColorsScalarFieldEnum>
    having?: SolarPanelColorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolarPanelColorsCountAggregateInputType | true
    _min?: SolarPanelColorsMinAggregateInputType
    _max?: SolarPanelColorsMaxAggregateInputType
  }


  export type SolarPanelColorsGroupByOutputType = {
    id: string
    cell: string
    frame: string
    backsheet: string
    _count: SolarPanelColorsCountAggregateOutputType | null
    _min: SolarPanelColorsMinAggregateOutputType | null
    _max: SolarPanelColorsMaxAggregateOutputType | null
  }

  type GetSolarPanelColorsGroupByPayload<T extends SolarPanelColorsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SolarPanelColorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolarPanelColorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolarPanelColorsGroupByOutputType[P]>
            : GetScalarType<T[P], SolarPanelColorsGroupByOutputType[P]>
        }
      >
    >


  export type SolarPanelColorsSelect = {
    id?: boolean
    cell?: boolean
    frame?: boolean
    backsheet?: boolean
    SolarPanel?: boolean | SolarPanelFindManyArgs
    _count?: boolean | SolarPanelColorsCountOutputTypeArgs
  }

  export type SolarPanelColorsInclude = {
    SolarPanel?: boolean | SolarPanelFindManyArgs
    _count?: boolean | SolarPanelColorsCountOutputTypeArgs
  }

  export type SolarPanelColorsGetPayload<
    S extends boolean | null | undefined | SolarPanelColorsArgs,
    U = keyof S
      > = S extends true
        ? SolarPanelColors
    : S extends undefined
    ? never
    : S extends SolarPanelColorsArgs | SolarPanelColorsFindManyArgs
    ?'include' extends U
    ? SolarPanelColors  & {
    [P in TrueKeys<S['include']>]:
        P extends 'SolarPanel' ? Array < SolarPanelGetPayload<S['include'][P]>>  :
        P extends '_count' ? SolarPanelColorsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'SolarPanel' ? Array < SolarPanelGetPayload<S['select'][P]>>  :
        P extends '_count' ? SolarPanelColorsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof SolarPanelColors ? SolarPanelColors[P] : never
  } 
    : SolarPanelColors
  : SolarPanelColors


  type SolarPanelColorsCountArgs = Merge<
    Omit<SolarPanelColorsFindManyArgs, 'select' | 'include'> & {
      select?: SolarPanelColorsCountAggregateInputType | true
    }
  >

  export interface SolarPanelColorsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SolarPanelColors that matches the filter.
     * @param {SolarPanelColorsFindUniqueArgs} args - Arguments to find a SolarPanelColors
     * @example
     * // Get one SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SolarPanelColorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SolarPanelColorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SolarPanelColors'> extends True ? CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>> : CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors | null >, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T> | null >>

    /**
     * Find the first SolarPanelColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelColorsFindFirstArgs} args - Arguments to find a SolarPanelColors
     * @example
     * // Get one SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SolarPanelColorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SolarPanelColorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SolarPanelColors'> extends True ? CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>> : CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors | null >, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T> | null >>

    /**
     * Find zero or more SolarPanelColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelColorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.findMany()
     * 
     * // Get first 10 SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solarPanelColorsWithIdOnly = await prisma.solarPanelColors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SolarPanelColorsFindManyArgs>(
      args?: SelectSubset<T, SolarPanelColorsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SolarPanelColors>>, PrismaPromise<Array<SolarPanelColorsGetPayload<T>>>>

    /**
     * Create a SolarPanelColors.
     * @param {SolarPanelColorsCreateArgs} args - Arguments to create a SolarPanelColors.
     * @example
     * // Create one SolarPanelColors
     * const SolarPanelColors = await prisma.solarPanelColors.create({
     *   data: {
     *     // ... data to create a SolarPanelColors
     *   }
     * })
     * 
    **/
    create<T extends SolarPanelColorsCreateArgs>(
      args: SelectSubset<T, SolarPanelColorsCreateArgs>
    ): CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>>

    /**
     * Create many SolarPanelColors.
     *     @param {SolarPanelColorsCreateManyArgs} args - Arguments to create many SolarPanelColors.
     *     @example
     *     // Create many SolarPanelColors
     *     const solarPanelColors = await prisma.solarPanelColors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SolarPanelColorsCreateManyArgs>(
      args?: SelectSubset<T, SolarPanelColorsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SolarPanelColors.
     * @param {SolarPanelColorsDeleteArgs} args - Arguments to delete one SolarPanelColors.
     * @example
     * // Delete one SolarPanelColors
     * const SolarPanelColors = await prisma.solarPanelColors.delete({
     *   where: {
     *     // ... filter to delete one SolarPanelColors
     *   }
     * })
     * 
    **/
    delete<T extends SolarPanelColorsDeleteArgs>(
      args: SelectSubset<T, SolarPanelColorsDeleteArgs>
    ): CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>>

    /**
     * Update one SolarPanelColors.
     * @param {SolarPanelColorsUpdateArgs} args - Arguments to update one SolarPanelColors.
     * @example
     * // Update one SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SolarPanelColorsUpdateArgs>(
      args: SelectSubset<T, SolarPanelColorsUpdateArgs>
    ): CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>>

    /**
     * Delete zero or more SolarPanelColors.
     * @param {SolarPanelColorsDeleteManyArgs} args - Arguments to filter SolarPanelColors to delete.
     * @example
     * // Delete a few SolarPanelColors
     * const { count } = await prisma.solarPanelColors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SolarPanelColorsDeleteManyArgs>(
      args?: SelectSubset<T, SolarPanelColorsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolarPanelColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelColorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SolarPanelColorsUpdateManyArgs>(
      args: SelectSubset<T, SolarPanelColorsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SolarPanelColors.
     * @param {SolarPanelColorsUpsertArgs} args - Arguments to update or create a SolarPanelColors.
     * @example
     * // Update or create a SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.upsert({
     *   create: {
     *     // ... data to create a SolarPanelColors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolarPanelColors we want to update
     *   }
     * })
    **/
    upsert<T extends SolarPanelColorsUpsertArgs>(
      args: SelectSubset<T, SolarPanelColorsUpsertArgs>
    ): CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>>

    /**
     * Find one SolarPanelColors that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SolarPanelColorsFindUniqueOrThrowArgs} args - Arguments to find a SolarPanelColors
     * @example
     * // Get one SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SolarPanelColorsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SolarPanelColorsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>>

    /**
     * Find the first SolarPanelColors that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelColorsFindFirstOrThrowArgs} args - Arguments to find a SolarPanelColors
     * @example
     * // Get one SolarPanelColors
     * const solarPanelColors = await prisma.solarPanelColors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SolarPanelColorsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SolarPanelColorsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SolarPanelColorsClient<SolarPanelColors>, Prisma__SolarPanelColorsClient<SolarPanelColorsGetPayload<T>>>

    /**
     * Count the number of SolarPanelColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelColorsCountArgs} args - Arguments to filter SolarPanelColors to count.
     * @example
     * // Count the number of SolarPanelColors
     * const count = await prisma.solarPanelColors.count({
     *   where: {
     *     // ... the filter for the SolarPanelColors we want to count
     *   }
     * })
    **/
    count<T extends SolarPanelColorsCountArgs>(
      args?: Subset<T, SolarPanelColorsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolarPanelColorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolarPanelColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelColorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolarPanelColorsAggregateArgs>(args: Subset<T, SolarPanelColorsAggregateArgs>): PrismaPromise<GetSolarPanelColorsAggregateType<T>>

    /**
     * Group by SolarPanelColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolarPanelColorsGroupByArgs} args - Group by arguments.
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
      T extends SolarPanelColorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolarPanelColorsGroupByArgs['orderBy'] }
        : { orderBy?: SolarPanelColorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SolarPanelColorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolarPanelColorsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolarPanelColors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SolarPanelColorsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    SolarPanel<T extends SolarPanelFindManyArgs = {}>(args?: Subset<T, SolarPanelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SolarPanel>>, PrismaPromise<Array<SolarPanelGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SolarPanelColors base type for findUnique actions
   */
  export type SolarPanelColorsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
    /**
     * Filter, which SolarPanelColors to fetch.
     * 
    **/
    where: SolarPanelColorsWhereUniqueInput
  }

  /**
   * SolarPanelColors: findUnique
   */
  export interface SolarPanelColorsFindUniqueArgs extends SolarPanelColorsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SolarPanelColors base type for findFirst actions
   */
  export type SolarPanelColorsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
    /**
     * Filter, which SolarPanelColors to fetch.
     * 
    **/
    where?: SolarPanelColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolarPanelColors to fetch.
     * 
    **/
    orderBy?: Enumerable<SolarPanelColorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolarPanelColors.
     * 
    **/
    cursor?: SolarPanelColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolarPanelColors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolarPanelColors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolarPanelColors.
     * 
    **/
    distinct?: Enumerable<SolarPanelColorsScalarFieldEnum>
  }

  /**
   * SolarPanelColors: findFirst
   */
  export interface SolarPanelColorsFindFirstArgs extends SolarPanelColorsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SolarPanelColors findMany
   */
  export type SolarPanelColorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
    /**
     * Filter, which SolarPanelColors to fetch.
     * 
    **/
    where?: SolarPanelColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolarPanelColors to fetch.
     * 
    **/
    orderBy?: Enumerable<SolarPanelColorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolarPanelColors.
     * 
    **/
    cursor?: SolarPanelColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolarPanelColors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolarPanelColors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SolarPanelColorsScalarFieldEnum>
  }


  /**
   * SolarPanelColors create
   */
  export type SolarPanelColorsCreateArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
    /**
     * The data needed to create a SolarPanelColors.
     * 
    **/
    data: XOR<SolarPanelColorsCreateInput, SolarPanelColorsUncheckedCreateInput>
  }


  /**
   * SolarPanelColors createMany
   */
  export type SolarPanelColorsCreateManyArgs = {
    /**
     * The data used to create many SolarPanelColors.
     * 
    **/
    data: Enumerable<SolarPanelColorsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SolarPanelColors update
   */
  export type SolarPanelColorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
    /**
     * The data needed to update a SolarPanelColors.
     * 
    **/
    data: XOR<SolarPanelColorsUpdateInput, SolarPanelColorsUncheckedUpdateInput>
    /**
     * Choose, which SolarPanelColors to update.
     * 
    **/
    where: SolarPanelColorsWhereUniqueInput
  }


  /**
   * SolarPanelColors updateMany
   */
  export type SolarPanelColorsUpdateManyArgs = {
    /**
     * The data used to update SolarPanelColors.
     * 
    **/
    data: XOR<SolarPanelColorsUpdateManyMutationInput, SolarPanelColorsUncheckedUpdateManyInput>
    /**
     * Filter which SolarPanelColors to update
     * 
    **/
    where?: SolarPanelColorsWhereInput
  }


  /**
   * SolarPanelColors upsert
   */
  export type SolarPanelColorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
    /**
     * The filter to search for the SolarPanelColors to update in case it exists.
     * 
    **/
    where: SolarPanelColorsWhereUniqueInput
    /**
     * In case the SolarPanelColors found by the `where` argument doesn't exist, create a new SolarPanelColors with this data.
     * 
    **/
    create: XOR<SolarPanelColorsCreateInput, SolarPanelColorsUncheckedCreateInput>
    /**
     * In case the SolarPanelColors was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SolarPanelColorsUpdateInput, SolarPanelColorsUncheckedUpdateInput>
  }


  /**
   * SolarPanelColors delete
   */
  export type SolarPanelColorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
    /**
     * Filter which SolarPanelColors to delete.
     * 
    **/
    where: SolarPanelColorsWhereUniqueInput
  }


  /**
   * SolarPanelColors deleteMany
   */
  export type SolarPanelColorsDeleteManyArgs = {
    /**
     * Filter which SolarPanelColors to delete
     * 
    **/
    where?: SolarPanelColorsWhereInput
  }


  /**
   * SolarPanelColors: findUniqueOrThrow
   */
  export type SolarPanelColorsFindUniqueOrThrowArgs = SolarPanelColorsFindUniqueArgsBase
      

  /**
   * SolarPanelColors: findFirstOrThrow
   */
  export type SolarPanelColorsFindFirstOrThrowArgs = SolarPanelColorsFindFirstArgsBase
      

  /**
   * SolarPanelColors without action
   */
  export type SolarPanelColorsArgs = {
    /**
     * Select specific fields to fetch from the SolarPanelColors
     * 
    **/
    select?: SolarPanelColorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SolarPanelColorsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    placeId: 'placeId',
    street: 'street',
    city: 'city',
    state: 'state',
    owner: 'owner',
    sunnumber: 'sunnumber',
    roofspace: 'roofspace',
    squareFeet: 'squareFeet',
    lotSize: 'lotSize',
    bedrooms: 'bedrooms',
    value: 'value',
    zipcode: 'zipcode',
    locationId: 'locationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    monthly: 'monthly',
    annual: 'annual',
    month: 'month',
    monthly_usage: 'monthly_usage',
    annual_usage: 'annual_usage',
    customer_type: 'customer_type'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const DimensionsScalarFieldEnum: {
    id: 'id',
    length: 'length',
    width: 'width',
    depth: 'depth'
  };

  export type DimensionsScalarFieldEnum = (typeof DimensionsScalarFieldEnum)[keyof typeof DimensionsScalarFieldEnum]


  export const InstallerReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating'
  };

  export type InstallerReviewScalarFieldEnum = (typeof InstallerReviewScalarFieldEnum)[keyof typeof InstallerReviewScalarFieldEnum]


  export const InstallerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    founded: 'founded',
    license: 'license'
  };

  export type InstallerScalarFieldEnum = (typeof InstallerScalarFieldEnum)[keyof typeof InstallerScalarFieldEnum]


  export const InstallerSolarPanelScalarFieldEnum: {
    installerId: 'installerId',
    solarPanelId: 'solarPanelId',
    cost: 'cost'
  };

  export type InstallerSolarPanelScalarFieldEnum = (typeof InstallerSolarPanelScalarFieldEnum)[keyof typeof InstallerSolarPanelScalarFieldEnum]


  export const InstallerTypeScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type InstallerTypeScalarFieldEnum = (typeof InstallerTypeScalarFieldEnum)[keyof typeof InstallerTypeScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    lat: 'lat',
    lon: 'lon'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    addressId: 'addressId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const QuoteScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId'
  };

  export type QuoteScalarFieldEnum = (typeof QuoteScalarFieldEnum)[keyof typeof QuoteScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SolarPanelColorsScalarFieldEnum: {
    id: 'id',
    cell: 'cell',
    frame: 'frame',
    backsheet: 'backsheet'
  };

  export type SolarPanelColorsScalarFieldEnum = (typeof SolarPanelColorsScalarFieldEnum)[keyof typeof SolarPanelColorsScalarFieldEnum]


  export const SolarPanelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    wattage: 'wattage',
    efficiency: 'efficiency',
    rating: 'rating',
    degradation: 'degradation',
    output25: 'output25',
    warranty: 'warranty',
    imagePanel: 'imagePanel',
    imageMounted: 'imageMounted',
    ppwMarket: 'ppwMarket',
    material: 'material',
    manufacturer: 'manufacturer',
    energySageLink: 'energySageLink',
    dimensionsId: 'dimensionsId',
    solarPanelColorsId: 'solarPanelColorsId'
  };

  export type SolarPanelScalarFieldEnum = (typeof SolarPanelScalarFieldEnum)[keyof typeof SolarPanelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StateScalarFieldEnum: {
    name: 'name',
    abbreviation: 'abbreviation'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ZipScalarFieldEnum: {
    id: 'id',
    code: 'code',
    city: 'city',
    state: 'state',
    netmetering: 'netmetering',
    commercial_rate: 'commercial_rate',
    residential_rate: 'residential_rate',
    utility: 'utility',
    sunstate: 'sunstate',
    ppkwh_state: 'ppkwh_state',
    solar_ppkwh_state: 'solar_ppkwh_state'
  };

  export type ZipScalarFieldEnum = (typeof ZipScalarFieldEnum)[keyof typeof ZipScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    properties?: PropertyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = {
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PropertyWhereInput = {
    AND?: Enumerable<PropertyWhereInput>
    OR?: Enumerable<PropertyWhereInput>
    NOT?: Enumerable<PropertyWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    addressId?: StringFilter | string
    address?: XOR<AddressRelationFilter, AddressWhereInput>
    quotes?: QuoteListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    addressId?: SortOrder
    address?: AddressOrderByWithRelationInput
    quotes?: QuoteOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = {
    id?: string
    userId_addressId?: PropertyUserIdAddressIdCompoundUniqueInput
  }

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PropertyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PropertyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PropertyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    addressId?: StringWithAggregatesFilter | string
  }

  export type QuoteWhereInput = {
    AND?: Enumerable<QuoteWhereInput>
    OR?: Enumerable<QuoteWhereInput>
    NOT?: Enumerable<QuoteWhereInput>
    id?: StringFilter | string
    propertyId?: StringFilter | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }

  export type QuoteOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type QuoteWhereUniqueInput = {
    id?: string
  }

  export type QuoteOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    _count?: QuoteCountOrderByAggregateInput
    _max?: QuoteMaxOrderByAggregateInput
    _min?: QuoteMinOrderByAggregateInput
  }

  export type QuoteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuoteScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuoteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuoteScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    propertyId?: StringWithAggregatesFilter | string
  }

  export type BillWhereInput = {
    AND?: Enumerable<BillWhereInput>
    OR?: Enumerable<BillWhereInput>
    NOT?: Enumerable<BillWhereInput>
    id?: StringFilter | string
    monthly?: IntFilter | number
    annual?: IntFilter | number
    month?: EnumMonthFilter | Month
    monthly_usage?: IntFilter | number
    annual_usage?: IntFilter | number
    customer_type?: EnumCustomerTypeFilter | CustomerType
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    monthly?: SortOrder
    annual?: SortOrder
    month?: SortOrder
    monthly_usage?: SortOrder
    annual_usage?: SortOrder
    customer_type?: SortOrder
  }

  export type BillWhereUniqueInput = {
    id?: string
  }

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    monthly?: SortOrder
    annual?: SortOrder
    month?: SortOrder
    monthly_usage?: SortOrder
    annual_usage?: SortOrder
    customer_type?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BillScalarWhereWithAggregatesInput>
    OR?: Enumerable<BillScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BillScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    monthly?: IntWithAggregatesFilter | number
    annual?: IntWithAggregatesFilter | number
    month?: EnumMonthWithAggregatesFilter | Month
    monthly_usage?: IntWithAggregatesFilter | number
    annual_usage?: IntWithAggregatesFilter | number
    customer_type?: EnumCustomerTypeWithAggregatesFilter | CustomerType
  }

  export type ZipWhereInput = {
    AND?: Enumerable<ZipWhereInput>
    OR?: Enumerable<ZipWhereInput>
    NOT?: Enumerable<ZipWhereInput>
    id?: StringFilter | string
    code?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    netmetering?: FloatFilter | number
    commercial_rate?: FloatFilter | number
    residential_rate?: FloatFilter | number
    utility?: StringFilter | string
    sunstate?: IntFilter | number
    ppkwh_state?: FloatFilter | number
    solar_ppkwh_state?: FloatFilter | number
  }

  export type ZipOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    city?: SortOrder
    state?: SortOrder
    netmetering?: SortOrder
    commercial_rate?: SortOrder
    residential_rate?: SortOrder
    utility?: SortOrder
    sunstate?: SortOrder
    ppkwh_state?: SortOrder
    solar_ppkwh_state?: SortOrder
  }

  export type ZipWhereUniqueInput = {
    id?: string
  }

  export type ZipOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    city?: SortOrder
    state?: SortOrder
    netmetering?: SortOrder
    commercial_rate?: SortOrder
    residential_rate?: SortOrder
    utility?: SortOrder
    sunstate?: SortOrder
    ppkwh_state?: SortOrder
    solar_ppkwh_state?: SortOrder
    _count?: ZipCountOrderByAggregateInput
    _avg?: ZipAvgOrderByAggregateInput
    _max?: ZipMaxOrderByAggregateInput
    _min?: ZipMinOrderByAggregateInput
    _sum?: ZipSumOrderByAggregateInput
  }

  export type ZipScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZipScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZipScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZipScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    netmetering?: FloatWithAggregatesFilter | number
    commercial_rate?: FloatWithAggregatesFilter | number
    residential_rate?: FloatWithAggregatesFilter | number
    utility?: StringWithAggregatesFilter | string
    sunstate?: IntWithAggregatesFilter | number
    ppkwh_state?: FloatWithAggregatesFilter | number
    solar_ppkwh_state?: FloatWithAggregatesFilter | number
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    id?: StringFilter | string
    placeId?: StringFilter | string
    street?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    owner?: StringNullableFilter | string | null
    sunnumber?: IntNullableFilter | number | null
    roofspace?: IntNullableFilter | number | null
    squareFeet?: IntNullableFilter | number | null
    lotSize?: IntNullableFilter | number | null
    bedrooms?: IntNullableFilter | number | null
    value?: IntNullableFilter | number | null
    zipcode?: StringFilter | string
    locationId?: StringFilter | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    properties?: PropertyListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    placeId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    owner?: SortOrder
    sunnumber?: SortOrder
    roofspace?: SortOrder
    squareFeet?: SortOrder
    lotSize?: SortOrder
    bedrooms?: SortOrder
    value?: SortOrder
    zipcode?: SortOrder
    locationId?: SortOrder
    location?: LocationOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = {
    id?: string
    placeId?: string
  }

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    placeId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    owner?: SortOrder
    sunnumber?: SortOrder
    roofspace?: SortOrder
    squareFeet?: SortOrder
    lotSize?: SortOrder
    bedrooms?: SortOrder
    value?: SortOrder
    zipcode?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    placeId?: StringWithAggregatesFilter | string
    street?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    owner?: StringNullableWithAggregatesFilter | string | null
    sunnumber?: IntNullableWithAggregatesFilter | number | null
    roofspace?: IntNullableWithAggregatesFilter | number | null
    squareFeet?: IntNullableWithAggregatesFilter | number | null
    lotSize?: IntNullableWithAggregatesFilter | number | null
    bedrooms?: IntNullableWithAggregatesFilter | number | null
    value?: IntNullableWithAggregatesFilter | number | null
    zipcode?: StringWithAggregatesFilter | string
    locationId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LocationWhereInput = {
    AND?: Enumerable<LocationWhereInput>
    OR?: Enumerable<LocationWhereInput>
    NOT?: Enumerable<LocationWhereInput>
    id?: StringFilter | string
    lat?: FloatFilter | number
    lon?: FloatFilter | number
    address?: AddressListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    address?: AddressOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = {
    id?: string
    lat_lon?: LocationLatLonCompoundUniqueInput
  }

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    lat?: FloatWithAggregatesFilter | number
    lon?: FloatWithAggregatesFilter | number
  }

  export type SolarPanelWhereInput = {
    AND?: Enumerable<SolarPanelWhereInput>
    OR?: Enumerable<SolarPanelWhereInput>
    NOT?: Enumerable<SolarPanelWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    model?: StringFilter | string
    wattage?: IntFilter | number
    efficiency?: FloatFilter | number
    rating?: IntFilter | number
    degradation?: FloatFilter | number
    output25?: FloatFilter | number
    warranty?: IntFilter | number
    imagePanel?: StringFilter | string
    imageMounted?: StringNullableFilter | string | null
    dimensions?: XOR<DimensionsRelationFilter, DimensionsWhereInput>
    ppwMarket?: FloatFilter | number
    material?: StringFilter | string
    colors?: XOR<SolarPanelColorsRelationFilter, SolarPanelColorsWhereInput>
    manufacturer?: StringFilter | string
    energySageLink?: StringFilter | string
    countries?: CountryListRelationFilter
    dimensionsId?: StringFilter | string
    solarPanelColorsId?: StringFilter | string
    installers?: InstallerSolarPanelListRelationFilter
  }

  export type SolarPanelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    wattage?: SortOrder
    efficiency?: SortOrder
    rating?: SortOrder
    degradation?: SortOrder
    output25?: SortOrder
    warranty?: SortOrder
    imagePanel?: SortOrder
    imageMounted?: SortOrder
    dimensions?: DimensionsOrderByWithRelationInput
    ppwMarket?: SortOrder
    material?: SortOrder
    colors?: SolarPanelColorsOrderByWithRelationInput
    manufacturer?: SortOrder
    energySageLink?: SortOrder
    countries?: CountryOrderByRelationAggregateInput
    dimensionsId?: SortOrder
    solarPanelColorsId?: SortOrder
    installers?: InstallerSolarPanelOrderByRelationAggregateInput
  }

  export type SolarPanelWhereUniqueInput = {
    id?: string
    name_model?: SolarPanelNameModelCompoundUniqueInput
  }

  export type SolarPanelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    wattage?: SortOrder
    efficiency?: SortOrder
    rating?: SortOrder
    degradation?: SortOrder
    output25?: SortOrder
    warranty?: SortOrder
    imagePanel?: SortOrder
    imageMounted?: SortOrder
    ppwMarket?: SortOrder
    material?: SortOrder
    manufacturer?: SortOrder
    energySageLink?: SortOrder
    dimensionsId?: SortOrder
    solarPanelColorsId?: SortOrder
    _count?: SolarPanelCountOrderByAggregateInput
    _avg?: SolarPanelAvgOrderByAggregateInput
    _max?: SolarPanelMaxOrderByAggregateInput
    _min?: SolarPanelMinOrderByAggregateInput
    _sum?: SolarPanelSumOrderByAggregateInput
  }

  export type SolarPanelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SolarPanelScalarWhereWithAggregatesInput>
    OR?: Enumerable<SolarPanelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SolarPanelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    model?: StringWithAggregatesFilter | string
    wattage?: IntWithAggregatesFilter | number
    efficiency?: FloatWithAggregatesFilter | number
    rating?: IntWithAggregatesFilter | number
    degradation?: FloatWithAggregatesFilter | number
    output25?: FloatWithAggregatesFilter | number
    warranty?: IntWithAggregatesFilter | number
    imagePanel?: StringWithAggregatesFilter | string
    imageMounted?: StringNullableWithAggregatesFilter | string | null
    ppwMarket?: FloatWithAggregatesFilter | number
    material?: StringWithAggregatesFilter | string
    manufacturer?: StringWithAggregatesFilter | string
    energySageLink?: StringWithAggregatesFilter | string
    dimensionsId?: StringWithAggregatesFilter | string
    solarPanelColorsId?: StringWithAggregatesFilter | string
  }

  export type CountryWhereInput = {
    AND?: Enumerable<CountryWhereInput>
    OR?: Enumerable<CountryWhereInput>
    NOT?: Enumerable<CountryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    solarPanels?: SolarPanelListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    solarPanels?: SolarPanelOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type InstallerWhereInput = {
    AND?: Enumerable<InstallerWhereInput>
    OR?: Enumerable<InstallerWhereInput>
    NOT?: Enumerable<InstallerWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    founded?: DateTimeFilter | Date | string
    types?: InstallerTypeListRelationFilter
    license?: StringFilter | string
    operatingStates?: StateListRelationFilter
    reviews?: InstallerReviewListRelationFilter
    solarPanels?: InstallerSolarPanelListRelationFilter
  }

  export type InstallerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    founded?: SortOrder
    types?: InstallerTypeOrderByRelationAggregateInput
    license?: SortOrder
    operatingStates?: StateOrderByRelationAggregateInput
    reviews?: InstallerReviewOrderByRelationAggregateInput
    solarPanels?: InstallerSolarPanelOrderByRelationAggregateInput
  }

  export type InstallerWhereUniqueInput = {
    id?: string
  }

  export type InstallerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    founded?: SortOrder
    license?: SortOrder
    _count?: InstallerCountOrderByAggregateInput
    _max?: InstallerMaxOrderByAggregateInput
    _min?: InstallerMinOrderByAggregateInput
  }

  export type InstallerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InstallerScalarWhereWithAggregatesInput>
    OR?: Enumerable<InstallerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InstallerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    founded?: DateTimeWithAggregatesFilter | Date | string
    license?: StringWithAggregatesFilter | string
  }

  export type InstallerTypeWhereInput = {
    AND?: Enumerable<InstallerTypeWhereInput>
    OR?: Enumerable<InstallerTypeWhereInput>
    NOT?: Enumerable<InstallerTypeWhereInput>
    id?: StringFilter | string
    installer?: InstallerListRelationFilter
    type?: EnumInstallerTypeEnumFilter | InstallerTypeEnum
  }

  export type InstallerTypeOrderByWithRelationInput = {
    id?: SortOrder
    installer?: InstallerOrderByRelationAggregateInput
    type?: SortOrder
  }

  export type InstallerTypeWhereUniqueInput = {
    id?: string
  }

  export type InstallerTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: InstallerTypeCountOrderByAggregateInput
    _max?: InstallerTypeMaxOrderByAggregateInput
    _min?: InstallerTypeMinOrderByAggregateInput
  }

  export type InstallerTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InstallerTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<InstallerTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InstallerTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: EnumInstallerTypeEnumWithAggregatesFilter | InstallerTypeEnum
  }

  export type InstallerReviewWhereInput = {
    AND?: Enumerable<InstallerReviewWhereInput>
    OR?: Enumerable<InstallerReviewWhereInput>
    NOT?: Enumerable<InstallerReviewWhereInput>
    id?: StringFilter | string
    rating?: IntFilter | number
    installer?: InstallerListRelationFilter
  }

  export type InstallerReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    installer?: InstallerOrderByRelationAggregateInput
  }

  export type InstallerReviewWhereUniqueInput = {
    id?: string
  }

  export type InstallerReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    _count?: InstallerReviewCountOrderByAggregateInput
    _avg?: InstallerReviewAvgOrderByAggregateInput
    _max?: InstallerReviewMaxOrderByAggregateInput
    _min?: InstallerReviewMinOrderByAggregateInput
    _sum?: InstallerReviewSumOrderByAggregateInput
  }

  export type InstallerReviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InstallerReviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<InstallerReviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InstallerReviewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    rating?: IntWithAggregatesFilter | number
  }

  export type StateWhereInput = {
    AND?: Enumerable<StateWhereInput>
    OR?: Enumerable<StateWhereInput>
    NOT?: Enumerable<StateWhereInput>
    name?: StringFilter | string
    abbreviation?: StringFilter | string
    installer?: InstallerListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    name?: SortOrder
    abbreviation?: SortOrder
    installer?: InstallerOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = {
    name?: string
  }

  export type StateOrderByWithAggregationInput = {
    name?: SortOrder
    abbreviation?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StateScalarWhereWithAggregatesInput>
    OR?: Enumerable<StateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StateScalarWhereWithAggregatesInput>
    name?: StringWithAggregatesFilter | string
    abbreviation?: StringWithAggregatesFilter | string
  }

  export type InstallerSolarPanelWhereInput = {
    AND?: Enumerable<InstallerSolarPanelWhereInput>
    OR?: Enumerable<InstallerSolarPanelWhereInput>
    NOT?: Enumerable<InstallerSolarPanelWhereInput>
    installer?: XOR<InstallerRelationFilter, InstallerWhereInput>
    solarPanel?: XOR<SolarPanelRelationFilter, SolarPanelWhereInput>
    installerId?: StringFilter | string
    solarPanelId?: StringFilter | string
    cost?: FloatFilter | number
  }

  export type InstallerSolarPanelOrderByWithRelationInput = {
    installer?: InstallerOrderByWithRelationInput
    solarPanel?: SolarPanelOrderByWithRelationInput
    installerId?: SortOrder
    solarPanelId?: SortOrder
    cost?: SortOrder
  }

  export type InstallerSolarPanelWhereUniqueInput = {
    installerId_solarPanelId?: InstallerSolarPanelInstallerIdSolarPanelIdCompoundUniqueInput
  }

  export type InstallerSolarPanelOrderByWithAggregationInput = {
    installerId?: SortOrder
    solarPanelId?: SortOrder
    cost?: SortOrder
    _count?: InstallerSolarPanelCountOrderByAggregateInput
    _avg?: InstallerSolarPanelAvgOrderByAggregateInput
    _max?: InstallerSolarPanelMaxOrderByAggregateInput
    _min?: InstallerSolarPanelMinOrderByAggregateInput
    _sum?: InstallerSolarPanelSumOrderByAggregateInput
  }

  export type InstallerSolarPanelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InstallerSolarPanelScalarWhereWithAggregatesInput>
    OR?: Enumerable<InstallerSolarPanelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InstallerSolarPanelScalarWhereWithAggregatesInput>
    installerId?: StringWithAggregatesFilter | string
    solarPanelId?: StringWithAggregatesFilter | string
    cost?: FloatWithAggregatesFilter | number
  }

  export type DimensionsWhereInput = {
    AND?: Enumerable<DimensionsWhereInput>
    OR?: Enumerable<DimensionsWhereInput>
    NOT?: Enumerable<DimensionsWhereInput>
    id?: StringFilter | string
    length?: FloatFilter | number
    width?: FloatFilter | number
    depth?: FloatFilter | number
    panel?: SolarPanelListRelationFilter
  }

  export type DimensionsOrderByWithRelationInput = {
    id?: SortOrder
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
    panel?: SolarPanelOrderByRelationAggregateInput
  }

  export type DimensionsWhereUniqueInput = {
    id?: string
    length_width_depth?: DimensionsLengthWidthDepthCompoundUniqueInput
  }

  export type DimensionsOrderByWithAggregationInput = {
    id?: SortOrder
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
    _count?: DimensionsCountOrderByAggregateInput
    _avg?: DimensionsAvgOrderByAggregateInput
    _max?: DimensionsMaxOrderByAggregateInput
    _min?: DimensionsMinOrderByAggregateInput
    _sum?: DimensionsSumOrderByAggregateInput
  }

  export type DimensionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DimensionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<DimensionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DimensionsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    length?: FloatWithAggregatesFilter | number
    width?: FloatWithAggregatesFilter | number
    depth?: FloatWithAggregatesFilter | number
  }

  export type SolarPanelColorsWhereInput = {
    AND?: Enumerable<SolarPanelColorsWhereInput>
    OR?: Enumerable<SolarPanelColorsWhereInput>
    NOT?: Enumerable<SolarPanelColorsWhereInput>
    id?: StringFilter | string
    cell?: StringFilter | string
    frame?: StringFilter | string
    backsheet?: StringFilter | string
    SolarPanel?: SolarPanelListRelationFilter
  }

  export type SolarPanelColorsOrderByWithRelationInput = {
    id?: SortOrder
    cell?: SortOrder
    frame?: SortOrder
    backsheet?: SortOrder
    SolarPanel?: SolarPanelOrderByRelationAggregateInput
  }

  export type SolarPanelColorsWhereUniqueInput = {
    id?: string
  }

  export type SolarPanelColorsOrderByWithAggregationInput = {
    id?: SortOrder
    cell?: SortOrder
    frame?: SortOrder
    backsheet?: SortOrder
    _count?: SolarPanelColorsCountOrderByAggregateInput
    _max?: SolarPanelColorsMaxOrderByAggregateInput
    _min?: SolarPanelColorsMinOrderByAggregateInput
  }

  export type SolarPanelColorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SolarPanelColorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SolarPanelColorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SolarPanelColorsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    cell?: StringWithAggregatesFilter | string
    frame?: StringWithAggregatesFilter | string
    backsheet?: StringWithAggregatesFilter | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken?: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken?: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken?: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutPropertiesInput
    address: AddressCreateNestedOneWithoutPropertiesInput
    quotes?: QuoteCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    userId: string
    addressId: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    quotes?: QuoteUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    userId: string
    addressId: string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteCreateInput = {
    id?: string
    property: PropertyCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateInput = {
    id?: string
    propertyId: string
  }

  export type QuoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteCreateManyInput = {
    id?: string
    propertyId: string
  }

  export type QuoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type BillCreateInput = {
    id?: string
    monthly: number
    annual: number
    month: Month
    monthly_usage: number
    annual_usage: number
    customer_type: CustomerType
  }

  export type BillUncheckedCreateInput = {
    id?: string
    monthly: number
    annual: number
    month: Month
    monthly_usage: number
    annual_usage: number
    customer_type: CustomerType
  }

  export type BillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthly?: IntFieldUpdateOperationsInput | number
    annual?: IntFieldUpdateOperationsInput | number
    month?: EnumMonthFieldUpdateOperationsInput | Month
    monthly_usage?: IntFieldUpdateOperationsInput | number
    annual_usage?: IntFieldUpdateOperationsInput | number
    customer_type?: EnumCustomerTypeFieldUpdateOperationsInput | CustomerType
  }

  export type BillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthly?: IntFieldUpdateOperationsInput | number
    annual?: IntFieldUpdateOperationsInput | number
    month?: EnumMonthFieldUpdateOperationsInput | Month
    monthly_usage?: IntFieldUpdateOperationsInput | number
    annual_usage?: IntFieldUpdateOperationsInput | number
    customer_type?: EnumCustomerTypeFieldUpdateOperationsInput | CustomerType
  }

  export type BillCreateManyInput = {
    id?: string
    monthly: number
    annual: number
    month: Month
    monthly_usage: number
    annual_usage: number
    customer_type: CustomerType
  }

  export type BillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthly?: IntFieldUpdateOperationsInput | number
    annual?: IntFieldUpdateOperationsInput | number
    month?: EnumMonthFieldUpdateOperationsInput | Month
    monthly_usage?: IntFieldUpdateOperationsInput | number
    annual_usage?: IntFieldUpdateOperationsInput | number
    customer_type?: EnumCustomerTypeFieldUpdateOperationsInput | CustomerType
  }

  export type BillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthly?: IntFieldUpdateOperationsInput | number
    annual?: IntFieldUpdateOperationsInput | number
    month?: EnumMonthFieldUpdateOperationsInput | Month
    monthly_usage?: IntFieldUpdateOperationsInput | number
    annual_usage?: IntFieldUpdateOperationsInput | number
    customer_type?: EnumCustomerTypeFieldUpdateOperationsInput | CustomerType
  }

  export type ZipCreateInput = {
    id?: string
    code: string
    city: string
    state: string
    netmetering: number
    commercial_rate: number
    residential_rate: number
    utility: string
    sunstate: number
    ppkwh_state: number
    solar_ppkwh_state: number
  }

  export type ZipUncheckedCreateInput = {
    id?: string
    code: string
    city: string
    state: string
    netmetering: number
    commercial_rate: number
    residential_rate: number
    utility: string
    sunstate: number
    ppkwh_state: number
    solar_ppkwh_state: number
  }

  export type ZipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    netmetering?: FloatFieldUpdateOperationsInput | number
    commercial_rate?: FloatFieldUpdateOperationsInput | number
    residential_rate?: FloatFieldUpdateOperationsInput | number
    utility?: StringFieldUpdateOperationsInput | string
    sunstate?: IntFieldUpdateOperationsInput | number
    ppkwh_state?: FloatFieldUpdateOperationsInput | number
    solar_ppkwh_state?: FloatFieldUpdateOperationsInput | number
  }

  export type ZipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    netmetering?: FloatFieldUpdateOperationsInput | number
    commercial_rate?: FloatFieldUpdateOperationsInput | number
    residential_rate?: FloatFieldUpdateOperationsInput | number
    utility?: StringFieldUpdateOperationsInput | string
    sunstate?: IntFieldUpdateOperationsInput | number
    ppkwh_state?: FloatFieldUpdateOperationsInput | number
    solar_ppkwh_state?: FloatFieldUpdateOperationsInput | number
  }

  export type ZipCreateManyInput = {
    id?: string
    code: string
    city: string
    state: string
    netmetering: number
    commercial_rate: number
    residential_rate: number
    utility: string
    sunstate: number
    ppkwh_state: number
    solar_ppkwh_state: number
  }

  export type ZipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    netmetering?: FloatFieldUpdateOperationsInput | number
    commercial_rate?: FloatFieldUpdateOperationsInput | number
    residential_rate?: FloatFieldUpdateOperationsInput | number
    utility?: StringFieldUpdateOperationsInput | string
    sunstate?: IntFieldUpdateOperationsInput | number
    ppkwh_state?: FloatFieldUpdateOperationsInput | number
    solar_ppkwh_state?: FloatFieldUpdateOperationsInput | number
  }

  export type ZipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    netmetering?: FloatFieldUpdateOperationsInput | number
    commercial_rate?: FloatFieldUpdateOperationsInput | number
    residential_rate?: FloatFieldUpdateOperationsInput | number
    utility?: StringFieldUpdateOperationsInput | string
    sunstate?: IntFieldUpdateOperationsInput | number
    ppkwh_state?: FloatFieldUpdateOperationsInput | number
    solar_ppkwh_state?: FloatFieldUpdateOperationsInput | number
  }

  export type AddressCreateInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    location: LocationCreateNestedOneWithoutAddressInput
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    locationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutAddressNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    locationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    lat: number
    lon: number
    address?: AddressCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    lat: number
    lon: number
    address?: AddressUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    address?: AddressUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    address?: AddressUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    lat: number
    lon: number
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
  }

  export type SolarPanelCreateInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    dimensions: DimensionsCreateNestedOneWithoutPanelInput
    ppwMarket: number
    material: string
    colors: SolarPanelColorsCreateNestedOneWithoutSolarPanelInput
    manufacturer: string
    energySageLink: string
    countries?: CountryCreateNestedManyWithoutSolarPanelsInput
    installers?: InstallerSolarPanelCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelUncheckedCreateInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    countries?: CountryUncheckedCreateNestedManyWithoutSolarPanelsInput
    dimensionsId: string
    solarPanelColorsId: string
    installers?: InstallerSolarPanelUncheckedCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: DimensionsUpdateOneRequiredWithoutPanelNestedInput
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    colors?: SolarPanelColorsUpdateOneRequiredWithoutSolarPanelNestedInput
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUpdateManyWithoutSolarPanelsNestedInput
    installers?: InstallerSolarPanelUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUncheckedUpdateManyWithoutSolarPanelsNestedInput
    dimensionsId?: StringFieldUpdateOperationsInput | string
    solarPanelColorsId?: StringFieldUpdateOperationsInput | string
    installers?: InstallerSolarPanelUncheckedUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelCreateManyInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    dimensionsId: string
    solarPanelColorsId: string
  }

  export type SolarPanelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
  }

  export type SolarPanelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    dimensionsId?: StringFieldUpdateOperationsInput | string
    solarPanelColorsId?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    solarPanels?: SolarPanelCreateNestedManyWithoutCountriesInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    solarPanels?: SolarPanelUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    solarPanels?: SolarPanelUpdateManyWithoutCountriesNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    solarPanels?: SolarPanelUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerCreateInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeCreateNestedManyWithoutInstallerInput
    license: string
    operatingStates?: StateCreateNestedManyWithoutInstallerInput
    reviews?: InstallerReviewCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelCreateNestedManyWithoutInstallerInput
  }

  export type InstallerUncheckedCreateInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeUncheckedCreateNestedManyWithoutInstallerInput
    license: string
    operatingStates?: StateUncheckedCreateNestedManyWithoutInstallerInput
    reviews?: InstallerReviewUncheckedCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelUncheckedCreateNestedManyWithoutInstallerInput
  }

  export type InstallerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUpdateManyWithoutInstallerNestedInput
    reviews?: InstallerReviewUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUncheckedUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUncheckedUpdateManyWithoutInstallerNestedInput
    reviews?: InstallerReviewUncheckedUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUncheckedUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerCreateManyInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    license: string
  }

  export type InstallerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerTypeCreateInput = {
    id?: string
    installer?: InstallerCreateNestedManyWithoutTypesInput
    type: InstallerTypeEnum
  }

  export type InstallerTypeUncheckedCreateInput = {
    id?: string
    installer?: InstallerUncheckedCreateNestedManyWithoutTypesInput
    type: InstallerTypeEnum
  }

  export type InstallerTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installer?: InstallerUpdateManyWithoutTypesNestedInput
    type?: EnumInstallerTypeEnumFieldUpdateOperationsInput | InstallerTypeEnum
  }

  export type InstallerTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installer?: InstallerUncheckedUpdateManyWithoutTypesNestedInput
    type?: EnumInstallerTypeEnumFieldUpdateOperationsInput | InstallerTypeEnum
  }

  export type InstallerTypeCreateManyInput = {
    id?: string
    type: InstallerTypeEnum
  }

  export type InstallerTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstallerTypeEnumFieldUpdateOperationsInput | InstallerTypeEnum
  }

  export type InstallerTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstallerTypeEnumFieldUpdateOperationsInput | InstallerTypeEnum
  }

  export type InstallerReviewCreateInput = {
    id?: string
    rating: number
    installer?: InstallerCreateNestedManyWithoutReviewsInput
  }

  export type InstallerReviewUncheckedCreateInput = {
    id?: string
    rating: number
    installer?: InstallerUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type InstallerReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    installer?: InstallerUpdateManyWithoutReviewsNestedInput
  }

  export type InstallerReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    installer?: InstallerUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type InstallerReviewCreateManyInput = {
    id?: string
    rating: number
  }

  export type InstallerReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type InstallerReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type StateCreateInput = {
    name: string
    abbreviation: string
    installer?: InstallerCreateNestedManyWithoutOperatingStatesInput
  }

  export type StateUncheckedCreateInput = {
    name: string
    abbreviation: string
    installer?: InstallerUncheckedCreateNestedManyWithoutOperatingStatesInput
  }

  export type StateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    installer?: InstallerUpdateManyWithoutOperatingStatesNestedInput
  }

  export type StateUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    installer?: InstallerUncheckedUpdateManyWithoutOperatingStatesNestedInput
  }

  export type StateCreateManyInput = {
    name: string
    abbreviation: string
  }

  export type StateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerSolarPanelCreateInput = {
    installer: InstallerCreateNestedOneWithoutSolarPanelsInput
    solarPanel: SolarPanelCreateNestedOneWithoutInstallersInput
    cost: number
  }

  export type InstallerSolarPanelUncheckedCreateInput = {
    installerId: string
    solarPanelId: string
    cost: number
  }

  export type InstallerSolarPanelUpdateInput = {
    installer?: InstallerUpdateOneRequiredWithoutSolarPanelsNestedInput
    solarPanel?: SolarPanelUpdateOneRequiredWithoutInstallersNestedInput
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelUncheckedUpdateInput = {
    installerId?: StringFieldUpdateOperationsInput | string
    solarPanelId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelCreateManyInput = {
    installerId: string
    solarPanelId: string
    cost: number
  }

  export type InstallerSolarPanelUpdateManyMutationInput = {
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelUncheckedUpdateManyInput = {
    installerId?: StringFieldUpdateOperationsInput | string
    solarPanelId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type DimensionsCreateInput = {
    id?: string
    length: number
    width: number
    depth: number
    panel?: SolarPanelCreateNestedManyWithoutDimensionsInput
  }

  export type DimensionsUncheckedCreateInput = {
    id?: string
    length: number
    width: number
    depth: number
    panel?: SolarPanelUncheckedCreateNestedManyWithoutDimensionsInput
  }

  export type DimensionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    depth?: FloatFieldUpdateOperationsInput | number
    panel?: SolarPanelUpdateManyWithoutDimensionsNestedInput
  }

  export type DimensionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    depth?: FloatFieldUpdateOperationsInput | number
    panel?: SolarPanelUncheckedUpdateManyWithoutDimensionsNestedInput
  }

  export type DimensionsCreateManyInput = {
    id?: string
    length: number
    width: number
    depth: number
  }

  export type DimensionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    depth?: FloatFieldUpdateOperationsInput | number
  }

  export type DimensionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    depth?: FloatFieldUpdateOperationsInput | number
  }

  export type SolarPanelColorsCreateInput = {
    id?: string
    cell: string
    frame: string
    backsheet: string
    SolarPanel?: SolarPanelCreateNestedManyWithoutColorsInput
  }

  export type SolarPanelColorsUncheckedCreateInput = {
    id?: string
    cell: string
    frame: string
    backsheet: string
    SolarPanel?: SolarPanelUncheckedCreateNestedManyWithoutColorsInput
  }

  export type SolarPanelColorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    frame?: StringFieldUpdateOperationsInput | string
    backsheet?: StringFieldUpdateOperationsInput | string
    SolarPanel?: SolarPanelUpdateManyWithoutColorsNestedInput
  }

  export type SolarPanelColorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    frame?: StringFieldUpdateOperationsInput | string
    backsheet?: StringFieldUpdateOperationsInput | string
    SolarPanel?: SolarPanelUncheckedUpdateManyWithoutColorsNestedInput
  }

  export type SolarPanelColorsCreateManyInput = {
    id?: string
    cell: string
    frame: string
    backsheet: string
  }

  export type SolarPanelColorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    frame?: StringFieldUpdateOperationsInput | string
    backsheet?: StringFieldUpdateOperationsInput | string
  }

  export type SolarPanelColorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    frame?: StringFieldUpdateOperationsInput | string
    backsheet?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type QuoteListRelationFilter = {
    every?: QuoteWhereInput
    some?: QuoteWhereInput
    none?: QuoteWhereInput
  }

  export type QuoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyUserIdAddressIdCompoundUniqueInput = {
    userId: string
    addressId: string
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type PropertyRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type QuoteCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type QuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type QuoteMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumMonthFilter = {
    equals?: Month
    in?: Enumerable<Month>
    notIn?: Enumerable<Month>
    not?: NestedEnumMonthFilter | Month
  }

  export type EnumCustomerTypeFilter = {
    equals?: CustomerType
    in?: Enumerable<CustomerType>
    notIn?: Enumerable<CustomerType>
    not?: NestedEnumCustomerTypeFilter | CustomerType
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    monthly?: SortOrder
    annual?: SortOrder
    month?: SortOrder
    monthly_usage?: SortOrder
    annual_usage?: SortOrder
    customer_type?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    monthly?: SortOrder
    annual?: SortOrder
    monthly_usage?: SortOrder
    annual_usage?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    monthly?: SortOrder
    annual?: SortOrder
    month?: SortOrder
    monthly_usage?: SortOrder
    annual_usage?: SortOrder
    customer_type?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    monthly?: SortOrder
    annual?: SortOrder
    month?: SortOrder
    monthly_usage?: SortOrder
    annual_usage?: SortOrder
    customer_type?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    monthly?: SortOrder
    annual?: SortOrder
    monthly_usage?: SortOrder
    annual_usage?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumMonthWithAggregatesFilter = {
    equals?: Month
    in?: Enumerable<Month>
    notIn?: Enumerable<Month>
    not?: NestedEnumMonthWithAggregatesFilter | Month
    _count?: NestedIntFilter
    _min?: NestedEnumMonthFilter
    _max?: NestedEnumMonthFilter
  }

  export type EnumCustomerTypeWithAggregatesFilter = {
    equals?: CustomerType
    in?: Enumerable<CustomerType>
    notIn?: Enumerable<CustomerType>
    not?: NestedEnumCustomerTypeWithAggregatesFilter | CustomerType
    _count?: NestedIntFilter
    _min?: NestedEnumCustomerTypeFilter
    _max?: NestedEnumCustomerTypeFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ZipCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    city?: SortOrder
    state?: SortOrder
    netmetering?: SortOrder
    commercial_rate?: SortOrder
    residential_rate?: SortOrder
    utility?: SortOrder
    sunstate?: SortOrder
    ppkwh_state?: SortOrder
    solar_ppkwh_state?: SortOrder
  }

  export type ZipAvgOrderByAggregateInput = {
    netmetering?: SortOrder
    commercial_rate?: SortOrder
    residential_rate?: SortOrder
    sunstate?: SortOrder
    ppkwh_state?: SortOrder
    solar_ppkwh_state?: SortOrder
  }

  export type ZipMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    city?: SortOrder
    state?: SortOrder
    netmetering?: SortOrder
    commercial_rate?: SortOrder
    residential_rate?: SortOrder
    utility?: SortOrder
    sunstate?: SortOrder
    ppkwh_state?: SortOrder
    solar_ppkwh_state?: SortOrder
  }

  export type ZipMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    city?: SortOrder
    state?: SortOrder
    netmetering?: SortOrder
    commercial_rate?: SortOrder
    residential_rate?: SortOrder
    utility?: SortOrder
    sunstate?: SortOrder
    ppkwh_state?: SortOrder
    solar_ppkwh_state?: SortOrder
  }

  export type ZipSumOrderByAggregateInput = {
    netmetering?: SortOrder
    commercial_rate?: SortOrder
    residential_rate?: SortOrder
    sunstate?: SortOrder
    ppkwh_state?: SortOrder
    solar_ppkwh_state?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    owner?: SortOrder
    sunnumber?: SortOrder
    roofspace?: SortOrder
    squareFeet?: SortOrder
    lotSize?: SortOrder
    bedrooms?: SortOrder
    value?: SortOrder
    zipcode?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    sunnumber?: SortOrder
    roofspace?: SortOrder
    squareFeet?: SortOrder
    lotSize?: SortOrder
    bedrooms?: SortOrder
    value?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    owner?: SortOrder
    sunnumber?: SortOrder
    roofspace?: SortOrder
    squareFeet?: SortOrder
    lotSize?: SortOrder
    bedrooms?: SortOrder
    value?: SortOrder
    zipcode?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    owner?: SortOrder
    sunnumber?: SortOrder
    roofspace?: SortOrder
    squareFeet?: SortOrder
    lotSize?: SortOrder
    bedrooms?: SortOrder
    value?: SortOrder
    zipcode?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    sunnumber?: SortOrder
    roofspace?: SortOrder
    squareFeet?: SortOrder
    lotSize?: SortOrder
    bedrooms?: SortOrder
    value?: SortOrder
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationLatLonCompoundUniqueInput = {
    lat: number
    lon: number
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
  }

  export type DimensionsRelationFilter = {
    is?: DimensionsWhereInput
    isNot?: DimensionsWhereInput
  }

  export type SolarPanelColorsRelationFilter = {
    is?: SolarPanelColorsWhereInput
    isNot?: SolarPanelColorsWhereInput
  }

  export type CountryListRelationFilter = {
    every?: CountryWhereInput
    some?: CountryWhereInput
    none?: CountryWhereInput
  }

  export type InstallerSolarPanelListRelationFilter = {
    every?: InstallerSolarPanelWhereInput
    some?: InstallerSolarPanelWhereInput
    none?: InstallerSolarPanelWhereInput
  }

  export type CountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstallerSolarPanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolarPanelNameModelCompoundUniqueInput = {
    name: string
    model: string
  }

  export type SolarPanelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    wattage?: SortOrder
    efficiency?: SortOrder
    rating?: SortOrder
    degradation?: SortOrder
    output25?: SortOrder
    warranty?: SortOrder
    imagePanel?: SortOrder
    imageMounted?: SortOrder
    ppwMarket?: SortOrder
    material?: SortOrder
    manufacturer?: SortOrder
    energySageLink?: SortOrder
    dimensionsId?: SortOrder
    solarPanelColorsId?: SortOrder
  }

  export type SolarPanelAvgOrderByAggregateInput = {
    wattage?: SortOrder
    efficiency?: SortOrder
    rating?: SortOrder
    degradation?: SortOrder
    output25?: SortOrder
    warranty?: SortOrder
    ppwMarket?: SortOrder
  }

  export type SolarPanelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    wattage?: SortOrder
    efficiency?: SortOrder
    rating?: SortOrder
    degradation?: SortOrder
    output25?: SortOrder
    warranty?: SortOrder
    imagePanel?: SortOrder
    imageMounted?: SortOrder
    ppwMarket?: SortOrder
    material?: SortOrder
    manufacturer?: SortOrder
    energySageLink?: SortOrder
    dimensionsId?: SortOrder
    solarPanelColorsId?: SortOrder
  }

  export type SolarPanelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    wattage?: SortOrder
    efficiency?: SortOrder
    rating?: SortOrder
    degradation?: SortOrder
    output25?: SortOrder
    warranty?: SortOrder
    imagePanel?: SortOrder
    imageMounted?: SortOrder
    ppwMarket?: SortOrder
    material?: SortOrder
    manufacturer?: SortOrder
    energySageLink?: SortOrder
    dimensionsId?: SortOrder
    solarPanelColorsId?: SortOrder
  }

  export type SolarPanelSumOrderByAggregateInput = {
    wattage?: SortOrder
    efficiency?: SortOrder
    rating?: SortOrder
    degradation?: SortOrder
    output25?: SortOrder
    warranty?: SortOrder
    ppwMarket?: SortOrder
  }

  export type SolarPanelListRelationFilter = {
    every?: SolarPanelWhereInput
    some?: SolarPanelWhereInput
    none?: SolarPanelWhereInput
  }

  export type SolarPanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstallerTypeListRelationFilter = {
    every?: InstallerTypeWhereInput
    some?: InstallerTypeWhereInput
    none?: InstallerTypeWhereInput
  }

  export type StateListRelationFilter = {
    every?: StateWhereInput
    some?: StateWhereInput
    none?: StateWhereInput
  }

  export type InstallerReviewListRelationFilter = {
    every?: InstallerReviewWhereInput
    some?: InstallerReviewWhereInput
    none?: InstallerReviewWhereInput
  }

  export type InstallerTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstallerReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstallerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    founded?: SortOrder
    license?: SortOrder
  }

  export type InstallerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    founded?: SortOrder
    license?: SortOrder
  }

  export type InstallerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    founded?: SortOrder
    license?: SortOrder
  }

  export type InstallerListRelationFilter = {
    every?: InstallerWhereInput
    some?: InstallerWhereInput
    none?: InstallerWhereInput
  }

  export type EnumInstallerTypeEnumFilter = {
    equals?: InstallerTypeEnum
    in?: Enumerable<InstallerTypeEnum>
    notIn?: Enumerable<InstallerTypeEnum>
    not?: NestedEnumInstallerTypeEnumFilter | InstallerTypeEnum
  }

  export type InstallerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstallerTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type InstallerTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type InstallerTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type EnumInstallerTypeEnumWithAggregatesFilter = {
    equals?: InstallerTypeEnum
    in?: Enumerable<InstallerTypeEnum>
    notIn?: Enumerable<InstallerTypeEnum>
    not?: NestedEnumInstallerTypeEnumWithAggregatesFilter | InstallerTypeEnum
    _count?: NestedIntFilter
    _min?: NestedEnumInstallerTypeEnumFilter
    _max?: NestedEnumInstallerTypeEnumFilter
  }

  export type InstallerReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type InstallerReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type InstallerReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type InstallerReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type InstallerReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    name?: SortOrder
    abbreviation?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    name?: SortOrder
    abbreviation?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    name?: SortOrder
    abbreviation?: SortOrder
  }

  export type InstallerRelationFilter = {
    is?: InstallerWhereInput
    isNot?: InstallerWhereInput
  }

  export type SolarPanelRelationFilter = {
    is?: SolarPanelWhereInput
    isNot?: SolarPanelWhereInput
  }

  export type InstallerSolarPanelInstallerIdSolarPanelIdCompoundUniqueInput = {
    installerId: string
    solarPanelId: string
  }

  export type InstallerSolarPanelCountOrderByAggregateInput = {
    installerId?: SortOrder
    solarPanelId?: SortOrder
    cost?: SortOrder
  }

  export type InstallerSolarPanelAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type InstallerSolarPanelMaxOrderByAggregateInput = {
    installerId?: SortOrder
    solarPanelId?: SortOrder
    cost?: SortOrder
  }

  export type InstallerSolarPanelMinOrderByAggregateInput = {
    installerId?: SortOrder
    solarPanelId?: SortOrder
    cost?: SortOrder
  }

  export type InstallerSolarPanelSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type DimensionsLengthWidthDepthCompoundUniqueInput = {
    length: number
    width: number
    depth: number
  }

  export type DimensionsCountOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
  }

  export type DimensionsAvgOrderByAggregateInput = {
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
  }

  export type DimensionsMaxOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
  }

  export type DimensionsMinOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
  }

  export type DimensionsSumOrderByAggregateInput = {
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
  }

  export type SolarPanelColorsCountOrderByAggregateInput = {
    id?: SortOrder
    cell?: SortOrder
    frame?: SortOrder
    backsheet?: SortOrder
  }

  export type SolarPanelColorsMaxOrderByAggregateInput = {
    id?: SortOrder
    cell?: SortOrder
    frame?: SortOrder
    backsheet?: SortOrder
  }

  export type SolarPanelColorsMinOrderByAggregateInput = {
    id?: SortOrder
    cell?: SortOrder
    frame?: SortOrder
    backsheet?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type PropertyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutUserInput>, Enumerable<PropertyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutUserInput>
    createMany?: PropertyCreateManyUserInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type PropertyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutUserInput>, Enumerable<PropertyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutUserInput>
    createMany?: PropertyCreateManyUserInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type PropertyUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutUserInput>, Enumerable<PropertyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PropertyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PropertyCreateManyUserInputEnvelope
    set?: Enumerable<PropertyWhereUniqueInput>
    disconnect?: Enumerable<PropertyWhereUniqueInput>
    delete?: Enumerable<PropertyWhereUniqueInput>
    connect?: Enumerable<PropertyWhereUniqueInput>
    update?: Enumerable<PropertyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PropertyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PropertyScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type PropertyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutUserInput>, Enumerable<PropertyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PropertyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PropertyCreateManyUserInputEnvelope
    set?: Enumerable<PropertyWhereUniqueInput>
    disconnect?: Enumerable<PropertyWhereUniqueInput>
    delete?: Enumerable<PropertyWhereUniqueInput>
    connect?: Enumerable<PropertyWhereUniqueInput>
    update?: Enumerable<PropertyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PropertyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PropertyScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertiesInput
    connect?: AddressWhereUniqueInput
  }

  export type QuoteCreateNestedManyWithoutPropertyInput = {
    create?: XOR<Enumerable<QuoteCreateWithoutPropertyInput>, Enumerable<QuoteUncheckedCreateWithoutPropertyInput>>
    connectOrCreate?: Enumerable<QuoteCreateOrConnectWithoutPropertyInput>
    createMany?: QuoteCreateManyPropertyInputEnvelope
    connect?: Enumerable<QuoteWhereUniqueInput>
  }

  export type QuoteUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<Enumerable<QuoteCreateWithoutPropertyInput>, Enumerable<QuoteUncheckedCreateWithoutPropertyInput>>
    connectOrCreate?: Enumerable<QuoteCreateOrConnectWithoutPropertyInput>
    createMany?: QuoteCreateManyPropertyInputEnvelope
    connect?: Enumerable<QuoteWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type AddressUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertiesInput
    upsert?: AddressUpsertWithoutPropertiesInput
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutPropertiesInput, AddressUncheckedUpdateWithoutPropertiesInput>
  }

  export type QuoteUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<Enumerable<QuoteCreateWithoutPropertyInput>, Enumerable<QuoteUncheckedCreateWithoutPropertyInput>>
    connectOrCreate?: Enumerable<QuoteCreateOrConnectWithoutPropertyInput>
    upsert?: Enumerable<QuoteUpsertWithWhereUniqueWithoutPropertyInput>
    createMany?: QuoteCreateManyPropertyInputEnvelope
    set?: Enumerable<QuoteWhereUniqueInput>
    disconnect?: Enumerable<QuoteWhereUniqueInput>
    delete?: Enumerable<QuoteWhereUniqueInput>
    connect?: Enumerable<QuoteWhereUniqueInput>
    update?: Enumerable<QuoteUpdateWithWhereUniqueWithoutPropertyInput>
    updateMany?: Enumerable<QuoteUpdateManyWithWhereWithoutPropertyInput>
    deleteMany?: Enumerable<QuoteScalarWhereInput>
  }

  export type QuoteUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<Enumerable<QuoteCreateWithoutPropertyInput>, Enumerable<QuoteUncheckedCreateWithoutPropertyInput>>
    connectOrCreate?: Enumerable<QuoteCreateOrConnectWithoutPropertyInput>
    upsert?: Enumerable<QuoteUpsertWithWhereUniqueWithoutPropertyInput>
    createMany?: QuoteCreateManyPropertyInputEnvelope
    set?: Enumerable<QuoteWhereUniqueInput>
    disconnect?: Enumerable<QuoteWhereUniqueInput>
    delete?: Enumerable<QuoteWhereUniqueInput>
    connect?: Enumerable<QuoteWhereUniqueInput>
    update?: Enumerable<QuoteUpdateWithWhereUniqueWithoutPropertyInput>
    updateMany?: Enumerable<QuoteUpdateManyWithWhereWithoutPropertyInput>
    deleteMany?: Enumerable<QuoteScalarWhereInput>
  }

  export type PropertyCreateNestedOneWithoutQuotesInput = {
    create?: XOR<PropertyCreateWithoutQuotesInput, PropertyUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutQuotesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: XOR<PropertyCreateWithoutQuotesInput, PropertyUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutQuotesInput
    upsert?: PropertyUpsertWithoutQuotesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<PropertyUpdateWithoutQuotesInput, PropertyUncheckedUpdateWithoutQuotesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMonthFieldUpdateOperationsInput = {
    set?: Month
  }

  export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: CustomerType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationCreateNestedOneWithoutAddressInput = {
    create?: XOR<LocationCreateWithoutAddressInput, LocationUncheckedCreateWithoutAddressInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAddressInput
    connect?: LocationWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutAddressInput>, Enumerable<PropertyUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutAddressInput>
    createMany?: PropertyCreateManyAddressInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
  }

  export type PropertyUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutAddressInput>, Enumerable<PropertyUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutAddressInput>
    createMany?: PropertyCreateManyAddressInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
  }

  export type LocationUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<LocationCreateWithoutAddressInput, LocationUncheckedCreateWithoutAddressInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAddressInput
    upsert?: LocationUpsertWithoutAddressInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutAddressInput, LocationUncheckedUpdateWithoutAddressInput>
  }

  export type PropertyUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutAddressInput>, Enumerable<PropertyUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<PropertyUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: PropertyCreateManyAddressInputEnvelope
    set?: Enumerable<PropertyWhereUniqueInput>
    disconnect?: Enumerable<PropertyWhereUniqueInput>
    delete?: Enumerable<PropertyWhereUniqueInput>
    connect?: Enumerable<PropertyWhereUniqueInput>
    update?: Enumerable<PropertyUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<PropertyUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<PropertyScalarWhereInput>
  }

  export type PropertyUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutAddressInput>, Enumerable<PropertyUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<PropertyUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: PropertyCreateManyAddressInputEnvelope
    set?: Enumerable<PropertyWhereUniqueInput>
    disconnect?: Enumerable<PropertyWhereUniqueInput>
    delete?: Enumerable<PropertyWhereUniqueInput>
    connect?: Enumerable<PropertyWhereUniqueInput>
    update?: Enumerable<PropertyUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<PropertyUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<PropertyScalarWhereInput>
  }

  export type AddressCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<AddressCreateWithoutLocationInput>, Enumerable<AddressUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutLocationInput>
    createMany?: AddressCreateManyLocationInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<AddressCreateWithoutLocationInput>, Enumerable<AddressUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutLocationInput>
    createMany?: AddressCreateManyLocationInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutLocationInput>, Enumerable<AddressUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: AddressCreateManyLocationInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutLocationInput>, Enumerable<AddressUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: AddressCreateManyLocationInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type DimensionsCreateNestedOneWithoutPanelInput = {
    create?: XOR<DimensionsCreateWithoutPanelInput, DimensionsUncheckedCreateWithoutPanelInput>
    connectOrCreate?: DimensionsCreateOrConnectWithoutPanelInput
    connect?: DimensionsWhereUniqueInput
  }

  export type SolarPanelColorsCreateNestedOneWithoutSolarPanelInput = {
    create?: XOR<SolarPanelColorsCreateWithoutSolarPanelInput, SolarPanelColorsUncheckedCreateWithoutSolarPanelInput>
    connectOrCreate?: SolarPanelColorsCreateOrConnectWithoutSolarPanelInput
    connect?: SolarPanelColorsWhereUniqueInput
  }

  export type CountryCreateNestedManyWithoutSolarPanelsInput = {
    create?: XOR<Enumerable<CountryCreateWithoutSolarPanelsInput>, Enumerable<CountryUncheckedCreateWithoutSolarPanelsInput>>
    connectOrCreate?: Enumerable<CountryCreateOrConnectWithoutSolarPanelsInput>
    connect?: Enumerable<CountryWhereUniqueInput>
  }

  export type InstallerSolarPanelCreateNestedManyWithoutSolarPanelInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutSolarPanelInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutSolarPanelInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutSolarPanelInput>
    createMany?: InstallerSolarPanelCreateManySolarPanelInputEnvelope
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
  }

  export type CountryUncheckedCreateNestedManyWithoutSolarPanelsInput = {
    create?: XOR<Enumerable<CountryCreateWithoutSolarPanelsInput>, Enumerable<CountryUncheckedCreateWithoutSolarPanelsInput>>
    connectOrCreate?: Enumerable<CountryCreateOrConnectWithoutSolarPanelsInput>
    connect?: Enumerable<CountryWhereUniqueInput>
  }

  export type InstallerSolarPanelUncheckedCreateNestedManyWithoutSolarPanelInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutSolarPanelInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutSolarPanelInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutSolarPanelInput>
    createMany?: InstallerSolarPanelCreateManySolarPanelInputEnvelope
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
  }

  export type DimensionsUpdateOneRequiredWithoutPanelNestedInput = {
    create?: XOR<DimensionsCreateWithoutPanelInput, DimensionsUncheckedCreateWithoutPanelInput>
    connectOrCreate?: DimensionsCreateOrConnectWithoutPanelInput
    upsert?: DimensionsUpsertWithoutPanelInput
    connect?: DimensionsWhereUniqueInput
    update?: XOR<DimensionsUpdateWithoutPanelInput, DimensionsUncheckedUpdateWithoutPanelInput>
  }

  export type SolarPanelColorsUpdateOneRequiredWithoutSolarPanelNestedInput = {
    create?: XOR<SolarPanelColorsCreateWithoutSolarPanelInput, SolarPanelColorsUncheckedCreateWithoutSolarPanelInput>
    connectOrCreate?: SolarPanelColorsCreateOrConnectWithoutSolarPanelInput
    upsert?: SolarPanelColorsUpsertWithoutSolarPanelInput
    connect?: SolarPanelColorsWhereUniqueInput
    update?: XOR<SolarPanelColorsUpdateWithoutSolarPanelInput, SolarPanelColorsUncheckedUpdateWithoutSolarPanelInput>
  }

  export type CountryUpdateManyWithoutSolarPanelsNestedInput = {
    create?: XOR<Enumerable<CountryCreateWithoutSolarPanelsInput>, Enumerable<CountryUncheckedCreateWithoutSolarPanelsInput>>
    connectOrCreate?: Enumerable<CountryCreateOrConnectWithoutSolarPanelsInput>
    upsert?: Enumerable<CountryUpsertWithWhereUniqueWithoutSolarPanelsInput>
    set?: Enumerable<CountryWhereUniqueInput>
    disconnect?: Enumerable<CountryWhereUniqueInput>
    delete?: Enumerable<CountryWhereUniqueInput>
    connect?: Enumerable<CountryWhereUniqueInput>
    update?: Enumerable<CountryUpdateWithWhereUniqueWithoutSolarPanelsInput>
    updateMany?: Enumerable<CountryUpdateManyWithWhereWithoutSolarPanelsInput>
    deleteMany?: Enumerable<CountryScalarWhereInput>
  }

  export type InstallerSolarPanelUpdateManyWithoutSolarPanelNestedInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutSolarPanelInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutSolarPanelInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutSolarPanelInput>
    upsert?: Enumerable<InstallerSolarPanelUpsertWithWhereUniqueWithoutSolarPanelInput>
    createMany?: InstallerSolarPanelCreateManySolarPanelInputEnvelope
    set?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    disconnect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    delete?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    update?: Enumerable<InstallerSolarPanelUpdateWithWhereUniqueWithoutSolarPanelInput>
    updateMany?: Enumerable<InstallerSolarPanelUpdateManyWithWhereWithoutSolarPanelInput>
    deleteMany?: Enumerable<InstallerSolarPanelScalarWhereInput>
  }

  export type CountryUncheckedUpdateManyWithoutSolarPanelsNestedInput = {
    create?: XOR<Enumerable<CountryCreateWithoutSolarPanelsInput>, Enumerable<CountryUncheckedCreateWithoutSolarPanelsInput>>
    connectOrCreate?: Enumerable<CountryCreateOrConnectWithoutSolarPanelsInput>
    upsert?: Enumerable<CountryUpsertWithWhereUniqueWithoutSolarPanelsInput>
    set?: Enumerable<CountryWhereUniqueInput>
    disconnect?: Enumerable<CountryWhereUniqueInput>
    delete?: Enumerable<CountryWhereUniqueInput>
    connect?: Enumerable<CountryWhereUniqueInput>
    update?: Enumerable<CountryUpdateWithWhereUniqueWithoutSolarPanelsInput>
    updateMany?: Enumerable<CountryUpdateManyWithWhereWithoutSolarPanelsInput>
    deleteMany?: Enumerable<CountryScalarWhereInput>
  }

  export type InstallerSolarPanelUncheckedUpdateManyWithoutSolarPanelNestedInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutSolarPanelInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutSolarPanelInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutSolarPanelInput>
    upsert?: Enumerable<InstallerSolarPanelUpsertWithWhereUniqueWithoutSolarPanelInput>
    createMany?: InstallerSolarPanelCreateManySolarPanelInputEnvelope
    set?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    disconnect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    delete?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    update?: Enumerable<InstallerSolarPanelUpdateWithWhereUniqueWithoutSolarPanelInput>
    updateMany?: Enumerable<InstallerSolarPanelUpdateManyWithWhereWithoutSolarPanelInput>
    deleteMany?: Enumerable<InstallerSolarPanelScalarWhereInput>
  }

  export type SolarPanelCreateNestedManyWithoutCountriesInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutCountriesInput>, Enumerable<SolarPanelUncheckedCreateWithoutCountriesInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutCountriesInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
  }

  export type SolarPanelUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutCountriesInput>, Enumerable<SolarPanelUncheckedCreateWithoutCountriesInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutCountriesInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
  }

  export type SolarPanelUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutCountriesInput>, Enumerable<SolarPanelUncheckedCreateWithoutCountriesInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutCountriesInput>
    upsert?: Enumerable<SolarPanelUpsertWithWhereUniqueWithoutCountriesInput>
    set?: Enumerable<SolarPanelWhereUniqueInput>
    disconnect?: Enumerable<SolarPanelWhereUniqueInput>
    delete?: Enumerable<SolarPanelWhereUniqueInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
    update?: Enumerable<SolarPanelUpdateWithWhereUniqueWithoutCountriesInput>
    updateMany?: Enumerable<SolarPanelUpdateManyWithWhereWithoutCountriesInput>
    deleteMany?: Enumerable<SolarPanelScalarWhereInput>
  }

  export type SolarPanelUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutCountriesInput>, Enumerable<SolarPanelUncheckedCreateWithoutCountriesInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutCountriesInput>
    upsert?: Enumerable<SolarPanelUpsertWithWhereUniqueWithoutCountriesInput>
    set?: Enumerable<SolarPanelWhereUniqueInput>
    disconnect?: Enumerable<SolarPanelWhereUniqueInput>
    delete?: Enumerable<SolarPanelWhereUniqueInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
    update?: Enumerable<SolarPanelUpdateWithWhereUniqueWithoutCountriesInput>
    updateMany?: Enumerable<SolarPanelUpdateManyWithWhereWithoutCountriesInput>
    deleteMany?: Enumerable<SolarPanelScalarWhereInput>
  }

  export type InstallerTypeCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<InstallerTypeCreateWithoutInstallerInput>, Enumerable<InstallerTypeUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerTypeCreateOrConnectWithoutInstallerInput>
    connect?: Enumerable<InstallerTypeWhereUniqueInput>
  }

  export type StateCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<StateCreateWithoutInstallerInput>, Enumerable<StateUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<StateCreateOrConnectWithoutInstallerInput>
    connect?: Enumerable<StateWhereUniqueInput>
  }

  export type InstallerReviewCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<InstallerReviewCreateWithoutInstallerInput>, Enumerable<InstallerReviewUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerReviewCreateOrConnectWithoutInstallerInput>
    connect?: Enumerable<InstallerReviewWhereUniqueInput>
  }

  export type InstallerSolarPanelCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutInstallerInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutInstallerInput>
    createMany?: InstallerSolarPanelCreateManyInstallerInputEnvelope
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
  }

  export type InstallerTypeUncheckedCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<InstallerTypeCreateWithoutInstallerInput>, Enumerable<InstallerTypeUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerTypeCreateOrConnectWithoutInstallerInput>
    connect?: Enumerable<InstallerTypeWhereUniqueInput>
  }

  export type StateUncheckedCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<StateCreateWithoutInstallerInput>, Enumerable<StateUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<StateCreateOrConnectWithoutInstallerInput>
    connect?: Enumerable<StateWhereUniqueInput>
  }

  export type InstallerReviewUncheckedCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<InstallerReviewCreateWithoutInstallerInput>, Enumerable<InstallerReviewUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerReviewCreateOrConnectWithoutInstallerInput>
    connect?: Enumerable<InstallerReviewWhereUniqueInput>
  }

  export type InstallerSolarPanelUncheckedCreateNestedManyWithoutInstallerInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutInstallerInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutInstallerInput>
    createMany?: InstallerSolarPanelCreateManyInstallerInputEnvelope
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
  }

  export type InstallerTypeUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<InstallerTypeCreateWithoutInstallerInput>, Enumerable<InstallerTypeUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerTypeCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<InstallerTypeUpsertWithWhereUniqueWithoutInstallerInput>
    set?: Enumerable<InstallerTypeWhereUniqueInput>
    disconnect?: Enumerable<InstallerTypeWhereUniqueInput>
    delete?: Enumerable<InstallerTypeWhereUniqueInput>
    connect?: Enumerable<InstallerTypeWhereUniqueInput>
    update?: Enumerable<InstallerTypeUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<InstallerTypeUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<InstallerTypeScalarWhereInput>
  }

  export type StateUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<StateCreateWithoutInstallerInput>, Enumerable<StateUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<StateCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<StateUpsertWithWhereUniqueWithoutInstallerInput>
    set?: Enumerable<StateWhereUniqueInput>
    disconnect?: Enumerable<StateWhereUniqueInput>
    delete?: Enumerable<StateWhereUniqueInput>
    connect?: Enumerable<StateWhereUniqueInput>
    update?: Enumerable<StateUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<StateUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<StateScalarWhereInput>
  }

  export type InstallerReviewUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<InstallerReviewCreateWithoutInstallerInput>, Enumerable<InstallerReviewUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerReviewCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<InstallerReviewUpsertWithWhereUniqueWithoutInstallerInput>
    set?: Enumerable<InstallerReviewWhereUniqueInput>
    disconnect?: Enumerable<InstallerReviewWhereUniqueInput>
    delete?: Enumerable<InstallerReviewWhereUniqueInput>
    connect?: Enumerable<InstallerReviewWhereUniqueInput>
    update?: Enumerable<InstallerReviewUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<InstallerReviewUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<InstallerReviewScalarWhereInput>
  }

  export type InstallerSolarPanelUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutInstallerInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<InstallerSolarPanelUpsertWithWhereUniqueWithoutInstallerInput>
    createMany?: InstallerSolarPanelCreateManyInstallerInputEnvelope
    set?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    disconnect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    delete?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    update?: Enumerable<InstallerSolarPanelUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<InstallerSolarPanelUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<InstallerSolarPanelScalarWhereInput>
  }

  export type InstallerTypeUncheckedUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<InstallerTypeCreateWithoutInstallerInput>, Enumerable<InstallerTypeUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerTypeCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<InstallerTypeUpsertWithWhereUniqueWithoutInstallerInput>
    set?: Enumerable<InstallerTypeWhereUniqueInput>
    disconnect?: Enumerable<InstallerTypeWhereUniqueInput>
    delete?: Enumerable<InstallerTypeWhereUniqueInput>
    connect?: Enumerable<InstallerTypeWhereUniqueInput>
    update?: Enumerable<InstallerTypeUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<InstallerTypeUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<InstallerTypeScalarWhereInput>
  }

  export type StateUncheckedUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<StateCreateWithoutInstallerInput>, Enumerable<StateUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<StateCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<StateUpsertWithWhereUniqueWithoutInstallerInput>
    set?: Enumerable<StateWhereUniqueInput>
    disconnect?: Enumerable<StateWhereUniqueInput>
    delete?: Enumerable<StateWhereUniqueInput>
    connect?: Enumerable<StateWhereUniqueInput>
    update?: Enumerable<StateUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<StateUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<StateScalarWhereInput>
  }

  export type InstallerReviewUncheckedUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<InstallerReviewCreateWithoutInstallerInput>, Enumerable<InstallerReviewUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerReviewCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<InstallerReviewUpsertWithWhereUniqueWithoutInstallerInput>
    set?: Enumerable<InstallerReviewWhereUniqueInput>
    disconnect?: Enumerable<InstallerReviewWhereUniqueInput>
    delete?: Enumerable<InstallerReviewWhereUniqueInput>
    connect?: Enumerable<InstallerReviewWhereUniqueInput>
    update?: Enumerable<InstallerReviewUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<InstallerReviewUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<InstallerReviewScalarWhereInput>
  }

  export type InstallerSolarPanelUncheckedUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<Enumerable<InstallerSolarPanelCreateWithoutInstallerInput>, Enumerable<InstallerSolarPanelUncheckedCreateWithoutInstallerInput>>
    connectOrCreate?: Enumerable<InstallerSolarPanelCreateOrConnectWithoutInstallerInput>
    upsert?: Enumerable<InstallerSolarPanelUpsertWithWhereUniqueWithoutInstallerInput>
    createMany?: InstallerSolarPanelCreateManyInstallerInputEnvelope
    set?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    disconnect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    delete?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    connect?: Enumerable<InstallerSolarPanelWhereUniqueInput>
    update?: Enumerable<InstallerSolarPanelUpdateWithWhereUniqueWithoutInstallerInput>
    updateMany?: Enumerable<InstallerSolarPanelUpdateManyWithWhereWithoutInstallerInput>
    deleteMany?: Enumerable<InstallerSolarPanelScalarWhereInput>
  }

  export type InstallerCreateNestedManyWithoutTypesInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutTypesInput>, Enumerable<InstallerUncheckedCreateWithoutTypesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutTypesInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
  }

  export type InstallerUncheckedCreateNestedManyWithoutTypesInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutTypesInput>, Enumerable<InstallerUncheckedCreateWithoutTypesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutTypesInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
  }

  export type InstallerUpdateManyWithoutTypesNestedInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutTypesInput>, Enumerable<InstallerUncheckedCreateWithoutTypesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutTypesInput>
    upsert?: Enumerable<InstallerUpsertWithWhereUniqueWithoutTypesInput>
    set?: Enumerable<InstallerWhereUniqueInput>
    disconnect?: Enumerable<InstallerWhereUniqueInput>
    delete?: Enumerable<InstallerWhereUniqueInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
    update?: Enumerable<InstallerUpdateWithWhereUniqueWithoutTypesInput>
    updateMany?: Enumerable<InstallerUpdateManyWithWhereWithoutTypesInput>
    deleteMany?: Enumerable<InstallerScalarWhereInput>
  }

  export type EnumInstallerTypeEnumFieldUpdateOperationsInput = {
    set?: InstallerTypeEnum
  }

  export type InstallerUncheckedUpdateManyWithoutTypesNestedInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutTypesInput>, Enumerable<InstallerUncheckedCreateWithoutTypesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutTypesInput>
    upsert?: Enumerable<InstallerUpsertWithWhereUniqueWithoutTypesInput>
    set?: Enumerable<InstallerWhereUniqueInput>
    disconnect?: Enumerable<InstallerWhereUniqueInput>
    delete?: Enumerable<InstallerWhereUniqueInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
    update?: Enumerable<InstallerUpdateWithWhereUniqueWithoutTypesInput>
    updateMany?: Enumerable<InstallerUpdateManyWithWhereWithoutTypesInput>
    deleteMany?: Enumerable<InstallerScalarWhereInput>
  }

  export type InstallerCreateNestedManyWithoutReviewsInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutReviewsInput>, Enumerable<InstallerUncheckedCreateWithoutReviewsInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutReviewsInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
  }

  export type InstallerUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutReviewsInput>, Enumerable<InstallerUncheckedCreateWithoutReviewsInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutReviewsInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
  }

  export type InstallerUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutReviewsInput>, Enumerable<InstallerUncheckedCreateWithoutReviewsInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutReviewsInput>
    upsert?: Enumerable<InstallerUpsertWithWhereUniqueWithoutReviewsInput>
    set?: Enumerable<InstallerWhereUniqueInput>
    disconnect?: Enumerable<InstallerWhereUniqueInput>
    delete?: Enumerable<InstallerWhereUniqueInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
    update?: Enumerable<InstallerUpdateWithWhereUniqueWithoutReviewsInput>
    updateMany?: Enumerable<InstallerUpdateManyWithWhereWithoutReviewsInput>
    deleteMany?: Enumerable<InstallerScalarWhereInput>
  }

  export type InstallerUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutReviewsInput>, Enumerable<InstallerUncheckedCreateWithoutReviewsInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutReviewsInput>
    upsert?: Enumerable<InstallerUpsertWithWhereUniqueWithoutReviewsInput>
    set?: Enumerable<InstallerWhereUniqueInput>
    disconnect?: Enumerable<InstallerWhereUniqueInput>
    delete?: Enumerable<InstallerWhereUniqueInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
    update?: Enumerable<InstallerUpdateWithWhereUniqueWithoutReviewsInput>
    updateMany?: Enumerable<InstallerUpdateManyWithWhereWithoutReviewsInput>
    deleteMany?: Enumerable<InstallerScalarWhereInput>
  }

  export type InstallerCreateNestedManyWithoutOperatingStatesInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutOperatingStatesInput>, Enumerable<InstallerUncheckedCreateWithoutOperatingStatesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutOperatingStatesInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
  }

  export type InstallerUncheckedCreateNestedManyWithoutOperatingStatesInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutOperatingStatesInput>, Enumerable<InstallerUncheckedCreateWithoutOperatingStatesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutOperatingStatesInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
  }

  export type InstallerUpdateManyWithoutOperatingStatesNestedInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutOperatingStatesInput>, Enumerable<InstallerUncheckedCreateWithoutOperatingStatesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutOperatingStatesInput>
    upsert?: Enumerable<InstallerUpsertWithWhereUniqueWithoutOperatingStatesInput>
    set?: Enumerable<InstallerWhereUniqueInput>
    disconnect?: Enumerable<InstallerWhereUniqueInput>
    delete?: Enumerable<InstallerWhereUniqueInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
    update?: Enumerable<InstallerUpdateWithWhereUniqueWithoutOperatingStatesInput>
    updateMany?: Enumerable<InstallerUpdateManyWithWhereWithoutOperatingStatesInput>
    deleteMany?: Enumerable<InstallerScalarWhereInput>
  }

  export type InstallerUncheckedUpdateManyWithoutOperatingStatesNestedInput = {
    create?: XOR<Enumerable<InstallerCreateWithoutOperatingStatesInput>, Enumerable<InstallerUncheckedCreateWithoutOperatingStatesInput>>
    connectOrCreate?: Enumerable<InstallerCreateOrConnectWithoutOperatingStatesInput>
    upsert?: Enumerable<InstallerUpsertWithWhereUniqueWithoutOperatingStatesInput>
    set?: Enumerable<InstallerWhereUniqueInput>
    disconnect?: Enumerable<InstallerWhereUniqueInput>
    delete?: Enumerable<InstallerWhereUniqueInput>
    connect?: Enumerable<InstallerWhereUniqueInput>
    update?: Enumerable<InstallerUpdateWithWhereUniqueWithoutOperatingStatesInput>
    updateMany?: Enumerable<InstallerUpdateManyWithWhereWithoutOperatingStatesInput>
    deleteMany?: Enumerable<InstallerScalarWhereInput>
  }

  export type InstallerCreateNestedOneWithoutSolarPanelsInput = {
    create?: XOR<InstallerCreateWithoutSolarPanelsInput, InstallerUncheckedCreateWithoutSolarPanelsInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutSolarPanelsInput
    connect?: InstallerWhereUniqueInput
  }

  export type SolarPanelCreateNestedOneWithoutInstallersInput = {
    create?: XOR<SolarPanelCreateWithoutInstallersInput, SolarPanelUncheckedCreateWithoutInstallersInput>
    connectOrCreate?: SolarPanelCreateOrConnectWithoutInstallersInput
    connect?: SolarPanelWhereUniqueInput
  }

  export type InstallerUpdateOneRequiredWithoutSolarPanelsNestedInput = {
    create?: XOR<InstallerCreateWithoutSolarPanelsInput, InstallerUncheckedCreateWithoutSolarPanelsInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutSolarPanelsInput
    upsert?: InstallerUpsertWithoutSolarPanelsInput
    connect?: InstallerWhereUniqueInput
    update?: XOR<InstallerUpdateWithoutSolarPanelsInput, InstallerUncheckedUpdateWithoutSolarPanelsInput>
  }

  export type SolarPanelUpdateOneRequiredWithoutInstallersNestedInput = {
    create?: XOR<SolarPanelCreateWithoutInstallersInput, SolarPanelUncheckedCreateWithoutInstallersInput>
    connectOrCreate?: SolarPanelCreateOrConnectWithoutInstallersInput
    upsert?: SolarPanelUpsertWithoutInstallersInput
    connect?: SolarPanelWhereUniqueInput
    update?: XOR<SolarPanelUpdateWithoutInstallersInput, SolarPanelUncheckedUpdateWithoutInstallersInput>
  }

  export type SolarPanelCreateNestedManyWithoutDimensionsInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutDimensionsInput>, Enumerable<SolarPanelUncheckedCreateWithoutDimensionsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutDimensionsInput>
    createMany?: SolarPanelCreateManyDimensionsInputEnvelope
    connect?: Enumerable<SolarPanelWhereUniqueInput>
  }

  export type SolarPanelUncheckedCreateNestedManyWithoutDimensionsInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutDimensionsInput>, Enumerable<SolarPanelUncheckedCreateWithoutDimensionsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutDimensionsInput>
    createMany?: SolarPanelCreateManyDimensionsInputEnvelope
    connect?: Enumerable<SolarPanelWhereUniqueInput>
  }

  export type SolarPanelUpdateManyWithoutDimensionsNestedInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutDimensionsInput>, Enumerable<SolarPanelUncheckedCreateWithoutDimensionsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutDimensionsInput>
    upsert?: Enumerable<SolarPanelUpsertWithWhereUniqueWithoutDimensionsInput>
    createMany?: SolarPanelCreateManyDimensionsInputEnvelope
    set?: Enumerable<SolarPanelWhereUniqueInput>
    disconnect?: Enumerable<SolarPanelWhereUniqueInput>
    delete?: Enumerable<SolarPanelWhereUniqueInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
    update?: Enumerable<SolarPanelUpdateWithWhereUniqueWithoutDimensionsInput>
    updateMany?: Enumerable<SolarPanelUpdateManyWithWhereWithoutDimensionsInput>
    deleteMany?: Enumerable<SolarPanelScalarWhereInput>
  }

  export type SolarPanelUncheckedUpdateManyWithoutDimensionsNestedInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutDimensionsInput>, Enumerable<SolarPanelUncheckedCreateWithoutDimensionsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutDimensionsInput>
    upsert?: Enumerable<SolarPanelUpsertWithWhereUniqueWithoutDimensionsInput>
    createMany?: SolarPanelCreateManyDimensionsInputEnvelope
    set?: Enumerable<SolarPanelWhereUniqueInput>
    disconnect?: Enumerable<SolarPanelWhereUniqueInput>
    delete?: Enumerable<SolarPanelWhereUniqueInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
    update?: Enumerable<SolarPanelUpdateWithWhereUniqueWithoutDimensionsInput>
    updateMany?: Enumerable<SolarPanelUpdateManyWithWhereWithoutDimensionsInput>
    deleteMany?: Enumerable<SolarPanelScalarWhereInput>
  }

  export type SolarPanelCreateNestedManyWithoutColorsInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutColorsInput>, Enumerable<SolarPanelUncheckedCreateWithoutColorsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutColorsInput>
    createMany?: SolarPanelCreateManyColorsInputEnvelope
    connect?: Enumerable<SolarPanelWhereUniqueInput>
  }

  export type SolarPanelUncheckedCreateNestedManyWithoutColorsInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutColorsInput>, Enumerable<SolarPanelUncheckedCreateWithoutColorsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutColorsInput>
    createMany?: SolarPanelCreateManyColorsInputEnvelope
    connect?: Enumerable<SolarPanelWhereUniqueInput>
  }

  export type SolarPanelUpdateManyWithoutColorsNestedInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutColorsInput>, Enumerable<SolarPanelUncheckedCreateWithoutColorsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutColorsInput>
    upsert?: Enumerable<SolarPanelUpsertWithWhereUniqueWithoutColorsInput>
    createMany?: SolarPanelCreateManyColorsInputEnvelope
    set?: Enumerable<SolarPanelWhereUniqueInput>
    disconnect?: Enumerable<SolarPanelWhereUniqueInput>
    delete?: Enumerable<SolarPanelWhereUniqueInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
    update?: Enumerable<SolarPanelUpdateWithWhereUniqueWithoutColorsInput>
    updateMany?: Enumerable<SolarPanelUpdateManyWithWhereWithoutColorsInput>
    deleteMany?: Enumerable<SolarPanelScalarWhereInput>
  }

  export type SolarPanelUncheckedUpdateManyWithoutColorsNestedInput = {
    create?: XOR<Enumerable<SolarPanelCreateWithoutColorsInput>, Enumerable<SolarPanelUncheckedCreateWithoutColorsInput>>
    connectOrCreate?: Enumerable<SolarPanelCreateOrConnectWithoutColorsInput>
    upsert?: Enumerable<SolarPanelUpsertWithWhereUniqueWithoutColorsInput>
    createMany?: SolarPanelCreateManyColorsInputEnvelope
    set?: Enumerable<SolarPanelWhereUniqueInput>
    disconnect?: Enumerable<SolarPanelWhereUniqueInput>
    delete?: Enumerable<SolarPanelWhereUniqueInput>
    connect?: Enumerable<SolarPanelWhereUniqueInput>
    update?: Enumerable<SolarPanelUpdateWithWhereUniqueWithoutColorsInput>
    updateMany?: Enumerable<SolarPanelUpdateManyWithWhereWithoutColorsInput>
    deleteMany?: Enumerable<SolarPanelScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumMonthFilter = {
    equals?: Month
    in?: Enumerable<Month>
    notIn?: Enumerable<Month>
    not?: NestedEnumMonthFilter | Month
  }

  export type NestedEnumCustomerTypeFilter = {
    equals?: CustomerType
    in?: Enumerable<CustomerType>
    notIn?: Enumerable<CustomerType>
    not?: NestedEnumCustomerTypeFilter | CustomerType
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumMonthWithAggregatesFilter = {
    equals?: Month
    in?: Enumerable<Month>
    notIn?: Enumerable<Month>
    not?: NestedEnumMonthWithAggregatesFilter | Month
    _count?: NestedIntFilter
    _min?: NestedEnumMonthFilter
    _max?: NestedEnumMonthFilter
  }

  export type NestedEnumCustomerTypeWithAggregatesFilter = {
    equals?: CustomerType
    in?: Enumerable<CustomerType>
    notIn?: Enumerable<CustomerType>
    not?: NestedEnumCustomerTypeWithAggregatesFilter | CustomerType
    _count?: NestedIntFilter
    _min?: NestedEnumCustomerTypeFilter
    _max?: NestedEnumCustomerTypeFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumInstallerTypeEnumFilter = {
    equals?: InstallerTypeEnum
    in?: Enumerable<InstallerTypeEnum>
    notIn?: Enumerable<InstallerTypeEnum>
    not?: NestedEnumInstallerTypeEnumFilter | InstallerTypeEnum
  }

  export type NestedEnumInstallerTypeEnumWithAggregatesFilter = {
    equals?: InstallerTypeEnum
    in?: Enumerable<InstallerTypeEnum>
    notIn?: Enumerable<InstallerTypeEnum>
    not?: NestedEnumInstallerTypeEnumWithAggregatesFilter | InstallerTypeEnum
    _count?: NestedIntFilter
    _min?: NestedEnumInstallerTypeEnumFilter
    _max?: NestedEnumInstallerTypeEnumFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken?: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken?: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutUserInput = {
    id?: string
    address: AddressCreateNestedOneWithoutPropertiesInput
    quotes?: QuoteCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutUserInput = {
    id?: string
    addressId: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutUserInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput>
  }

  export type PropertyCreateManyUserInputEnvelope = {
    data: Enumerable<PropertyCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutUserInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutUserInput, PropertyUncheckedUpdateWithoutUserInput>
    create: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutUserInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutUserInput, PropertyUncheckedUpdateWithoutUserInput>
  }

  export type PropertyUpdateManyWithWhereWithoutUserInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: Enumerable<PropertyScalarWhereInput>
    OR?: Enumerable<PropertyScalarWhereInput>
    NOT?: Enumerable<PropertyScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    addressId?: StringFilter | string
  }

  export type UserCreateWithoutPropertiesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type AddressCreateWithoutPropertiesInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    location: LocationCreateNestedOneWithoutAddressInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutPropertiesInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    locationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutPropertiesInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
  }

  export type QuoteCreateWithoutPropertyInput = {
    id?: string
  }

  export type QuoteUncheckedCreateWithoutPropertyInput = {
    id?: string
  }

  export type QuoteCreateOrConnectWithoutPropertyInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutPropertyInput, QuoteUncheckedCreateWithoutPropertyInput>
  }

  export type QuoteCreateManyPropertyInputEnvelope = {
    data: Enumerable<QuoteCreateManyPropertyInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressUpsertWithoutPropertiesInput = {
    update: XOR<AddressUpdateWithoutPropertiesInput, AddressUncheckedUpdateWithoutPropertiesInput>
    create: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
  }

  export type AddressUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutAddressNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteUpsertWithWhereUniqueWithoutPropertyInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutPropertyInput, QuoteUncheckedUpdateWithoutPropertyInput>
    create: XOR<QuoteCreateWithoutPropertyInput, QuoteUncheckedCreateWithoutPropertyInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutPropertyInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutPropertyInput, QuoteUncheckedUpdateWithoutPropertyInput>
  }

  export type QuoteUpdateManyWithWhereWithoutPropertyInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutQuotesInput>
  }

  export type QuoteScalarWhereInput = {
    AND?: Enumerable<QuoteScalarWhereInput>
    OR?: Enumerable<QuoteScalarWhereInput>
    NOT?: Enumerable<QuoteScalarWhereInput>
    id?: StringFilter | string
    propertyId?: StringFilter | string
  }

  export type PropertyCreateWithoutQuotesInput = {
    id?: string
    user: UserCreateNestedOneWithoutPropertiesInput
    address: AddressCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutQuotesInput = {
    id?: string
    userId: string
    addressId: string
  }

  export type PropertyCreateOrConnectWithoutQuotesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutQuotesInput, PropertyUncheckedCreateWithoutQuotesInput>
  }

  export type PropertyUpsertWithoutQuotesInput = {
    update: XOR<PropertyUpdateWithoutQuotesInput, PropertyUncheckedUpdateWithoutQuotesInput>
    create: XOR<PropertyCreateWithoutQuotesInput, PropertyUncheckedCreateWithoutQuotesInput>
  }

  export type PropertyUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateWithoutAddressInput = {
    id?: string
    lat: number
    lon: number
  }

  export type LocationUncheckedCreateWithoutAddressInput = {
    id?: string
    lat: number
    lon: number
  }

  export type LocationCreateOrConnectWithoutAddressInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAddressInput, LocationUncheckedCreateWithoutAddressInput>
  }

  export type PropertyCreateWithoutAddressInput = {
    id?: string
    user: UserCreateNestedOneWithoutPropertiesInput
    quotes?: QuoteCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAddressInput = {
    id?: string
    userId: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
  }

  export type PropertyCreateManyAddressInputEnvelope = {
    data: Enumerable<PropertyCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutAddressInput = {
    update: XOR<LocationUpdateWithoutAddressInput, LocationUncheckedUpdateWithoutAddressInput>
    create: XOR<LocationCreateWithoutAddressInput, LocationUncheckedCreateWithoutAddressInput>
  }

  export type LocationUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
  }

  export type PropertyUpsertWithWhereUniqueWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
  }

  export type PropertyUpdateManyWithWhereWithoutAddressInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type AddressCreateWithoutLocationInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutLocationInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutLocationInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutLocationInput, AddressUncheckedCreateWithoutLocationInput>
  }

  export type AddressCreateManyLocationInputEnvelope = {
    data: Enumerable<AddressCreateManyLocationInput>
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutLocationInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutLocationInput, AddressUncheckedUpdateWithoutLocationInput>
    create: XOR<AddressCreateWithoutLocationInput, AddressUncheckedCreateWithoutLocationInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutLocationInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutLocationInput, AddressUncheckedUpdateWithoutLocationInput>
  }

  export type AddressUpdateManyWithWhereWithoutLocationInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutAddressInput>
  }

  export type AddressScalarWhereInput = {
    AND?: Enumerable<AddressScalarWhereInput>
    OR?: Enumerable<AddressScalarWhereInput>
    NOT?: Enumerable<AddressScalarWhereInput>
    id?: StringFilter | string
    placeId?: StringFilter | string
    street?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    owner?: StringNullableFilter | string | null
    sunnumber?: IntNullableFilter | number | null
    roofspace?: IntNullableFilter | number | null
    squareFeet?: IntNullableFilter | number | null
    lotSize?: IntNullableFilter | number | null
    bedrooms?: IntNullableFilter | number | null
    value?: IntNullableFilter | number | null
    zipcode?: StringFilter | string
    locationId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DimensionsCreateWithoutPanelInput = {
    id?: string
    length: number
    width: number
    depth: number
  }

  export type DimensionsUncheckedCreateWithoutPanelInput = {
    id?: string
    length: number
    width: number
    depth: number
  }

  export type DimensionsCreateOrConnectWithoutPanelInput = {
    where: DimensionsWhereUniqueInput
    create: XOR<DimensionsCreateWithoutPanelInput, DimensionsUncheckedCreateWithoutPanelInput>
  }

  export type SolarPanelColorsCreateWithoutSolarPanelInput = {
    id?: string
    cell: string
    frame: string
    backsheet: string
  }

  export type SolarPanelColorsUncheckedCreateWithoutSolarPanelInput = {
    id?: string
    cell: string
    frame: string
    backsheet: string
  }

  export type SolarPanelColorsCreateOrConnectWithoutSolarPanelInput = {
    where: SolarPanelColorsWhereUniqueInput
    create: XOR<SolarPanelColorsCreateWithoutSolarPanelInput, SolarPanelColorsUncheckedCreateWithoutSolarPanelInput>
  }

  export type CountryCreateWithoutSolarPanelsInput = {
    id?: string
    name: string
  }

  export type CountryUncheckedCreateWithoutSolarPanelsInput = {
    id?: string
    name: string
  }

  export type CountryCreateOrConnectWithoutSolarPanelsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutSolarPanelsInput, CountryUncheckedCreateWithoutSolarPanelsInput>
  }

  export type InstallerSolarPanelCreateWithoutSolarPanelInput = {
    installer: InstallerCreateNestedOneWithoutSolarPanelsInput
    cost: number
  }

  export type InstallerSolarPanelUncheckedCreateWithoutSolarPanelInput = {
    installerId: string
    cost: number
  }

  export type InstallerSolarPanelCreateOrConnectWithoutSolarPanelInput = {
    where: InstallerSolarPanelWhereUniqueInput
    create: XOR<InstallerSolarPanelCreateWithoutSolarPanelInput, InstallerSolarPanelUncheckedCreateWithoutSolarPanelInput>
  }

  export type InstallerSolarPanelCreateManySolarPanelInputEnvelope = {
    data: Enumerable<InstallerSolarPanelCreateManySolarPanelInput>
    skipDuplicates?: boolean
  }

  export type DimensionsUpsertWithoutPanelInput = {
    update: XOR<DimensionsUpdateWithoutPanelInput, DimensionsUncheckedUpdateWithoutPanelInput>
    create: XOR<DimensionsCreateWithoutPanelInput, DimensionsUncheckedCreateWithoutPanelInput>
  }

  export type DimensionsUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    depth?: FloatFieldUpdateOperationsInput | number
  }

  export type DimensionsUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    depth?: FloatFieldUpdateOperationsInput | number
  }

  export type SolarPanelColorsUpsertWithoutSolarPanelInput = {
    update: XOR<SolarPanelColorsUpdateWithoutSolarPanelInput, SolarPanelColorsUncheckedUpdateWithoutSolarPanelInput>
    create: XOR<SolarPanelColorsCreateWithoutSolarPanelInput, SolarPanelColorsUncheckedCreateWithoutSolarPanelInput>
  }

  export type SolarPanelColorsUpdateWithoutSolarPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    frame?: StringFieldUpdateOperationsInput | string
    backsheet?: StringFieldUpdateOperationsInput | string
  }

  export type SolarPanelColorsUncheckedUpdateWithoutSolarPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    frame?: StringFieldUpdateOperationsInput | string
    backsheet?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUpsertWithWhereUniqueWithoutSolarPanelsInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutSolarPanelsInput, CountryUncheckedUpdateWithoutSolarPanelsInput>
    create: XOR<CountryCreateWithoutSolarPanelsInput, CountryUncheckedCreateWithoutSolarPanelsInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutSolarPanelsInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutSolarPanelsInput, CountryUncheckedUpdateWithoutSolarPanelsInput>
  }

  export type CountryUpdateManyWithWhereWithoutSolarPanelsInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutCountriesInput>
  }

  export type CountryScalarWhereInput = {
    AND?: Enumerable<CountryScalarWhereInput>
    OR?: Enumerable<CountryScalarWhereInput>
    NOT?: Enumerable<CountryScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type InstallerSolarPanelUpsertWithWhereUniqueWithoutSolarPanelInput = {
    where: InstallerSolarPanelWhereUniqueInput
    update: XOR<InstallerSolarPanelUpdateWithoutSolarPanelInput, InstallerSolarPanelUncheckedUpdateWithoutSolarPanelInput>
    create: XOR<InstallerSolarPanelCreateWithoutSolarPanelInput, InstallerSolarPanelUncheckedCreateWithoutSolarPanelInput>
  }

  export type InstallerSolarPanelUpdateWithWhereUniqueWithoutSolarPanelInput = {
    where: InstallerSolarPanelWhereUniqueInput
    data: XOR<InstallerSolarPanelUpdateWithoutSolarPanelInput, InstallerSolarPanelUncheckedUpdateWithoutSolarPanelInput>
  }

  export type InstallerSolarPanelUpdateManyWithWhereWithoutSolarPanelInput = {
    where: InstallerSolarPanelScalarWhereInput
    data: XOR<InstallerSolarPanelUpdateManyMutationInput, InstallerSolarPanelUncheckedUpdateManyWithoutInstallersInput>
  }

  export type InstallerSolarPanelScalarWhereInput = {
    AND?: Enumerable<InstallerSolarPanelScalarWhereInput>
    OR?: Enumerable<InstallerSolarPanelScalarWhereInput>
    NOT?: Enumerable<InstallerSolarPanelScalarWhereInput>
    installerId?: StringFilter | string
    solarPanelId?: StringFilter | string
    cost?: FloatFilter | number
  }

  export type SolarPanelCreateWithoutCountriesInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    dimensions: DimensionsCreateNestedOneWithoutPanelInput
    ppwMarket: number
    material: string
    colors: SolarPanelColorsCreateNestedOneWithoutSolarPanelInput
    manufacturer: string
    energySageLink: string
    installers?: InstallerSolarPanelCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelUncheckedCreateWithoutCountriesInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    dimensionsId: string
    solarPanelColorsId: string
    installers?: InstallerSolarPanelUncheckedCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelCreateOrConnectWithoutCountriesInput = {
    where: SolarPanelWhereUniqueInput
    create: XOR<SolarPanelCreateWithoutCountriesInput, SolarPanelUncheckedCreateWithoutCountriesInput>
  }

  export type SolarPanelUpsertWithWhereUniqueWithoutCountriesInput = {
    where: SolarPanelWhereUniqueInput
    update: XOR<SolarPanelUpdateWithoutCountriesInput, SolarPanelUncheckedUpdateWithoutCountriesInput>
    create: XOR<SolarPanelCreateWithoutCountriesInput, SolarPanelUncheckedCreateWithoutCountriesInput>
  }

  export type SolarPanelUpdateWithWhereUniqueWithoutCountriesInput = {
    where: SolarPanelWhereUniqueInput
    data: XOR<SolarPanelUpdateWithoutCountriesInput, SolarPanelUncheckedUpdateWithoutCountriesInput>
  }

  export type SolarPanelUpdateManyWithWhereWithoutCountriesInput = {
    where: SolarPanelScalarWhereInput
    data: XOR<SolarPanelUpdateManyMutationInput, SolarPanelUncheckedUpdateManyWithoutSolarPanelsInput>
  }

  export type SolarPanelScalarWhereInput = {
    AND?: Enumerable<SolarPanelScalarWhereInput>
    OR?: Enumerable<SolarPanelScalarWhereInput>
    NOT?: Enumerable<SolarPanelScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    model?: StringFilter | string
    wattage?: IntFilter | number
    efficiency?: FloatFilter | number
    rating?: IntFilter | number
    degradation?: FloatFilter | number
    output25?: FloatFilter | number
    warranty?: IntFilter | number
    imagePanel?: StringFilter | string
    imageMounted?: StringNullableFilter | string | null
    ppwMarket?: FloatFilter | number
    material?: StringFilter | string
    manufacturer?: StringFilter | string
    energySageLink?: StringFilter | string
    dimensionsId?: StringFilter | string
    solarPanelColorsId?: StringFilter | string
  }

  export type InstallerTypeCreateWithoutInstallerInput = {
    id?: string
    type: InstallerTypeEnum
  }

  export type InstallerTypeUncheckedCreateWithoutInstallerInput = {
    id?: string
    type: InstallerTypeEnum
  }

  export type InstallerTypeCreateOrConnectWithoutInstallerInput = {
    where: InstallerTypeWhereUniqueInput
    create: XOR<InstallerTypeCreateWithoutInstallerInput, InstallerTypeUncheckedCreateWithoutInstallerInput>
  }

  export type StateCreateWithoutInstallerInput = {
    name: string
    abbreviation: string
  }

  export type StateUncheckedCreateWithoutInstallerInput = {
    name: string
    abbreviation: string
  }

  export type StateCreateOrConnectWithoutInstallerInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutInstallerInput, StateUncheckedCreateWithoutInstallerInput>
  }

  export type InstallerReviewCreateWithoutInstallerInput = {
    id?: string
    rating: number
  }

  export type InstallerReviewUncheckedCreateWithoutInstallerInput = {
    id?: string
    rating: number
  }

  export type InstallerReviewCreateOrConnectWithoutInstallerInput = {
    where: InstallerReviewWhereUniqueInput
    create: XOR<InstallerReviewCreateWithoutInstallerInput, InstallerReviewUncheckedCreateWithoutInstallerInput>
  }

  export type InstallerSolarPanelCreateWithoutInstallerInput = {
    solarPanel: SolarPanelCreateNestedOneWithoutInstallersInput
    cost: number
  }

  export type InstallerSolarPanelUncheckedCreateWithoutInstallerInput = {
    solarPanelId: string
    cost: number
  }

  export type InstallerSolarPanelCreateOrConnectWithoutInstallerInput = {
    where: InstallerSolarPanelWhereUniqueInput
    create: XOR<InstallerSolarPanelCreateWithoutInstallerInput, InstallerSolarPanelUncheckedCreateWithoutInstallerInput>
  }

  export type InstallerSolarPanelCreateManyInstallerInputEnvelope = {
    data: Enumerable<InstallerSolarPanelCreateManyInstallerInput>
    skipDuplicates?: boolean
  }

  export type InstallerTypeUpsertWithWhereUniqueWithoutInstallerInput = {
    where: InstallerTypeWhereUniqueInput
    update: XOR<InstallerTypeUpdateWithoutInstallerInput, InstallerTypeUncheckedUpdateWithoutInstallerInput>
    create: XOR<InstallerTypeCreateWithoutInstallerInput, InstallerTypeUncheckedCreateWithoutInstallerInput>
  }

  export type InstallerTypeUpdateWithWhereUniqueWithoutInstallerInput = {
    where: InstallerTypeWhereUniqueInput
    data: XOR<InstallerTypeUpdateWithoutInstallerInput, InstallerTypeUncheckedUpdateWithoutInstallerInput>
  }

  export type InstallerTypeUpdateManyWithWhereWithoutInstallerInput = {
    where: InstallerTypeScalarWhereInput
    data: XOR<InstallerTypeUpdateManyMutationInput, InstallerTypeUncheckedUpdateManyWithoutTypesInput>
  }

  export type InstallerTypeScalarWhereInput = {
    AND?: Enumerable<InstallerTypeScalarWhereInput>
    OR?: Enumerable<InstallerTypeScalarWhereInput>
    NOT?: Enumerable<InstallerTypeScalarWhereInput>
    id?: StringFilter | string
    type?: EnumInstallerTypeEnumFilter | InstallerTypeEnum
  }

  export type StateUpsertWithWhereUniqueWithoutInstallerInput = {
    where: StateWhereUniqueInput
    update: XOR<StateUpdateWithoutInstallerInput, StateUncheckedUpdateWithoutInstallerInput>
    create: XOR<StateCreateWithoutInstallerInput, StateUncheckedCreateWithoutInstallerInput>
  }

  export type StateUpdateWithWhereUniqueWithoutInstallerInput = {
    where: StateWhereUniqueInput
    data: XOR<StateUpdateWithoutInstallerInput, StateUncheckedUpdateWithoutInstallerInput>
  }

  export type StateUpdateManyWithWhereWithoutInstallerInput = {
    where: StateScalarWhereInput
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyWithoutOperatingStatesInput>
  }

  export type StateScalarWhereInput = {
    AND?: Enumerable<StateScalarWhereInput>
    OR?: Enumerable<StateScalarWhereInput>
    NOT?: Enumerable<StateScalarWhereInput>
    name?: StringFilter | string
    abbreviation?: StringFilter | string
  }

  export type InstallerReviewUpsertWithWhereUniqueWithoutInstallerInput = {
    where: InstallerReviewWhereUniqueInput
    update: XOR<InstallerReviewUpdateWithoutInstallerInput, InstallerReviewUncheckedUpdateWithoutInstallerInput>
    create: XOR<InstallerReviewCreateWithoutInstallerInput, InstallerReviewUncheckedCreateWithoutInstallerInput>
  }

  export type InstallerReviewUpdateWithWhereUniqueWithoutInstallerInput = {
    where: InstallerReviewWhereUniqueInput
    data: XOR<InstallerReviewUpdateWithoutInstallerInput, InstallerReviewUncheckedUpdateWithoutInstallerInput>
  }

  export type InstallerReviewUpdateManyWithWhereWithoutInstallerInput = {
    where: InstallerReviewScalarWhereInput
    data: XOR<InstallerReviewUpdateManyMutationInput, InstallerReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type InstallerReviewScalarWhereInput = {
    AND?: Enumerable<InstallerReviewScalarWhereInput>
    OR?: Enumerable<InstallerReviewScalarWhereInput>
    NOT?: Enumerable<InstallerReviewScalarWhereInput>
    id?: StringFilter | string
    rating?: IntFilter | number
  }

  export type InstallerSolarPanelUpsertWithWhereUniqueWithoutInstallerInput = {
    where: InstallerSolarPanelWhereUniqueInput
    update: XOR<InstallerSolarPanelUpdateWithoutInstallerInput, InstallerSolarPanelUncheckedUpdateWithoutInstallerInput>
    create: XOR<InstallerSolarPanelCreateWithoutInstallerInput, InstallerSolarPanelUncheckedCreateWithoutInstallerInput>
  }

  export type InstallerSolarPanelUpdateWithWhereUniqueWithoutInstallerInput = {
    where: InstallerSolarPanelWhereUniqueInput
    data: XOR<InstallerSolarPanelUpdateWithoutInstallerInput, InstallerSolarPanelUncheckedUpdateWithoutInstallerInput>
  }

  export type InstallerSolarPanelUpdateManyWithWhereWithoutInstallerInput = {
    where: InstallerSolarPanelScalarWhereInput
    data: XOR<InstallerSolarPanelUpdateManyMutationInput, InstallerSolarPanelUncheckedUpdateManyWithoutSolarPanelsInput>
  }

  export type InstallerCreateWithoutTypesInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    license: string
    operatingStates?: StateCreateNestedManyWithoutInstallerInput
    reviews?: InstallerReviewCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelCreateNestedManyWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutTypesInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    license: string
    operatingStates?: StateUncheckedCreateNestedManyWithoutInstallerInput
    reviews?: InstallerReviewUncheckedCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelUncheckedCreateNestedManyWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutTypesInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutTypesInput, InstallerUncheckedCreateWithoutTypesInput>
  }

  export type InstallerUpsertWithWhereUniqueWithoutTypesInput = {
    where: InstallerWhereUniqueInput
    update: XOR<InstallerUpdateWithoutTypesInput, InstallerUncheckedUpdateWithoutTypesInput>
    create: XOR<InstallerCreateWithoutTypesInput, InstallerUncheckedCreateWithoutTypesInput>
  }

  export type InstallerUpdateWithWhereUniqueWithoutTypesInput = {
    where: InstallerWhereUniqueInput
    data: XOR<InstallerUpdateWithoutTypesInput, InstallerUncheckedUpdateWithoutTypesInput>
  }

  export type InstallerUpdateManyWithWhereWithoutTypesInput = {
    where: InstallerScalarWhereInput
    data: XOR<InstallerUpdateManyMutationInput, InstallerUncheckedUpdateManyWithoutInstallerInput>
  }

  export type InstallerScalarWhereInput = {
    AND?: Enumerable<InstallerScalarWhereInput>
    OR?: Enumerable<InstallerScalarWhereInput>
    NOT?: Enumerable<InstallerScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    founded?: DateTimeFilter | Date | string
    license?: StringFilter | string
  }

  export type InstallerCreateWithoutReviewsInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeCreateNestedManyWithoutInstallerInput
    license: string
    operatingStates?: StateCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelCreateNestedManyWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeUncheckedCreateNestedManyWithoutInstallerInput
    license: string
    operatingStates?: StateUncheckedCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelUncheckedCreateNestedManyWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutReviewsInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutReviewsInput, InstallerUncheckedCreateWithoutReviewsInput>
  }

  export type InstallerUpsertWithWhereUniqueWithoutReviewsInput = {
    where: InstallerWhereUniqueInput
    update: XOR<InstallerUpdateWithoutReviewsInput, InstallerUncheckedUpdateWithoutReviewsInput>
    create: XOR<InstallerCreateWithoutReviewsInput, InstallerUncheckedCreateWithoutReviewsInput>
  }

  export type InstallerUpdateWithWhereUniqueWithoutReviewsInput = {
    where: InstallerWhereUniqueInput
    data: XOR<InstallerUpdateWithoutReviewsInput, InstallerUncheckedUpdateWithoutReviewsInput>
  }

  export type InstallerUpdateManyWithWhereWithoutReviewsInput = {
    where: InstallerScalarWhereInput
    data: XOR<InstallerUpdateManyMutationInput, InstallerUncheckedUpdateManyWithoutInstallerInput>
  }

  export type InstallerCreateWithoutOperatingStatesInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeCreateNestedManyWithoutInstallerInput
    license: string
    reviews?: InstallerReviewCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelCreateNestedManyWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutOperatingStatesInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeUncheckedCreateNestedManyWithoutInstallerInput
    license: string
    reviews?: InstallerReviewUncheckedCreateNestedManyWithoutInstallerInput
    solarPanels?: InstallerSolarPanelUncheckedCreateNestedManyWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutOperatingStatesInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutOperatingStatesInput, InstallerUncheckedCreateWithoutOperatingStatesInput>
  }

  export type InstallerUpsertWithWhereUniqueWithoutOperatingStatesInput = {
    where: InstallerWhereUniqueInput
    update: XOR<InstallerUpdateWithoutOperatingStatesInput, InstallerUncheckedUpdateWithoutOperatingStatesInput>
    create: XOR<InstallerCreateWithoutOperatingStatesInput, InstallerUncheckedCreateWithoutOperatingStatesInput>
  }

  export type InstallerUpdateWithWhereUniqueWithoutOperatingStatesInput = {
    where: InstallerWhereUniqueInput
    data: XOR<InstallerUpdateWithoutOperatingStatesInput, InstallerUncheckedUpdateWithoutOperatingStatesInput>
  }

  export type InstallerUpdateManyWithWhereWithoutOperatingStatesInput = {
    where: InstallerScalarWhereInput
    data: XOR<InstallerUpdateManyMutationInput, InstallerUncheckedUpdateManyWithoutInstallerInput>
  }

  export type InstallerCreateWithoutSolarPanelsInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeCreateNestedManyWithoutInstallerInput
    license: string
    operatingStates?: StateCreateNestedManyWithoutInstallerInput
    reviews?: InstallerReviewCreateNestedManyWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutSolarPanelsInput = {
    id?: string
    name: string
    image: string
    founded: Date | string
    types?: InstallerTypeUncheckedCreateNestedManyWithoutInstallerInput
    license: string
    operatingStates?: StateUncheckedCreateNestedManyWithoutInstallerInput
    reviews?: InstallerReviewUncheckedCreateNestedManyWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutSolarPanelsInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutSolarPanelsInput, InstallerUncheckedCreateWithoutSolarPanelsInput>
  }

  export type SolarPanelCreateWithoutInstallersInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    dimensions: DimensionsCreateNestedOneWithoutPanelInput
    ppwMarket: number
    material: string
    colors: SolarPanelColorsCreateNestedOneWithoutSolarPanelInput
    manufacturer: string
    energySageLink: string
    countries?: CountryCreateNestedManyWithoutSolarPanelsInput
  }

  export type SolarPanelUncheckedCreateWithoutInstallersInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    countries?: CountryUncheckedCreateNestedManyWithoutSolarPanelsInput
    dimensionsId: string
    solarPanelColorsId: string
  }

  export type SolarPanelCreateOrConnectWithoutInstallersInput = {
    where: SolarPanelWhereUniqueInput
    create: XOR<SolarPanelCreateWithoutInstallersInput, SolarPanelUncheckedCreateWithoutInstallersInput>
  }

  export type InstallerUpsertWithoutSolarPanelsInput = {
    update: XOR<InstallerUpdateWithoutSolarPanelsInput, InstallerUncheckedUpdateWithoutSolarPanelsInput>
    create: XOR<InstallerCreateWithoutSolarPanelsInput, InstallerUncheckedCreateWithoutSolarPanelsInput>
  }

  export type InstallerUpdateWithoutSolarPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUpdateManyWithoutInstallerNestedInput
    reviews?: InstallerReviewUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutSolarPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUncheckedUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUncheckedUpdateManyWithoutInstallerNestedInput
    reviews?: InstallerReviewUncheckedUpdateManyWithoutInstallerNestedInput
  }

  export type SolarPanelUpsertWithoutInstallersInput = {
    update: XOR<SolarPanelUpdateWithoutInstallersInput, SolarPanelUncheckedUpdateWithoutInstallersInput>
    create: XOR<SolarPanelCreateWithoutInstallersInput, SolarPanelUncheckedCreateWithoutInstallersInput>
  }

  export type SolarPanelUpdateWithoutInstallersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: DimensionsUpdateOneRequiredWithoutPanelNestedInput
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    colors?: SolarPanelColorsUpdateOneRequiredWithoutSolarPanelNestedInput
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUpdateManyWithoutSolarPanelsNestedInput
  }

  export type SolarPanelUncheckedUpdateWithoutInstallersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUncheckedUpdateManyWithoutSolarPanelsNestedInput
    dimensionsId?: StringFieldUpdateOperationsInput | string
    solarPanelColorsId?: StringFieldUpdateOperationsInput | string
  }

  export type SolarPanelCreateWithoutDimensionsInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    colors: SolarPanelColorsCreateNestedOneWithoutSolarPanelInput
    manufacturer: string
    energySageLink: string
    countries?: CountryCreateNestedManyWithoutSolarPanelsInput
    installers?: InstallerSolarPanelCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelUncheckedCreateWithoutDimensionsInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    countries?: CountryUncheckedCreateNestedManyWithoutSolarPanelsInput
    solarPanelColorsId: string
    installers?: InstallerSolarPanelUncheckedCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelCreateOrConnectWithoutDimensionsInput = {
    where: SolarPanelWhereUniqueInput
    create: XOR<SolarPanelCreateWithoutDimensionsInput, SolarPanelUncheckedCreateWithoutDimensionsInput>
  }

  export type SolarPanelCreateManyDimensionsInputEnvelope = {
    data: Enumerable<SolarPanelCreateManyDimensionsInput>
    skipDuplicates?: boolean
  }

  export type SolarPanelUpsertWithWhereUniqueWithoutDimensionsInput = {
    where: SolarPanelWhereUniqueInput
    update: XOR<SolarPanelUpdateWithoutDimensionsInput, SolarPanelUncheckedUpdateWithoutDimensionsInput>
    create: XOR<SolarPanelCreateWithoutDimensionsInput, SolarPanelUncheckedCreateWithoutDimensionsInput>
  }

  export type SolarPanelUpdateWithWhereUniqueWithoutDimensionsInput = {
    where: SolarPanelWhereUniqueInput
    data: XOR<SolarPanelUpdateWithoutDimensionsInput, SolarPanelUncheckedUpdateWithoutDimensionsInput>
  }

  export type SolarPanelUpdateManyWithWhereWithoutDimensionsInput = {
    where: SolarPanelScalarWhereInput
    data: XOR<SolarPanelUpdateManyMutationInput, SolarPanelUncheckedUpdateManyWithoutPanelInput>
  }

  export type SolarPanelCreateWithoutColorsInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    dimensions: DimensionsCreateNestedOneWithoutPanelInput
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    countries?: CountryCreateNestedManyWithoutSolarPanelsInput
    installers?: InstallerSolarPanelCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelUncheckedCreateWithoutColorsInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    countries?: CountryUncheckedCreateNestedManyWithoutSolarPanelsInput
    dimensionsId: string
    installers?: InstallerSolarPanelUncheckedCreateNestedManyWithoutSolarPanelInput
  }

  export type SolarPanelCreateOrConnectWithoutColorsInput = {
    where: SolarPanelWhereUniqueInput
    create: XOR<SolarPanelCreateWithoutColorsInput, SolarPanelUncheckedCreateWithoutColorsInput>
  }

  export type SolarPanelCreateManyColorsInputEnvelope = {
    data: Enumerable<SolarPanelCreateManyColorsInput>
    skipDuplicates?: boolean
  }

  export type SolarPanelUpsertWithWhereUniqueWithoutColorsInput = {
    where: SolarPanelWhereUniqueInput
    update: XOR<SolarPanelUpdateWithoutColorsInput, SolarPanelUncheckedUpdateWithoutColorsInput>
    create: XOR<SolarPanelCreateWithoutColorsInput, SolarPanelUncheckedCreateWithoutColorsInput>
  }

  export type SolarPanelUpdateWithWhereUniqueWithoutColorsInput = {
    where: SolarPanelWhereUniqueInput
    data: XOR<SolarPanelUpdateWithoutColorsInput, SolarPanelUncheckedUpdateWithoutColorsInput>
  }

  export type SolarPanelUpdateManyWithWhereWithoutColorsInput = {
    where: SolarPanelScalarWhereInput
    data: XOR<SolarPanelUpdateManyMutationInput, SolarPanelUncheckedUpdateManyWithoutSolarPanelInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken?: string
    expires: Date | string
  }

  export type PropertyCreateManyUserInput = {
    id?: string
    addressId: string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    quotes?: QuoteUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteCreateManyPropertyInput = {
    id?: string
  }

  export type QuoteUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteUncheckedUpdateManyWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateManyAddressInput = {
    id?: string
    userId: string
  }

  export type PropertyUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    quotes?: QuoteUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type AddressCreateManyLocationInput = {
    id?: string
    placeId: string
    street: string
    city: string
    state: string
    owner?: string | null
    sunnumber?: number | null
    roofspace?: number | null
    squareFeet?: number | null
    lotSize?: number | null
    bedrooms?: number | null
    value?: number | null
    zipcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    sunnumber?: NullableIntFieldUpdateOperationsInput | number | null
    roofspace?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    lotSize?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    zipcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallerSolarPanelCreateManySolarPanelInput = {
    installerId: string
    cost: number
  }

  export type CountryUpdateWithoutSolarPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutSolarPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyWithoutCountriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerSolarPanelUpdateWithoutSolarPanelInput = {
    installer?: InstallerUpdateOneRequiredWithoutSolarPanelsNestedInput
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelUncheckedUpdateWithoutSolarPanelInput = {
    installerId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelUncheckedUpdateManyWithoutInstallersInput = {
    installerId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type SolarPanelUpdateWithoutCountriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: DimensionsUpdateOneRequiredWithoutPanelNestedInput
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    colors?: SolarPanelColorsUpdateOneRequiredWithoutSolarPanelNestedInput
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    installers?: InstallerSolarPanelUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelUncheckedUpdateWithoutCountriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    dimensionsId?: StringFieldUpdateOperationsInput | string
    solarPanelColorsId?: StringFieldUpdateOperationsInput | string
    installers?: InstallerSolarPanelUncheckedUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelUncheckedUpdateManyWithoutSolarPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    dimensionsId?: StringFieldUpdateOperationsInput | string
    solarPanelColorsId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerSolarPanelCreateManyInstallerInput = {
    solarPanelId: string
    cost: number
  }

  export type InstallerTypeUpdateWithoutInstallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstallerTypeEnumFieldUpdateOperationsInput | InstallerTypeEnum
  }

  export type InstallerTypeUncheckedUpdateWithoutInstallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstallerTypeEnumFieldUpdateOperationsInput | InstallerTypeEnum
  }

  export type InstallerTypeUncheckedUpdateManyWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstallerTypeEnumFieldUpdateOperationsInput | InstallerTypeEnum
  }

  export type StateUpdateWithoutInstallerInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateWithoutInstallerInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyWithoutOperatingStatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerReviewUpdateWithoutInstallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type InstallerReviewUncheckedUpdateWithoutInstallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type InstallerReviewUncheckedUpdateManyWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelUpdateWithoutInstallerInput = {
    solarPanel?: SolarPanelUpdateOneRequiredWithoutInstallersNestedInput
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelUncheckedUpdateWithoutInstallerInput = {
    solarPanelId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerSolarPanelUncheckedUpdateManyWithoutSolarPanelsInput = {
    solarPanelId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallerUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUpdateManyWithoutInstallerNestedInput
    reviews?: InstallerReviewUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUncheckedUpdateManyWithoutInstallerNestedInput
    reviews?: InstallerReviewUncheckedUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUncheckedUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateManyWithoutInstallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: StringFieldUpdateOperationsInput | string
  }

  export type InstallerUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUncheckedUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    operatingStates?: StateUncheckedUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUncheckedUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerUpdateWithoutOperatingStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    reviews?: InstallerReviewUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUpdateManyWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutOperatingStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    founded?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: InstallerTypeUncheckedUpdateManyWithoutInstallerNestedInput
    license?: StringFieldUpdateOperationsInput | string
    reviews?: InstallerReviewUncheckedUpdateManyWithoutInstallerNestedInput
    solarPanels?: InstallerSolarPanelUncheckedUpdateManyWithoutInstallerNestedInput
  }

  export type SolarPanelCreateManyDimensionsInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    solarPanelColorsId: string
  }

  export type SolarPanelUpdateWithoutDimensionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    colors?: SolarPanelColorsUpdateOneRequiredWithoutSolarPanelNestedInput
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUpdateManyWithoutSolarPanelsNestedInput
    installers?: InstallerSolarPanelUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelUncheckedUpdateWithoutDimensionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUncheckedUpdateManyWithoutSolarPanelsNestedInput
    solarPanelColorsId?: StringFieldUpdateOperationsInput | string
    installers?: InstallerSolarPanelUncheckedUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    solarPanelColorsId?: StringFieldUpdateOperationsInput | string
  }

  export type SolarPanelCreateManyColorsInput = {
    id?: string
    name: string
    model: string
    wattage: number
    efficiency: number
    rating: number
    degradation: number
    output25: number
    warranty: number
    imagePanel: string
    imageMounted?: string | null
    ppwMarket: number
    material: string
    manufacturer: string
    energySageLink: string
    dimensionsId: string
  }

  export type SolarPanelUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: DimensionsUpdateOneRequiredWithoutPanelNestedInput
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUpdateManyWithoutSolarPanelsNestedInput
    installers?: InstallerSolarPanelUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelUncheckedUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    countries?: CountryUncheckedUpdateManyWithoutSolarPanelsNestedInput
    dimensionsId?: StringFieldUpdateOperationsInput | string
    installers?: InstallerSolarPanelUncheckedUpdateManyWithoutSolarPanelNestedInput
  }

  export type SolarPanelUncheckedUpdateManyWithoutSolarPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    wattage?: IntFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    degradation?: FloatFieldUpdateOperationsInput | number
    output25?: FloatFieldUpdateOperationsInput | number
    warranty?: IntFieldUpdateOperationsInput | number
    imagePanel?: StringFieldUpdateOperationsInput | string
    imageMounted?: NullableStringFieldUpdateOperationsInput | string | null
    ppwMarket?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    energySageLink?: StringFieldUpdateOperationsInput | string
    dimensionsId?: StringFieldUpdateOperationsInput | string
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