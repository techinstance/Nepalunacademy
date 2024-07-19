<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function signUp(SignUpRequest $request)
    {
        try {
            $data = $request->validated();

            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                'phone_no' => $data['phone_no']
            ]);

            $token = $user->createToken('main')->plainTextToken;
            return response()->json(compact('user', 'token'));
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create user.'], 500);
        }
    }

    public function login(LoginRequest $request)
    {
        try {
            $credentials = $request->validated();

            if (!Auth::attempt($credentials)) {
                return response()->json(['message' => 'Provided email or password is incorrect'], 422);
            }

            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;
            return response()->json(compact('user', 'token'));
        } catch (\Exception $e) {
            return response()->json(['message' => 'Login failed.','err'=> e.getMessage()], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = $request->user();
            $user->currentAccessToken()->delete();
            return response()->json([], 204);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Logout failed.'], 500);
        }
    }
}
