<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages.
    |
    */

    'accepted' => 'Polje :attribute mora biti prihvaćeno.',
    'active_url' => 'Polje :attribute nije validan URL.',
    'after' => 'Polje :attribute mora biti datum poslje :date.',
    'after_or_equal' => 'The :attribute must be a date after or equal to :date.',
    'alpha' => 'Polje :attribute može sadržati samo slova.',
    'alpha_dash' => 'Polje :attribute može sadržati samo slova, brojeve i povlake.',
    'alpha_num' => 'Polje :attribute može sadržati samo slova i brojeve.',
    'array' => 'Polje :attribute mora sadržati nekih niz stavki.',
    'before' => 'Polje :attribute mora biti datum prije :date.',
    'before_or_equal' => 'The :attribute must be a date before or equal to :date.',
    'between' => [
        'numeric' => 'Polje :attribute mora biti između :min - :max.',
        'file' => 'Datoteka :attribute mora biti između :min - :max kilobajta.',
        'string' => 'Polje :attribute mora biti između :min - :max znakova.',
        'array' => 'Polje :attribute mora biti između :min - :max stavki.',
    ],
    'boolean' => 'Polje :attribute mora biti točno ili netočno',
    'confirmed' => 'Potvrda polja :attribute se ne poklapa.',
    'date' => 'Polje :attribute nije važeći datum.',
    'date_format' => 'Polje :attribute ne odgovora prema formatu :format.',
    'different' => 'Polja :attribute i :other moraju biti različita.',
    'digits' => 'Polje :attribute mora sadržavati :digits znamenke.',
    'digits_between' => 'Polje :attribute mora biti izemđu :min i :max znamenaka.',
    'dimensions' => 'The :attribute has invalid image dimensions.',
    'distinct' => 'The :attribute field has a duplicate value.',
    'email' => 'Format polja :attribute nije validan.',
    'exists' => 'Odabrano polje :attribute nije validno.',
    'file' => 'The :attribute must be a file.',
    'filled' => 'Polje :attribute ne sme biti prazno.',
    'gt' => [
        'numeric' => 'Polje :attribute mora biti veće od :value.',
        'file' => 'Polje :attribute mora biti veće od :value kilobajta.',
        'string' => 'Polje :attribute mora biti duže od :value znakova.',
        'array' => 'Polje :attribute mora sadržati više od :value stavki.',
    ],
    'gte' => [
        'numeric' => 'Polje :attribute mora biti veće ili jednako :value.',
        'file' => 'Polje :attribute mora biti veće ili jednako :value kilobajta.',
        'string' => 'Polje :attribute mora biti duže ili jednako :value znakova.',
        'array' => 'Polje :attribute mora sadržati više od :value stavki ili isti broj stavki.',
    ],
    'image' => 'Polje :attribute mora biti slika.',
    'in' => 'Odabrano polje :attribute nije validno.',
    'in_array' => 'The :attribute field does not exist in :other.',
    'integer' => 'Polje :attribute mora biti broj.',
    'ip' => 'Polje :attribute mora biti validna IP adresa.',
    'ipv4' => 'The :attribute must be a valid IPv4 address.',
    'ipv6' => 'The :attribute must be a valid IPv6 address.',
    'json' => 'The :attribute must be a valid JSON string.',
    'lt' => [
        'numeric' => 'Polje :attribute mora biti manje od :value.',
        'file' => 'Polje :attribute mora biti manje od :value kilobajta.',
        'string' => 'Polje :attribute mora biti kraće od :value znakova.',
        'array' => 'Polje :attribute mora sadržati manje od :value stavki.',
    ],
    'lte' => [
        'numeric' => 'Polje :attribute mora biti manje ili jednako :value.',
        'file' => 'Polje :attribute mora biti manje ili jednako :value kilobajta.',
        'string' => 'Polje :attribute mora biti kraće ili jednako :value znakova.',
        'array' => 'Polje :attribute mora sadržati manje od :value stavki ili isti broj stavki.',
    ],
    'max' => [
        'numeric' => 'Polje :attribute mora biti manje od :max.',
        'file' => 'Polje :attribute mora biti manje od :max kilobajta.',
        'string' => 'Polje :attribute mora sadržavati manje od :max znakova.',
        'array' => 'Polje :attribute ne smije da image više od :max stavki.',
    ],
    'mimes' => 'Polje :attribute mora biti datoteka tipa: :values.',
    'mimetypes' => 'Polje :attribute mora biti datoteka tipa: :values.',
    'min' => [
        'numeric' => 'Polje :attribute mora biti najmanje :min.',
        'file' => 'Datoteka :attribute mora biti najmanje :min kilobajta.',
        'string' => 'Polje :attribute mora sadržavati najmanje :min znakova.',
        'array' => 'Polje :attribute mora sadržavati najmanje :min stavku.',
    ],
    'not_in' => 'Odabrani element polja :attribute nije validan.',
    'numeric' => 'Polje :attribute mora biti broj.',
    'present' => 'The :attribute field must be present.',
    'regex' => 'Format polja :attribute nije validan.',
    'required' => 'Polje :attribute je obavezno.',
    'required_if' => 'Polje :attribute je potrebno kada polje :other sadrži :value.',
    'required_unless' => 'The :attribute field is required unless :other is in :values.',
    'required_with' => 'Polje :attribute je potrebno kada polje :values je prisutan.',
    'required_with_all' => 'Polje :attribute je obavezno kada je :values prikazano.',
    'required_without' => 'Polje :attribute je potrebno kada polje :values nije prisutan.',
    'required_without_all' => 'Polje :attribute je potrebno kada nijedno od sljedećih polja :values nisu prisutni.',
    'same' => 'Polja :attribute i :other moraju se poklapati.',
    'size' => [
        'numeric' => 'Polje :attribute mora biti :size.',
        'file' => 'Fajl :attribute mora biti :size kilobajta.',
        'string' => 'Polje :attribute mora biti :size znakova.',
        'array' => 'Polje :attribute mora sadržati :size stavki.',
    ],
    'string' => 'Polje :attribute mora sadržati slova.',
    'timezone' => 'Polje :attribute mora biti ispravna vremenska zona.',
    'unique' => 'Polje :attribute već postoji.',
    'uploaded' => 'The :attribute failed to upload.',
    'url' => 'Format polja :attribute ne važi.',

    'captcha' => 'Polje :attribute mora biti validan CAPTCHA kod.',

    'photo_max' => 'Veličina datoteke fotografije ne sme biti veća od :size.',

    'field_observation_cannot_be_approved' => 'Neki terenski nalazi ne mogu biti odobreni.',
    'day' => 'Dan nije ispravan.',
    'month' => 'Mesec nije ispravan.',
    'year' => 'Godina nije ispravan.',
    'decimal' => 'Polje :attribute mora biti decimalni broj.',
    'contains_non_empty' => 'Polje :attribute mora sadržati barem jednu popunjenu opciju.',
    'unique_taxon_name' => 'Ime svojte mora biti jedinstveno u okviru glavnih skupina organizama iz živog svjeta.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [
    ],
];
