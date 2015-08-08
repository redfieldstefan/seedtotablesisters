<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i670036_wp3');

/** MySQL database username */
define('DB_USER', 'i670036_wp3');

/** MySQL database password */
define('DB_PASSWORD', 'P)J8CSfuFJ94#^2');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Gb7w6rs3TwCuHRcEnQg4KQ6MoA5h9PcFFsZY19NDn3JdXQ42A6LxYFbmubv5xoKF');
define('SECURE_AUTH_KEY',  'wByzKxiusIIR6gxokCxMcv0Iu6gx4x8I04LptRYbN55X5EKDXm3Q9y91KVeJzWYK');
define('LOGGED_IN_KEY',    '59hUyA0oZLIeJH0ctsakZFTb7fyNnMrNYZbsNhU1vVeD0OD8M1UQxWCzcJlzGuVL');
define('NONCE_KEY',        'l9BeBTXVMgd25UnhJbRwSU5F4N7X4bcjKb8r46HOQCoZve98I9139xLEp9TjdfJU');
define('AUTH_SALT',        'eF8Nj59rkAsRVzDNg871Qgo0QUWLrbQXsOQ1Psc0uWQByGfpYRXNiI0tcKOoR1CY');
define('SECURE_AUTH_SALT', 'JUzX9pwYrEKOFrTswQdoD1KDOX7VBw4UNFivYX371F05TMoJKXyRdXfFXXOqS1d6');
define('LOGGED_IN_SALT',   '4koZa9jn9Alio90kKlTL36itMdWzBPN9HosOXgQCRaZdx8039pmngezbMW4tVhrS');
define('NONCE_SALT',       'dcxCtf8rs86sYvSPvvmdovARXNKQpNWR3TFrj3NAvSl46S6GiRvKWUn850ppg0ug');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
