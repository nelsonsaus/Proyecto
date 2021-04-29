<?php
function authenticate($user, $password) {
	
	    $_SESSION['user'] = $user;
		$_SESSION['access'] = 1;
		return true;
	if(empty($user) || empty($password)) return false;
 
	// active directory server
	$ldap_host = "ldap.juntadeandalucia.es";
 
	// active directory DN (base location of ldap search)
	$ldap_dn = "o=csalud,o=empleados,o=juntadeandalucia,c=es";
 
	// active directory user group name
	$ldap_user_group = "WebUsers";
 
	// active directory manager group name
	$ldap_manager_group = "WebManagers";
 
	// domain, for purposes of constructing $user
	$ldap_usr_dom = '@juntadeandalucia.es';
 
	// connect to active directory
	$ldap = ldap_connect($ldap_host);
	echo "ldap: $ldap <br/>\n";
 
	// configure ldap params
	ldap_set_option($ldap,LDAP_OPT_PROTOCOL_VERSION,3);
	ldap_set_option($ldap,LDAP_OPT_REFERRALS,0);
 
	// verify user and password
	$bind_user="uid=".$user.",".$ldap_dn;	
	if($bind = @ldap_bind($ldap, $bind_user , $password)) {
		// valid
		// establish session variables
		$_SESSION['user'] = $user;
		$_SESSION['access'] = 1;
		return true;
 
	} else {
		// invalid name or password
		return false;
	}
}
?>
