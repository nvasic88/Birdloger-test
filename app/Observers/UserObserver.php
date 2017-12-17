<?php

namespace App\Observers;

use App\User;
use App\VerificationToken;

class UserObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(User $user)
    {
        VerificationToken::generateFor($user);
    }
}
