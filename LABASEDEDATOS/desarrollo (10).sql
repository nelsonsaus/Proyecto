-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2021 a las 19:09:46
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `desarrollo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centros`
--

CREATE TABLE `centros` (
  `id` int(11) NOT NULL,
  `nombre_centro` varchar(100) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `localidad` varchar(50) DEFAULT NULL,
  `activo` varchar(2) NOT NULL DEFAULT 'Si'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `centros`
--

INSERT INTO `centros` (`id`, `nombre_centro`, `direccion`, `localidad`, `activo`) VALUES
(1, 'Delegación Territorial (Ed. Principal)', 'CR Ronda 101. 04071', 'Almería', 'Si'),
(2, 'U.M.V.I', 'CR Ronda 226, PL -1. 04071', 'Almería', 'Si');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversaciones`
--

CREATE TABLE `conversaciones` (
  `id` int(11) NOT NULL,
  `emisor` int(11) NOT NULL,
  `receptor` int(11) NOT NULL,
  `mensaje` text NOT NULL,
  `fecha` datetime NOT NULL,
  `reciente` varchar(10) NOT NULL,
  `importante` varchar(10) NOT NULL,
  `leido` varchar(2) NOT NULL DEFAULT 'No'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `conversaciones`
--

INSERT INTO `conversaciones` (`id`, `emisor`, `receptor`, `mensaje`, `fecha`, `reciente`, `importante`, `leido`) VALUES
(2, 2, 3, 'hola amiga', '2021-05-20 19:37:33', 'Si', '', 'No'),
(3, 2, 4, 'hola amigo', '2021-05-20 22:01:21', 'Si', '', 'No'),
(4, 1, 3, 'Hola ada', '2021-05-23 13:04:53', 'Si', 'Si', 'No'),
(5, 1, 4, 'deee', '2021-05-23 13:15:53', 'Si', 'Si', 'No'),
(6, 1, 4, 'illo', '2021-05-23 13:56:23', 'Si', 'Si', 'No'),
(7, 1, 5, 'ddddddd hola', '2021-05-23 15:55:33', 'Si', 'No', 'No'),
(8, 1, 5, 'adiooo', '2021-05-23 15:57:43', 'Si', 'Si', 'No'),
(9, 1, 2, 'd1', '2021-05-23 16:43:03', 'Si', 'No', 'No'),
(10, 1, 5, 'buenos', '2021-05-24 17:19:12', 'Si', 'No', 'No'),
(11, 1, 5, 'dias', '2021-05-24 17:19:16', 'Si', 'Si', 'No'),
(12, 1, 2, 'hola', '2021-05-24 17:19:53', 'Si', 'Si', 'No'),
(13, 1, 5, 'adios', '2021-05-24 17:19:56', 'Si', 'Si', 'No'),
(14, 1, 4, 'VISIBLE', '2021-05-24 17:41:43', 'Si', 'Si', 'No'),
(15, 1, 2, 'heyyy', '2021-05-24 17:42:45', 'Si', 'No', 'No'),
(16, 1, 2, 'bro', '2021-05-24 17:58:58', 'Si', 'No', 'No'),
(17, 1, 2, 'br', '2021-05-24 17:59:56', 'Si', 'No', 'No'),
(18, 1, 2, 'br2', '2021-05-24 18:00:02', 'Si', 'No', 'No'),
(19, 1, 2, 'br3', '2021-05-24 18:00:18', 'Si', 'No', 'No'),
(20, 1, 2, 'br3', '2021-05-24 18:00:45', 'Si', 'No', 'No'),
(21, 1, 5, 'd', '2021-06-04 17:27:37', 'Si', 'No', 'No'),
(22, 1, 2, 'd', '2021-06-04 17:30:27', 'Si', 'No', 'No'),
(24, 5, 1, 'aaaa', '2021-06-01 18:09:59', 'Si', 'No', 'No'),
(29, 9, 3, 'aa', '2021-06-09 19:03:00', 'Si', 'No', 'No');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuatrimestre`
--

CREATE TABLE `cuatrimestre` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `fecha_concesion` date NOT NULL,
  `dias_cuatrimestre` int(11) NOT NULL,
  `anyo` int(11) DEFAULT NULL,
  `cantidad_calculada` decimal(10,2) DEFAULT NULL,
  `cantidad_recomendada` decimal(10,2) DEFAULT NULL,
  `trabajadores` int(11) DEFAULT NULL,
  `p_calidad` decimal(2,2) NOT NULL,
  `p_iniciativa` decimal(2,2) NOT NULL,
  `p_asistencia` decimal(2,2) NOT NULL,
  `p_disponibilidad` decimal(2,2) NOT NULL,
  `p_formacion` decimal(2,2) NOT NULL,
  `estado` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuatrimestre`
--

INSERT INTO `cuatrimestre` (`id`, `nombre`, `fecha_inicio`, `fecha_fin`, `fecha_concesion`, `dias_cuatrimestre`, `anyo`, `cantidad_calculada`, `cantidad_recomendada`, `trabajadores`, `p_calidad`, `p_iniciativa`, `p_asistencia`, `p_disponibilidad`, `p_formacion`, `estado`) VALUES
(1, '2018 1er Cuatrimestre', '2018-08-01', '2018-08-31', '2018-08-14', 118, 2018, '345345.00', '342220.50', 140, '0.30', '0.20', '0.10', '0.20', '0.20', 'F'),
(2, '2018. 2º Cuatrimestre', '2018-04-01', '2018-07-31', '2018-09-16', 119, 2018, '340000.00', '280602.00', 121, '0.30', '0.20', '0.10', '0.20', '0.20', 'F'),
(7, '2020.  TERCER cuatrimestre', '2020-09-01', '2020-12-31', '2021-05-27', 120, 2021, '0.00', '0.00', 0, '0.40', '0.20', '0.10', '0.20', '0.10', 'A'),
(12, 'Prueba', '2020-09-01', '2020-12-31', '2021-06-05', 120, 2021, '0.00', '0.00', 0, '0.30', '0.20', '0.10', '0.20', '0.20', 'A'),
(13, 'Prueba2', '2020-09-01', '2020-12-31', '2021-06-05', 120, 2021, NULL, NULL, NULL, '0.30', '0.20', '0.10', '0.20', '0.20', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `importes_servicios`
--

CREATE TABLE `importes_servicios` (
  `id` int(11) NOT NULL,
  `id_periodo` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `numero_funcionarios` int(4) DEFAULT NULL,
  `numero_laborales` int(4) DEFAULT NULL,
  `importe_asignado_func` float DEFAULT NULL,
  `importe_asignado_lab` float DEFAULT NULL,
  `importe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parametros_generales`
--

CREATE TABLE `parametros_generales` (
  `cargo` varchar(30) NOT NULL,
  `firma` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pdf`
--

CREATE TABLE `pdf` (
  `id` int(11) NOT NULL,
  `organismo` varchar(100) NOT NULL DEFAULT 'Delegación Territorial de Salud y Familias en Almería',
  `consejeria` varchar(100) NOT NULL DEFAULT 'CONSEJERÍA DE SALUD Y FAMILIAS',
  `id_periodo` int(11) NOT NULL,
  `primero` text NOT NULL,
  `segundo` text NOT NULL,
  `tercero` text NOT NULL,
  `firma` varchar(100) NOT NULL DEFAULT 'Juan de la Cruz Belmonte Mena',
  `cargo` varchar(100) NOT NULL DEFAULT 'Delegado Territorial'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pdf`
--

INSERT INTO `pdf` (`id`, `organismo`, `consejeria`, `id_periodo`, `primero`, `segundo`, `tercero`, `firma`, `cargo`) VALUES
(2, 'Delegación Territorial de Salud y Familias en Almería', 'CONSEJERÍA DE SALUD Y FAMILIAS', 12, '                             El Decreto 100/2019 de 12 de Febrero, establece la estructura orgánica de la Consejería de Salud y Familias que desarrollará sus competencias a través de los órganos directivos centrales que se recogen en su artículo 2. El Artº 4.1 del citado Decreto y atribute a la persona titular de la Viceconsejería el desempeño de la jefatura superior del personal de la Consejería.', '                             La resolución de 11 de Noviembre de 2019, de la Viceconsejería, delega competencias en la persona titular de la Secretaría General Técnica y en las personas titulares de la Delegaciones Territoriales.', '                             Mediante la Orden de 11 de Noviembre de  2019 de la Consejería de Salud y Familias se delegan competencias en los órganos directivos y entidades de la misma, señalando en su Artº  5.1 que \" las personas titulares de las Delegaciones Territoriales, serán competentes en materia de personal en sus respectivos ámbitos.', 'Juan de la Cruz Belmonte Mena', 'Delegado Territorial');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `CodPersona` varchar(9) NOT NULL DEFAULT '',
  `Ape1` varchar(30) DEFAULT NULL,
  `Nombre` varchar(30) DEFAULT NULL,
  `NumIdent` varchar(9) DEFAULT NULL,
  `Password` varchar(40) NOT NULL DEFAULT 'f7541a944711dc6754b749acc98446b3',
  `FechaAlta` date DEFAULT '0000-00-00',
  `FechaBaja` date DEFAULT '0000-00-00',
  `CodJornada` char(1) DEFAULT NULL,
  `Activo` enum('s','n') DEFAULT 's',
  `CodServicio` varchar(5) DEFAULT NULL,
  `CodCentro` char(2) DEFAULT NULL,
  `Ape2` varchar(30) DEFAULT NULL,
  `FechaUltCierre` date DEFAULT '0000-00-00',
  `MinutosDeuda` int(7) DEFAULT NULL,
  `MinutosExclusiva` int(7) DEFAULT NULL,
  `Perfil` char(1) DEFAULT NULL,
  `CodMotivoES` char(2) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Hora` time DEFAULT NULL,
  `Operacion` char(1) DEFAULT NULL,
  `Turno` char(1) DEFAULT NULL,
  `CodMarcaje` int(11) DEFAULT NULL,
  `SaldoCompensar` int(6) DEFAULT 0,
  `SaldoVacaciones` smallint(2) DEFAULT 0,
  `SaldoAPropios` smallint(2) DEFAULT 0,
  `CodServicio2` varchar(5) DEFAULT NULL,
  `Enroll` int(11) NOT NULL DEFAULT 0,
  `Iniciales` varchar(10) NOT NULL DEFAULT '',
  `Huelllas` smallint(6) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`CodPersona`, `Ape1`, `Nombre`, `NumIdent`, `Password`, `FechaAlta`, `FechaBaja`, `CodJornada`, `Activo`, `CodServicio`, `CodCentro`, `Ape2`, `FechaUltCierre`, `MinutosDeuda`, `MinutosExclusiva`, `Perfil`, `CodMotivoES`, `Fecha`, `Hora`, `Operacion`, `Turno`, `CodMarcaje`, `SaldoCompensar`, `SaldoVacaciones`, `SaldoAPropios`, `CodServicio2`, `Enroll`, `Iniciales`, `Huelllas`) VALUES
('27243976', 'ANDUJAR', 'JOSE', 'ñ1335688_', 'f7541a944711dc6754b749acc98446b3', '2006-01-01', '1899-12-30', '1', 's', 'Spea', '01', 'CESAR', '2021-04-23', 5880, 0, '1', '05', '2021-04-23', '08:28:11', 'e', 'm', 20199, 0, 13, 10, NULL, 3976, 'ACJ', 4),
('27250381', 'CARRILLO', 'CARLOS', 'ñ1338488_', 'd68a18275455ae3eaa2c291eebb46e6d', '2006-01-01', '1899-12-30', '2', 's', 'Spea', '01', 'RAMIREZ', '2021-04-23', 5460, 0, '1', '05', '2021-04-23', '07:26:26', 'e', 'm', 20104, 0, 26, 14, NULL, 381, 'CRC', 4),
('27261857', 'GARCIA', 'ANA MARIA', 'ñ1370688_', 'f7541a944711dc6754b749acc98446b3', '2006-01-01', '1899-12-30', '2', 's', 'Spea', '01', 'COLOMERA', '2021-04-23', 5460, 0, '1', '05', '2021-04-23', '08:54:50', 'e', 'm', 20208, 0, 26, 14, NULL, 1857, 'GCAM', 4),
('27491273', 'BECERRA', 'LEANDRO', 'ñ1336388_', '09ad7ab50b900d0aacc5fde47855af74', '2006-01-01', '1899-12-30', '2', 's', 'Spea', '01', 'CESAR', '2021-04-23', 5880, 0, '1', '05', '2021-04-23', '07:26:38', 'e', 'm', 20107, 0, 26, 15, NULL, 1273, 'BCL', 4),
('27514653', 'SERRANO', 'MARIA PILAR', 'ñ1386788_', 'f7541a944711dc6754b749acc98446b3', '2006-01-01', '1899-12-30', '2', 's', 'Spea', '01', 'GRANADOS', '2021-04-23', 5040, 0, '1', '05', '2021-04-23', '08:05:08', 'e', 'm', 20186, 0, 26, 14, NULL, 4653, 'SGMP', 4),
('34862213', 'CANTON', 'YOLANDA', 'c/huella', 'f7541a944711dc6754b749acc98446b3', '2009-10-16', '1899-12-30', '3', 's', 'Spea', '01', 'MARQUEZ', '2021-04-23', NULL, NULL, '1', '05', '2021-04-23', '08:55:11', 'e', 'm', 20210, 0, 23, 8, NULL, 2213, 'CMY', 4),
('50706627', 'REINA', 'MERCEDES', 'c/huella', 'f7541a944711dc6754b749acc98446b3', '2010-02-01', '1899-12-30', '2', 's', 'Spea', '01', 'GARCIA', '2021-04-22', NULL, NULL, '1', '05', '2021-04-23', '07:27:19', 'e', NULL, 20112, 0, 26, 15, NULL, 6627, 'RGM', 4),
('75238566', 'ALVARO', 'MARIA JOSE', '75238566T', '6b8decc79ce0bf36a7baba7d3fa57e10', '2011-02-11', NULL, '3', 's', 'Spea', '01', 'ARIGO', '2021-04-22', NULL, NULL, '1', '05', '2021-04-23', '07:30:05', 'e', 'm', 20122, 0, 22, 8, NULL, 8566, 'AAMJ', 0),
('34847414', 'BAENA', 'ANA MARIA', '34847414E', 'f7541a944711dc6754b749acc98446b3', '2018-07-16', '1899-12-30', '3', 's', 'Spea', '01', 'DIAZ', '2021-04-23', NULL, NULL, '1', '05', '2021-04-23', '10:16:16', 'e', NULL, 20218, 0, 22, 8, NULL, 7414, 'BDAM20', 0),
('45591723', 'NIEVAS', 'ANTONIO JAVIER', '45591723L', 'f7541a944711dc6754b749acc98446b3', '2020-04-03', '1899-12-30', '2', 's', 'Spea', '01', 'SORIANO', '2021-04-23', NULL, NULL, '2', '05', '2021-04-23', '08:37:19', 'e', NULL, 20203, 180, 22, 8, NULL, 1723, 'NSAJ', 0),
('23235180', 'MARTINEZ', 'JOSE JOAQUIN', '23235180M', 'de80c61f10ecc605f9c53b10e2ec4d07', '2019-10-08', '1899-12-30', '2', 's', 'Spea', '01', 'LOPEZ', '2021-04-22', NULL, NULL, '1', '05', '2021-04-23', '08:01:42', 'e', NULL, 20179, 0, 26, 13, NULL, 5180, 'MLJJ', 0),
('27531432', 'SEGURA', 'ANA MARIA', 'ñ1377688_', 'b59c67bf196a4758191e42f76670ceba', '2013-04-05', '1899-12-30', '3', 's', 'Int', '01', 'LOPEZ', '2021-05-17', 5460, 0, '1', '05', '2021-05-17', '07:38:00', 'e', 'm', 24657, 420, 26, 14, NULL, 1432, 'SLAM', 0),
('27513124', 'PINO', 'MILAGROS DEL', 'ñ1490388_', 'e796e897b03dfa33388c5e26154376de', '2008-07-03', '1899-12-30', '2', 's', 'Int', '01', 'GONZALEZ', '2021-05-17', NULL, NULL, '1', '05', '2021-05-17', '07:40:31', 'e', 'm', 24663, 0, 26, 13, NULL, 13124, 'PGM', 4),
('22957416', 'MARTINEZ', 'PEDRO MIGUEL', '22957416N', 'f7541a944711dc6754b749acc98446b3', '2013-04-08', '1899-12-30', '2', 's', 'Int', '01', 'GARCIA', '2021-05-17', NULL, NULL, '1', '05', '2021-05-17', '07:26:42', 'e', NULL, 24624, 1699, 26, 13, NULL, 7416, 'MGPM', 0),
('25091488', 'Ruíz', 'Rosario', '25091488', 'f7541a944711dc6754b749acc98446b3', '2016-01-01', '0000-00-00', '2', 's', 'Int', '01', 'Díaz', '0000-00-00', 0, 0, '2', NULL, NULL, NULL, NULL, NULL, NULL, 0, 26, 6, NULL, 0, '4884', 0),
('27496575', 'MUÑOZ', 'MARIA JOSEFA', '27496575Y', 'f7541a944711dc6754b749acc98446b3', '2015-08-12', '1899-12-30', '2', 's', 'Int', '01', 'MUÑOZ', '2021-03-31', NULL, NULL, '1', '05', '2021-03-31', '14:09:47', 's', NULL, 16049, 210, 26, 14, NULL, 6575, 'MMMJ', 0),
('27501240', 'RODRIGUEZ', 'DOLORES', '27501240W', 'f7541a944711dc6754b749acc98446b3', '2017-09-04', '1899-12-30', '2', 's', 'Int', '01', 'RAMON', '2021-05-17', NULL, NULL, '1', '05', '2021-05-17', '07:43:28', 'e', NULL, 24670, 0, 26, 14, NULL, 1240, 'RRD23', 0),
('27516169', 'ROMAN', 'CARMEN MARIA', '27516169G', 'e3740396d18ea73749023045e19d7bf4', '2017-09-04', '1899-12-30', '2', 's', 'Int', '01', 'TORRES', '2021-05-17', NULL, NULL, '1', '05', '2021-05-17', '07:30:15', 'e', NULL, 24640, 0, 26, 14, NULL, 6169, 'RTCM', 0),
('27519257', 'GUTIERREZ', 'ISABEL MARIA', '27519257X', 'f7541a944711dc6754b749acc98446b3', '2017-09-04', '1899-12-30', '2', 's', 'Int', '01', 'ROMERO', '2021-05-14', NULL, NULL, '1', '05', '2021-05-17', '07:28:43', 'e', NULL, 24632, 0, 26, 14, NULL, 9258, 'GRIM', 0),
('532772967', 'LOPEZ', 'OLGA', '532772967', 'f7541a944711dc6754b749acc98446b3', '2017-09-04', '0000-00-00', '2', 's', 'Int', '01', 'NAVARRO', '0000-00-00', NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, 2967, 'LNO', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productividad`
--

CREATE TABLE `productividad` (
  `id` int(11) NOT NULL,
  `id_periodo` int(11) NOT NULL,
  `nif_trabajador` varchar(15) NOT NULL,
  `id_programa` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `id_servicio_evalua` int(11) NOT NULL,
  `fecha_alta` date NOT NULL,
  `fecha_baja` date DEFAULT NULL,
  `puntuacion_calidad` int(11) NOT NULL DEFAULT 2,
  `puntuacion_iniciativa` int(11) NOT NULL DEFAULT 2,
  `puntuacion_asistencia` int(11) NOT NULL DEFAULT 2,
  `puntuacion_disponibilidad` int(11) NOT NULL DEFAULT 2,
  `puntuacion_formacion` int(11) NOT NULL DEFAULT 2,
  `dias_trabajados` int(11) NOT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `porcentaje` decimal(2,1) NOT NULL DEFAULT 1.0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productividad`
--

INSERT INTO `productividad` (`id`, `id_periodo`, `nif_trabajador`, `id_programa`, `id_servicio`, `id_servicio_evalua`, `fecha_alta`, `fecha_baja`, `puntuacion_calidad`, `puntuacion_iniciativa`, `puntuacion_asistencia`, `puntuacion_disponibilidad`, `puntuacion_formacion`, `dias_trabajados`, `importe`, `porcentaje`) VALUES
(5603, 7, '99899799A', 64, 20, 20, '2018-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5604, 7, '99755198M', 64, 23, 23, '2020-01-01', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5605, 7, '99123987J', 64, 21, 21, '2020-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5606, 7, '99092031E', 64, 16, 16, '2018-02-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5607, 7, '91928182H', 64, 1, 1, '2018-05-05', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5608, 7, '91455121L', 65, 16, 16, '2017-03-03', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5609, 7, '90190390F', 2, 2, 2, '2017-08-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5610, 7, '90090032G', 64, 20, 20, '2020-05-05', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5611, 7, '81899312B', 64, 23, 23, '2020-01-02', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5612, 7, '78173233Q', 64, 23, 23, '2020-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5613, 7, '75288133T', 64, 18, 18, '2020-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5614, 7, '49089111J', 64, 16, 16, '2018-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5615, 7, '45565555H', 64, 21, 21, '2019-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5616, 7, '44433333K', 64, 20, 20, '2019-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5617, 7, '12354678A', 64, 19, 20, '2020-06-01', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5633, 12, '99899799A', 64, 20, 20, '2018-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5634, 12, '99755198M', 64, 23, 23, '2020-01-01', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5635, 12, '99123987J', 64, 21, 21, '2020-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5636, 12, '99092031E', 64, 16, 16, '2018-02-04', '0000-00-00', 2, 1, 2, 2, 2, 120, '1.00', '1.0'),
(5637, 12, '91928182H', 64, 1, 1, '2018-05-05', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5638, 12, '91455121L', 65, 16, 16, '2017-03-03', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5639, 12, '90190390F', 2, 2, 2, '2017-08-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5640, 12, '90090032G', 64, 20, 20, '2020-05-05', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5641, 12, '81899312B', 64, 23, 23, '2020-01-02', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5642, 12, '78173233Q', 64, 23, 23, '2020-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5643, 12, '75288133T', 64, 18, 18, '2020-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5644, 12, '49089111J', 64, 16, 16, '2018-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5645, 12, '45565555H', 64, 21, 21, '2019-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5646, 12, '44433333K', 64, 20, 20, '2019-05-04', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0'),
(5647, 12, '12354678A', 64, 19, 20, '2020-06-01', '0000-00-00', 2, 2, 2, 2, 2, 120, '0.00', '1.0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programa`
--

CREATE TABLE `programa` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `categoria` varchar(15) NOT NULL DEFAULT 'Funcionarios'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `programa`
--

INSERT INTO `programa` (`id`, `nombre`, `categoria`) VALUES
(1, '44H02 FUNCIONARIOS', 'Funcionarios'),
(2, '44H02 LABORALES', 'Laborales'),
(3, '41D02 FUNCIONARIOS', 'Funcionarios'),
(63, '41D02 LABORALES', 'Laborales'),
(64, '12O FUNCIONARIOS', 'Funcionarios'),
(65, '12O LABORALES', 'Laborales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programas_periodos`
--

CREATE TABLE `programas_periodos` (
  `id` int(11) NOT NULL,
  `id_periodo` int(11) NOT NULL,
  `id_programa` int(11) NOT NULL,
  `presupuesto` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `programas_periodos`
--

INSERT INTO `programas_periodos` (`id`, `id_periodo`, `id_programa`, `presupuesto`) VALUES
(1, 1, 1, '4250.00'),
(2, 1, 2, '140.00'),
(3, 1, 3, '6240.20'),
(4, 1, 63, '880.00'),
(5, 1, 64, '2020.80'),
(6, 1, 65, '1420.20'),
(7, 2, 1, '4994.25'),
(8, 2, 2, '130.11'),
(9, 2, 3, '6659.00'),
(10, 2, 63, '910.77'),
(11, 2, 64, '2039.95'),
(40, 2, 65, '4444.00'),
(46, 7, 1, '3504.04'),
(49, 2, 65, '888.00'),
(50, 7, 2, '64.16'),
(51, 7, 65, '4500.00'),
(57, 7, 63, '2000.00'),
(66, 7, 3, '2000.00'),
(72, 7, 64, '3800.00'),
(73, 12, 65, '222.00'),
(74, 12, 64, '250.00'),
(75, 12, 3, '300.00'),
(76, 12, 63, '250.00'),
(77, 12, 1, '500.00'),
(84, 13, 1, '500.00'),
(85, 13, 3, '300.00'),
(86, 13, 63, '250.00'),
(87, 13, 64, '250.00'),
(88, 13, 65, '222.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puestos`
--

CREATE TABLE `puestos` (
  `id` int(11) NOT NULL,
  `nombre_puesto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `puestos`
--

INSERT INTO `puestos` (`id`, `nombre_puesto`) VALUES
(28, '_ SIN ASIGNAR _'),
(29, 'A.T.- PREVENCION RIESGOS LABORALES'),
(30, 'ASESOR TÉCNICO'),
(31, 'ADMINISTRATIVO'),
(32, 'ANALISTA DE LABORATORIO'),
(33, 'ASESOR MICROINFORMATICA'),
(34, 'AUXILIAR ADMINISTRATIVO'),
(35, 'AUXILIAR DE GESTION'),
(36, 'AUXILIAR OPERADOR DE INFORMATICA'),
(37, 'CONDUCTOR'),
(38, 'CONSERJE'),
(39, 'COORDINADOR/A'),
(40, 'CUERPO TECNICO'),
(41, 'DELEGADO PROVINCIAL/TERRITORIAL'),
(42, 'DIPLOMADO TRABAJO SOCIAL'),
(43, 'DIRECTOR'),
(44, 'INSPECTOR'),
(45, 'INTERVENTOR PROVINCIAL'),
(46, 'JEFE DEPARTAMENTO'),
(47, 'JEFE DE SERVICIO'),
(48, 'LIMPIADOR/A'),
(49, 'MANTENIMIENTO'),
(50, 'MEDICO'),
(51, 'NEGOCIADO'),
(52, 'OPERADOR CONSOLA'),
(53, 'ORDENANZA'),
(54, 'PROCESO DATOS'),
(55, 'PROGRAMADOR'),
(56, 'PSICOLOGO'),
(57, 'SECCION'),
(58, 'SECRETARIO/A DELEGADO PROVINCIAL'),
(59, 'SECRETARIO GENERAL/PROVINCIAL'),
(60, 'SIN DETERMINAR'),
(61, 'SUBDIRECTOR'),
(62, 'SUBDIRECTOR (3180410)'),
(63, 'TECNICO ADMINISTRATIVO'),
(64, 'TECNICO SISTEMAS'),
(65, 'TECNICO SUPERIOR'),
(66, 'TECNICO/A (6651910)'),
(67, 'TELEFONISTA'),
(68, 'TITULADO GRADO MEDIO'),
(69, 'TITULADO SUPERIOR'),
(70, 'TRABAJADOR SOCIAL'),
(71, 'TRABAJADOR SOCIAL CAGSSDEP (NO RPT)'),
(72, 'UNIDAD'),
(73, 'VIGILANTE'),
(75, 'INTERVENCION ADJUNTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id_programa_func` int(11) NOT NULL,
  `id_programa_lab` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`id`, `nombre`, `id_programa_func`, `id_programa_lab`) VALUES
(1, 'Secretaría General', 64, 65),
(2, 'Sv Consumo', 1, 2),
(3, 'Laboratorio Provincial', 64, 65),
(4, 'Sv Planificación y Eval Asistencial', 3, 63),
(16, 'Inspección Provincial', 64, 65),
(18, 'Sv Planif. y Eval. Recursos', 64, 65),
(19, 'Intervención Provincial del SAS', 64, 65),
(20, 'Servicio de SALUD', 64, 65),
(21, 'U.M.V.I.', 64, 65),
(23, 'prueba', 64, 65);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE `trabajador` (
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
  `imagen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`nif`, `nombre`, `apellidos`, `sexo`, `email`, `fecha_nacimiento`, `activo`, `productividad`, `categoria`, `puesto`, `fecha_alta`, `fecha_baja`, `centro`, `telefono`, `imagen`) VALUES
('11222356A', 'prueba', 'prueba', 'varon', 'prueba@gmail.com', '2021-04-06', 'No', 'Si', 'Funcionario', 'ANALISTA DE LABORATORIO', '2021-04-06', '2021-05-31', '2', 321321, 'view/imagenes/profile-icon.png'),
('11445133K', 'Ana', 'Pardo Rodriguez', 'mujer', 'anitaaaapardo77@juntadeandalucia.es', '2020-01-22', 'Si', 'Si', 'Funcionario', 'JEFE DEPARTAMENTO', '2009-04-28', NULL, '1', 713649, 'view/imagenes/profile-icon.png'),
('12121211A', 'Prueba2', 'Prueba2 Prueba2', 'varon', 'prueba2@gmail.com', '1980-05-04', 'No', 'No', 'Funcionario', 'ADMINISTRATIVO', '2020-04-01', NULL, '2', 123456, 'view/imagenes/profile-icon.png'),
('12354678A', 'Manuel', 'Rodriguez Rodriguez', 'varon', 'lokilo@gmail.com', '1992-06-03', 'Si', 'Si', 'Funcionario', 'ADMINISTRATIVO', '2020-01-14', NULL, 'U.M.V.I', 123456, 'view/imagenes/profile-icon.png'),
('12355211A', 'pruebiillaa2', 'pruebiillaa pruebiillaa', 'varon', 'pruebiillaa@gmail.com', '1992-05-04', 'Si', 'Si', 'Funcionario', 'ADMINISTRATIVO', '2018-05-05', NULL, '2', 252365, ''),
('13942911Q', 'Maria Carmen', 'Gil Cano', 'mujer', 'carmeeengilcano23@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'NEGOCIADO', '2018-09-05', NULL, '', 713640, 'view/imagenes/profile-icon.png'),
('19193931A', 'Carmen', 'Mendez Ruiz', 'mujer', 'carmenimendee@juntadeandalucia.es', NULL, 'Si', 'Si', 'Laboral', 'AUXILIAR ADMINISTRATIVO', '2014-01-02', NULL, '1', 713764, 'view/imagenes/profile-icon.png'),
('22790212W', 'Maria', 'Ramon Ruiz', 'mujer', 'mari22ramonr@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'NEGOCIADO', '2017-09-04', NULL, '1', 713732, 'view/imagenes/profile-icon.png'),
('24247124H', 'Alba', 'Gonzalez Pino', 'mujer', 'milagritos22@juntadeandalucia.es', NULL, 'No', 'Si', 'Funcionario', 'NEGOCIADO', '2008-07-03', '2020-12-17', '1', 713639, 'view/imagenes/profile-icon.png'),
('25251525G', 'Maria', 'Torres Castillo', 'mujer', 'maritorresss1919@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'NEGOCIADO', '2017-09-04', NULL, '1', 713639, 'view/imagenes/profile-icon.png'),
('27828923B', 'Estefania', 'Rodriguez Marquez', 'mujer', 'estefaniiiaaaa@juntadeandalucia.es', '0000-00-00', 'Si', 'Si', 'Funcionario', 'INSPECTOR', '2009-12-22', NULL, '1', 713760, 'view/imagenes/profile-icon.png'),
('32145621A', 'pruebe', 'pruebo pruebo', 'varon', 'pruebo@gmail.com', '1992-09-04', 'Si', 'Si', 'Interino', 'ASESOR TÉCNICO', '2020-02-04', NULL, '2', 256412, ''),
('33344412G', 'Maria Carmen', 'Puertas Lopez', 'mujer', 'LaMari77@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'JEFE DEPARTAMENTO', '2009-04-28', NULL, '1', 713769, 'view/imagenes/usuarios/24179904Gimages.jpg'),
('33371713Y', 'Rosario', 'Sanchez Sanchez', 'mujer', 'rossaaaario111@juntadeandalucia.es', NULL, 'Si', 'No', 'Funcionario', 'INTERVENTOR PROVINCIAL', '2016-01-01', NULL, '1', 713635, 'view/imagenes/usuarios/33371713Yimages.png'),
('33399944j', 'Miguel', 'Cano Cano', 'varon', 'miguelitooocano2@outlook.es', '2003-10-08', 'No', 'Si', 'Funcionario', '_ SIN ASIGNAR _', '2018-09-03', '2021-06-07', '2', 647660063, ''),
('36481132D', 'Sara', 'Rodriguez Canton', 'mujer', 'sariroca@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'ADMINISTRATIVO', '2009-10-16', NULL, '1', 713657, ''),
('44433333K', 'Antonio', 'Cano Ruiz', 'varon', 'antoooocano@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'NEGOCIADO', '2018-09-05', NULL, '', 717298, 'view/imagenes/profile-icon.png'),
('45565555H', 'Rocio', 'Aguilar Sanchez', 'mujer', 'aguileñaaa33@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'INSPECTOR', '2018-09-05', NULL, '', 713666, 'view/imagenes/profile-icon.png'),
('45598881M', 'Gemma', 'Gimenez Santiago', 'mujer', 'gemmasantiiii091@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'JEFE DEPARTAMENTO', '2009-10-07', NULL, '1', 713762, 'view/imagenes/profile-icon.png'),
('49089111J', 'Silvia', 'Martin Carrasco', 'mujer', 'silviiiidomartin@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'AUXILIAR ADMINISTRATIVO', '2012-10-31', NULL, '1', 717263, 'view/imagenes/profile-icon.png'),
('50700707E', 'Mercedes', 'Garcia Pastor', 'mujer', 'mercedescocheca@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', '_ SIN ASIGNAR _', '2010-02-01', NULL, '1', 713745, ''),
('51512154Y', 'Maria Jose', 'Castillo Lopez', 'mujer', 'JoseMariiiiiLop@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', 'SECCION', '2019-01-01', NULL, '', 713731, 'view/imagenes/profile-icon.png'),
('55515566B', 'Maria Carmen', 'Rodriguez Lopez', 'Mujer', 'dlmaca@gmail.com', '1993-05-05', 'No', 'Si', 'Funcionario', 'ASESOR TÉCNICO', '2020-12-15', '2021-06-07', '', 223345, 'view/imagenes/profile-icon.png'),
('55533311H', 'Sara', 'Sanchez Garcia', 'mujer', 'Sariiillaaa22@juntadeandalucia.es', '0000-00-00', 'Si', 'Si', 'Funcionario', 'INSPECTOR', '2003-12-06', NULL, '1', 713754, 'view/imagenes/profile-icon.png'),
('66666666F', 'Amalia', 'Perez Iglesias', 'mujer', 'amaliiiiaaaa32@juntadeandalucia.es', NULL, 'Si', 'Si', 'Laboral', 'AUXILIAR ADMINISTRATIVO', '2005-11-16', NULL, '1', 713764, 'view/imagenes/profile-icon.png'),
('73732133V', 'Alejandro', 'Castillo Castillo', 'varon', 'Aleeejandrooop11@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', '_ SIN ASIGNAR _', '2006-01-01', NULL, '1', 713673, ''),
('75288133T', 'Maria Jose', 'Bravo Bravo', 'mujer', 'bravomariabravo@juntadeandalucia.es', NULL, 'Si', 'Si', 'Funcionario', '_ SIN ASIGNAR _', '2011-02-11', NULL, '1', 713744, ''),
('77766681X', 'David', 'Carrasco Lopez', 'varon', 'davilillooo78@juntadeandalucia.es', '0000-00-00', 'Si', 'Si', 'Funcionario', 'AUXILIAR ADMINISTRATIVO', '2009-04-28', NULL, '1', 713686, 'view/imagenes/profile-icon.png'),
('78173233Q', 'Jose', 'Gonzalo Lopez', 'varon', 'joselitoogolop33@gmail.com', '1991-09-04', 'Si', 'Si', 'Funcionario', 'A.T.- PREVENCION RIESGOS LABOR', '2018-05-04', NULL, '', 123456, 'view/imagenes/profile-icon.png'),
('81899312B', 'Inmaculada', 'Fernandez Lopez', 'varon', 'inmaculadaafe22@gmail.com', '1992-04-05', 'Si', 'Si', 'Funcionario', 'ASESOR TÉCNICO', '2018-05-04', NULL, '', 256456, 'view/imagenes/profile-icon.png'),
('90090032G', 'Carlos', 'Sanchez Sanchez', 'varon', 'carlitoooosan21@gmail.com', '1993-02-02', 'Si', 'Si', 'Funcionario', 'AUXILIAR ADMINISTRATIVO', '2018-05-04', NULL, '', 231564, 'view/imagenes/profile-icon.png'),
('90190390F', 'Maria Inmaculada', 'Ruiz Gil', 'mujer', 'inmacumariii22@gmail.com', '1989-04-04', 'Si', 'Si', 'Laboral', 'ADMINISTRATIVO', '2017-05-04', NULL, '', 202056, 'view/imagenes/profile-icon.png'),
('91455121L', 'Javier', 'Mendez Mendez', 'varon', 'javiiiimendezx2@gmail.com', '1988-03-03', 'Si', 'Si', 'Laboral', 'ASESOR MICROINFORMATICA', '2016-01-04', NULL, '', 225645, 'view/imagenes/profile-icon.png'),
('91928182H', 'Carmen', 'Hernandez Marquez', 'mujer', 'aquilacarmenzz@gmail.com', '1981-05-10', 'Si', 'Si', 'Funcionario', 'ADMINISTRATIVO', '2018-05-04', NULL, '', 777888, 'view/imagenes/profile-icon.png'),
('99092031E', 'Yolanda', 'Diaz Ruiz', 'varon', 'yoliiiiidiazz1@gmail.com', '1985-06-04', 'Si', 'Si', 'Funcionario', 'DELEGADO PROVINCIAL/TERRITORIA', '2018-05-04', NULL, '', 456444, 'view/imagenes/profile-icon.png'),
('99123987J', 'Maria Jose', 'Ruiz Cano', 'mujer', 'mariruuuum11@gmail.com', '1990-05-11', 'Si', 'Si', 'Funcionario', 'COORDINADOR/A', '2019-05-04', NULL, '', 505066, 'view/imagenes/profile-icon.png'),
('99755198M', 'Mario', 'Martinez Martinez', 'varon', 'marioooo22@gmail.com', '1992-01-04', 'Si', 'Si', 'Funcionario', 'ADMINISTRATIVO', '2018-05-10', NULL, '', 898944, 'view/imagenes/profile-icon.png'),
('99899799A', 'Ana Maria', 'Sanchez Sanchez', 'mujer', 'anamariiiisanch@gmail.com', '1995-05-05', 'Si', 'Si', 'Funcionario', 'ASESOR MICROINFORMATICA', '2017-05-04', NULL, '', 264784, 'view/imagenes/profile-icon.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores_servicios`
--

CREATE TABLE `trabajadores_servicios` (
  `id` int(11) NOT NULL,
  `nif` varchar(9) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `fecha_alta` date NOT NULL,
  `fecha_baja` date DEFAULT NULL,
  `activo` varchar(2) NOT NULL DEFAULT 'Si',
  `id_servicio_evalua` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `trabajadores_servicios`
--

INSERT INTO `trabajadores_servicios` (`id`, `nif`, `id_servicio`, `fecha_alta`, `fecha_baja`, `activo`, `id_servicio_evalua`) VALUES
(1, '22932500M', 2, '2019-01-01', '0000-00-00', 'No', 2),
(2, '24179904G', 2, '2019-01-01', NULL, 'No', 2),
(3, '24186259B', 2, '2019-10-01', NULL, 'No', 2),
(4, '27246566F', 2, '2005-11-16', NULL, 'No', 2),
(9, '27510671A', 2, '2019-01-01', NULL, 'No', 2),
(10, '27516222B', 2, '2019-01-01', '0000-00-00', 'No', 2),
(11, '27525306X', 2, '2019-01-01', NULL, 'No', 2),
(13, '29762665K', 2, '2019-01-01', NULL, 'No', 2),
(15, '75233105J', 2, '2019-01-01', NULL, 'No', 2),
(16, '752674900', 3, '2019-01-01', NULL, 'Si', 3),
(18, '27247813N', 3, '2020-07-17', '2020-07-20', 'No', 3),
(19, '27247813N', 4, '2020-07-21', '2020-07-22', 'No', 4),
(21, '27247813N', 2, '2020-07-25', NULL, 'No', 2),
(23, '25083789x', 18, '2020-07-22', NULL, 'Si', 18),
(25, '45596355M', 2, '2019-03-27', NULL, 'No', 2),
(27, '27266725H', 2, '2018-03-27', NULL, 'No', 2),
(28, '27269980F', 2, '2019-01-02', NULL, 'No', 2),
(30, '75267490J', 2, '2012-10-31', NULL, 'No', 2),
(31, '27523173Q', 2, '2018-09-02', NULL, 'No', 2),
(33, '25083789n', 16, '2020-09-06', NULL, 'Si', 16),
(34, '27496575Y', 2, '2019-01-01', NULL, 'No', 2),
(40, '20328024A', 21, '2021-04-04', NULL, 'Si', 21),
(41, '27522393H', 2, '2018-09-02', NULL, 'No', 2),
(42, '45582706H', 2, '2019-08-01', NULL, 'No', 2),
(43, '27501144K', 2, '2018-09-05', '2021-03-31', 'No', 2),
(44, '27501144K', 21, '2021-04-01', NULL, 'Si', 21),
(45, '11111111A', 20, '2021-04-15', NULL, 'Si', 20),
(46, '33333333Z', 18, '2021-04-28', NULL, 'Si', 0),
(47, '32332332H', 21, '2021-04-04', NULL, 'Si', 0),
(48, '33334533Z', 21, '2021-04-04', NULL, 'Si', 0),
(51, '11222356A', 20, '2021-04-04', '2021-05-03', 'Si', 21),
(52, '32365365j', 20, '2018-09-03', '2021-12-03', 'Si', 20),
(53, '75238566T', 20, '2011-02-11', NULL, 'No', 20),
(54, '27243976Q', 4, '2006-01-01', NULL, 'No', 4),
(55, '34847414E', 4, '2018-07-16', NULL, 'No', 4),
(56, '27491273V', 4, '2006-01-01', NULL, 'No', 4),
(57, '34862213D', 4, '2009-10-06', NULL, 'No', 4),
(58, '27250381G', 4, '2006-01-01', NULL, 'No', 4),
(59, '27261857A', 4, '2006-01-01', NULL, 'No', 21),
(60, '23235180M', 4, '2019-10-08', NULL, 'No', 4),
(61, '45591723L', 4, '2020-04-03', NULL, 'No', 4),
(62, '50706627E', 4, '2010-02-01', NULL, 'No', 4),
(63, '27514653Y', 4, '2006-01-01', NULL, 'No', 4),
(64, '11222356A', 19, '2021-05-04', NULL, 'Si', 16),
(67, '32365365j', 16, '2021-05-06', NULL, 'Si', 16),
(70, '532772967', 19, '2019-09-04', NULL, 'Si', 19),
(80, '532772967', 21, '2021-05-10', NULL, 'Si', 21),
(83, '532772967', 21, '2021-05-10', NULL, 'Si', 21),
(100, '123456787', 21, '2021-05-03', NULL, 'Si', 21),
(104, '123456798', 21, '2021-05-10', NULL, 'Si', 21),
(105, '53272967R', 19, '2017-09-04', NULL, 'Si', 19),
(106, '25091488Y', 19, '2016-01-01', NULL, 'Si', 19),
(107, '27519257X', 19, '2020-10-04', '0002-12-02', 'Si', 19),
(108, '27501240W', 19, '2017-09-04', NULL, 'No', 19),
(109, '22957416N', 19, '2013-04-08', '2020-11-17', 'No', 19),
(110, '22957416N', 21, '2020-11-18', NULL, 'No', 21),
(111, '27513124H', 19, '2020-03-08', '2020-12-17', 'No', 19),
(125, '11222356A', 1, '2020-11-09', '2021-05-31', 'No', 1),
(127, '27516169G', 19, '2018-05-25', NULL, 'No', 19),
(128, '12121211A', 21, '2020-05-01', '2020-07-31', 'Si', 21),
(129, '12121211A', 20, '2020-08-01', '2020-12-01', 'No', 20),
(131, '75238566T', 21, '2021-06-01', '2021-06-02', 'Si', 21),
(132, '22957416N', 21, '2021-06-01', '2021-06-02', 'Si', 21),
(133, '75238566T', 21, '2021-06-01', '2021-06-02', 'Si', 21),
(134, '12354678A', 21, '2020-05-12', NULL, 'No', 21),
(135, '12354678A', 19, '2020-06-01', NULL, 'Si', 20),
(136, '12121211A', 21, '2021-06-07', NULL, 'Si', 21),
(137, '12345688A', 21, '2021-04-05', NULL, 'Si', 21),
(138, '123456788', 21, '2021-04-05', NULL, 'Si', 21),
(139, '12312356B', 21, '2021-04-05', NULL, 'Si', 21),
(140, '11212154A', 21, '2020-12-05', NULL, 'Si', 21),
(141, '78173233Q', 23, '2020-05-04', NULL, 'Si', 23),
(142, '81899312B', 23, '2020-01-02', NULL, 'Si', 23),
(143, '90090032G', 20, '2020-05-05', NULL, 'Si', 20),
(144, '99092031E', 16, '2018-02-04', NULL, 'Si', 16),
(145, '90190390F', 2, '2017-08-04', NULL, 'Si', 2),
(146, '91455121L', 16, '2017-03-03', NULL, 'Si', 16),
(147, '91928182H', 1, '2018-05-05', NULL, 'Si', 1),
(148, '99123987J', 21, '2020-05-04', NULL, 'Si', 21),
(149, '99755198M', 23, '2020-01-01', NULL, 'Si', 23),
(150, '99899799A', 20, '2018-05-04', NULL, 'Si', 20),
(151, '45565555H', 21, '2019-05-04', NULL, 'Si', 21),
(152, '75288133T', 18, '2020-05-04', NULL, 'Si', 18),
(153, '44433333K', 20, '2019-05-04', NULL, 'Si', 20),
(154, '49089111J', 16, '2018-05-04', NULL, 'Si', 16),
(155, '19193931A', 23, '2021-05-04', NULL, 'Si', 23),
(156, '33399944j', 21, '2021-04-05', '2021-06-07', 'Si', 21),
(157, '77766681X', 20, '2020-05-04', NULL, 'Si', 20),
(158, '73732133V', 23, '2018-05-04', NULL, 'Si', 23),
(159, '51512154Y', 18, '2018-05-04', NULL, 'Si', 18),
(160, '50700707E', 23, '2021-05-04', NULL, 'Si', 23),
(161, '13942911Q', 20, '2021-05-04', NULL, 'Si', 20),
(162, '45598881M', 4, '2021-05-04', NULL, 'Si', 4),
(163, '11445133K', 4, '2021-05-04', NULL, 'Si', 4),
(164, '66666666F', 3, '2021-05-04', NULL, 'Si', 3),
(165, '32145621A', 23, '2020-05-04', NULL, 'Si', 23),
(166, '33344412G', 23, '2021-05-04', NULL, 'Si', 23),
(167, '22790212W', 16, '2021-05-04', NULL, 'Si', 16),
(168, '36481132D', 20, '2021-05-04', NULL, 'Si', 20),
(169, '27828923B', 16, '2021-05-04', NULL, 'Si', 16),
(170, '55533311H', 20, '2021-05-04', NULL, 'Si', 20),
(171, '12355211A', 23, '2020-05-04', NULL, 'Si', 23);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `perfil` int(11) NOT NULL,
  `imagen` varchar(100) DEFAULT 'view/imagenes/profile-icon.png',
  `descripcion` varchar(400) DEFAULT 'Ninguna descripción todavía...'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `password`, `perfil`, `imagen`, `descripcion`) VALUES
(1, 'Oscar', 'oscar@gmail.com', 'e6c3da5b206634d7f3f3586d747ffdb36b5c675757b380c6a5fe5c570c714349', 1, 'view/imagenes/profile-icon.png', 'Ninguna descripción todavía...'),
(2, 'admin', 'admin@gmail.com', '1ba3d16e9881959f8c9a9762854f72c6e6321cdd44358a10a4e939033117eab9', 2, 'view/imagenes/profile-icon.png', 'Ninguna descripción todavía...'),
(3, 'Ada', 'Ada@gmail.com', '', 1, './view/imagenes/userperfil/60b90a8ed2fd9_fotousu.jpg', ''),
(4, 'Juan', 'Juan@gmail.com', 'a417b5dc3d06d15d91c6687e27fc1705ebc56b3b2d813abe03066e5643fe4e74', 1, 'view/imagenes/profile-icon.png', 'Ninguna descripción todavía...'),
(5, 'dddd', 'dddddaa@gmail.com', 'f9dbd5d3be21e2217a539bdac1e9610d3d14aae748e58e35b23562b1ba2fbc9c\r\n', 1, 'view/imagenes/profile-icon.png', 'Ninguna descripción todavía...'),
(6, 'Pablo', 'pablocar@gmail.com', '68a32dd6b2c35412abbf319675fa086748a052cb8693e503111c32179e921d48', 1, 'view/imagenes/profile-icon.png', 'Ninguna descripción todavía...'),
(9, 'nelson', 'nelsonsaus2@gmail.com', '9924801e8aca687d0a71f4ab14a8ed1644d48348dce8941b6cfdf7fb3076bae2', 2, 'view/imagenes/profile-icon.png', ''),
(10, 'admin2', 'admin2@gmail.com', '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', 2, 'view/imagenes/profile-icon.png', 'Ninguna descripción todavía...'),
(11, 'admin3', 'admin3@gmail.com', '4fc2b5673a201ad9b1fc03dcb346e1baad44351daa0503d5534b4dfdcc4332e0', 2, 'view/imagenes/profile-icon.png', 'Ninguna descripción todavía...');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centros`
--
ALTER TABLE `centros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `conversaciones`
--
ALTER TABLE `conversaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cuatrimestre`
--
ALTER TABLE `cuatrimestre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `importes_servicios`
--
ALTER TABLE `importes_servicios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `importe_por_servicios_ibfk_1` (`id_servicio`),
  ADD KEY `importe_por_servicios_ibfk_2` (`id_periodo`);

--
-- Indices de la tabla `pdf`
--
ALTER TABLE `pdf`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`CodPersona`);

--
-- Indices de la tabla `productividad`
--
ALTER TABLE `productividad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_periodo` (`id_periodo`),
  ADD KEY `nif_trabajador` (`nif_trabajador`),
  ADD KEY `id_programa` (`id_programa`);

--
-- Indices de la tabla `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `programas_periodos`
--
ALTER TABLE `programas_periodos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_periodo` (`id_periodo`),
  ADD KEY `id_programa` (`id_programa`);

--
-- Indices de la tabla `puestos`
--
ALTER TABLE `puestos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD PRIMARY KEY (`nif`);

--
-- Indices de la tabla `trabajadores_servicios`
--
ALTER TABLE `trabajadores_servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `centros`
--
ALTER TABLE `centros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `conversaciones`
--
ALTER TABLE `conversaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `cuatrimestre`
--
ALTER TABLE `cuatrimestre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `importes_servicios`
--
ALTER TABLE `importes_servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT de la tabla `pdf`
--
ALTER TABLE `pdf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productividad`
--
ALTER TABLE `productividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5648;

--
-- AUTO_INCREMENT de la tabla `programa`
--
ALTER TABLE `programa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `programas_periodos`
--
ALTER TABLE `programas_periodos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT de la tabla `puestos`
--
ALTER TABLE `puestos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `trabajadores_servicios`
--
ALTER TABLE `trabajadores_servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
