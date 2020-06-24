<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'XXX' );

/** MySQL database username */
define( 'DB_USER', 'XXX' );

/** MySQL database password */
define( 'DB_PASSWORD', 'XXX' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qyqcyraitviphh5ztxe65y3vxfnpwwl4yhpyphz9oyurhsqggbo7phkd5ahc3kcg' );
define( 'SECURE_AUTH_KEY',  'ifd98akwibs8abqdrdxrwiayvgcvaa1nux8xln42rkrlimsnndbzagolf2axsk86' );
define( 'LOGGED_IN_KEY',    'jd0qr4qpjkx238slga5tvfh2bpg2i0cmxfcflc8wd2tpgk8keo9iejvb2ncbyzg7' );
define( 'NONCE_KEY',        'wfbggotbs4kabtrij3v16uu8namywstkmvpju6vhnu0abd3hjjhdlt5rva4ih6iv' );
define( 'AUTH_SALT',        'rcbkfnj9kf8xns4itrrp6u7i99qhgckx1t1wx2vli1hwlrhgocvaj7klyfrtwvvo' );
define( 'SECURE_AUTH_SALT', 'pdo8qux0ql0ffwwpuvw3epoavnkgbjehctfpu0bmt3a6bq9lri3fuwgekejdayvy' );
define( 'LOGGED_IN_SALT',   'oaszmxic1ujxnffsxbmagvgnftfsxs8w4jx3i4v5rcaedy9eidhzhcngc4zzl4uq' );
define( 'NONCE_SALT',       'rdgcgiqaul5jkzqdqaxqj3hmib4e9ml5gz7ktaunre9ybxziokn2ua2ddhibyuuu' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpsd_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
