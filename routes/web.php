<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Halaman utama untuk user biasa (tanpa login)
Route::get('/', function () {
        return Inertia::render('Landing');
});

// Dashboard khusus admin (harus login)
Route::middleware(['auth', 'verified'])->group(function () {

    // Dashboard umum untuk semua admin
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Middleware khusus super admin
    // Route::middleware('can:isSuperAdmin')->group(function () {
    //     Route::get('/admin/super', function () {
    //         return Inertia::render('SuperAdminDashboard');
    //     })->name('super.dashboard');
    // });

    // // Middleware admin biasa
    // Route::middleware('can:isAdmin')->group(function () {
    //     Route::get('/admin', function () {
    //         return Inertia::render('AdminDashboard');
    //     })->name('admin.dashboard');
    // });

    // Profile management
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Auth routes
require __DIR__.'/auth.php';
