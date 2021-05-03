-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 22-03-2021 a las 12:19:21
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `desarrollo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centros`
--

CREATE TABLE IF NOT EXISTS `centros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_centro` varchar(100) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `localidad` varchar(50) DEFAULT NULL,
  `activo` varchar(2) NOT NULL DEFAULT 'Si',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuatrimestre`
--

CREATE TABLE IF NOT EXISTS `cuatrimestre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `fecha_concesion` date NOT NULL,
  `dias_cuatrimestre` int(11) NOT NULL,
  `anyo` int(11) NOT NULL,
  `cantidad_calculada` decimal(10,2) DEFAULT NULL,
  `cantidad_recomendada` decimal(10,2) DEFAULT NULL,
  `trabajadores` int(11) DEFAULT NULL,
  `p_calidad` decimal(2,2) NOT NULL,
  `p_iniciativa` decimal(2,2) NOT NULL,
  `p_asistencia` decimal(2,2) NOT NULL,
  `p_disponibilidad` decimal(2,2) NOT NULL,
  `p_formacion` decimal(2,2) NOT NULL,
  `estado` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `importes_servicios`
--

CREATE TABLE IF NOT EXISTS `importes_servicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_periodo` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `numero_funcionarios` int(4) DEFAULT NULL,
  `numero_laborales` int(4) DEFAULT NULL,
  `importe_asignado_func` int(11) DEFAULT NULL,
  `importe_asignado_lab` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `importe_por_servicios_ibfk_1` (`id_servicio`),
  KEY `importe_por_servicios_ibfk_2` (`id_periodo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parametros_generales`
--

CREATE TABLE IF NOT EXISTS `parametros_generales` (
  `cargo` varchar(30) NOT NULL,
  `firma` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productividad`
--

CREATE TABLE IF NOT EXISTS `productividad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_periodo` int(11) NOT NULL,
  `nif_trabajador` varchar(15) NOT NULL,
  `id_programa` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `puntuacion_calidad` int(11) NOT NULL,
  `puntuacion_iniciativa` int(11) NOT NULL,
  `puntuacion_asistencia` int(11) NOT NULL,
  `puntuacion_disponibilidad` int(11) NOT NULL,
  `puntuacion_formacion` int(11) NOT NULL,
  `dias_trabajados` int(11) NOT NULL,
  `importe` decimal(10,0) NOT NULL,
  `porcentaje` decimal(1,1) NOT NULL DEFAULT '0.9',
  PRIMARY KEY (`id`),
  KEY `id_periodo` (`id_periodo`),
  KEY `nif_trabajador` (`nif_trabajador`),
  KEY `id_programa` (`id_programa`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=194 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programa`
--

CREATE TABLE IF NOT EXISTS `programa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `categoria` varchar(15) NOT NULL DEFAULT 'Funcionarios',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=66 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programas_periodos`
--

CREATE TABLE IF NOT EXISTS `programas_periodos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_periodo` int(11) NOT NULL,
  `id_programa` int(11) NOT NULL,
  `presupuesto` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_periodo` (`id_periodo`),
  KEY `id_programa` (`id_programa`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=54 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puestos`
--

CREATE TABLE IF NOT EXISTS `puestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_puesto` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=74 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE IF NOT EXISTS `servicio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_programa_func` int(11) NOT NULL,
  `id_programa_lab` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE IF NOT EXISTS `trabajador` (
  `nif` varchar(15) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `activo` varchar(2) NOT NULL DEFAULT 'Si',
  `productividad` varchar(2) NOT NULL DEFAULT 'Si',
  `categoria` varchar(15) NOT NULL,
  `puesto` varchar(30) DEFAULT NULL,
  `fecha_alta` date NOT NULL,
  `fecha_baja` date DEFAULT NULL,
  `centro` varchar(30) NOT NULL,
  `telefono` int(9) DEFAULT NULL,
  `imagen` varchar(50) NOT NULL,
  PRIMARY KEY (`nif`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores_servicios`
--

CREATE TABLE IF NOT EXISTS `trabajadores_servicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nif` varchar(9) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `fecha_alta` date NOT NULL,
  `fecha_baja` date DEFAULT NULL,
  `activo` varchar(2) NOT NULL DEFAULT 'Si',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Filtros para las tablas descargadas (dump)
--

--
-- Filtros para la tabla `importes_servicios`
--
ALTER TABLE `importes_servicios`
  ADD CONSTRAINT `importes_servicios_ibfk_1` FOREIGN KEY (`id_servicio`) REFERENCES `servicio` (`id`),
  ADD CONSTRAINT `importes_servicios_ibfk_2` FOREIGN KEY (`id_periodo`) REFERENCES `productividad` (`id_periodo`);

--
-- Filtros para la tabla `productividad`
--
ALTER TABLE `productividad`
  ADD CONSTRAINT `productividad_ibfk_1` FOREIGN KEY (`id_periodo`) REFERENCES `cuatrimestre` (`id`),
  ADD CONSTRAINT `productividad_ibfk_2` FOREIGN KEY (`nif_trabajador`) REFERENCES `trabajador` (`nif`),
  ADD CONSTRAINT `productividad_ibfk_3` FOREIGN KEY (`id_programa`) REFERENCES `programa` (`id`);
