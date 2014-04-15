<?php

namespace Plugin\TinyMceConfig;


class Event
{

    public static function ipBeforeController_100()
    {
        if (ipAdminId()) {
            ipAddJs('assets/tinymceConfig.js');
        }
    }

}
