<?php
class  MiDateFormatter extends IntlDateFormatter {
        function fromMysqlDateFormat($fecha) {
                return $this->format(strtotime($fecha));
        }
        function fromEsDateFormat($fecha) {
		$date = DateTime::createFromFormat('d/m/Y', $fecha);
                return $this->format($date->getTimestamp());
        }
        function fromEsDateTimeFormat($fecha) {
		$date = DateTime::createFromFormat('d/m/Y H:i', $fecha);
                return $this->format($date->getTimestamp());
        }
}
class Formatter {

    public $locale;
    public $formatterEuro;
    public $formatterDecimal;
    public $formatterFecha;
    public $formatterFechaHora;
    public $revformatterFecha;
    public $revformatterFechaHora;

    public function __construct() {

       $locale = ( isset($_COOKIE['locale']) ) ?
            $_COOKIE['locale'] :
            $_SERVER['HTTP_ACCEPT_LANGUAGE'];


       $this->formatterDecimal= new NumberFormatter($locale, NumberFormatter::DECIMAL);
       $this->formatterEuro= new NumberFormatter($locale, NumberFormatter::DECIMAL);
       $this->formatterEuro->setAttribute(\NumberFormatter::MIN_FRACTION_DIGITS, 2);
       $this->formatterEuro->setAttribute(\NumberFormatter::MAX_FRACTION_DIGITS, 2);
       $this->formatterFecha= new MiDateFormatter($locale, IntlDateFormatter::SHORT, IntlDateFormatter::NONE,'Europe/Madrid', IntlDateFormatter::GREGORIAN, "dd/MM/yyyy");
       $this->formatterFechaHora= new MiDateFormatter($locale, IntlDateFormatter::SHORT, IntlDateFormatter::SHORT,'Europe/Madrid', IntlDateFormatter::GREGORIAN, "dd/MM/yyyy hh:mm");
       $this->revformatterFecha= new MiDateFormatter($locale, IntlDateFormatter::SHORT, IntlDateFormatter::NONE,'Europe/Madrid', IntlDateFormatter::GREGORIAN, "yyyy-MM-dd");
       $this->revformatterMySQLFechaHora= new MiDateFormatter($locale, IntlDateFormatter::SHORT, IntlDateFormatter::SHORT,'Europe/Madrid', IntlDateFormatter::GREGORIAN, "yyyy-MM-dd hh:mm");
    }
}
?>
