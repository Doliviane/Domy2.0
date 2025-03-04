import React, { useState } from 'react';

const RegisterPage = () => {
    // État local pour stocker les valeurs du formulaire
    //storage of the values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // État pour les erreurs de validation
    const [errors, setErrors] = useState({});

    // État pour le message de succès
    const [success, setSuccess] = useState(false);

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Effacer l'erreur pour ce champ lorsqu'il est modifié
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Validation du formulaire
    const validateForm = () => {
        const newErrors = {};

        // Validation du prénom
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Le prénom est requis';
        }

        // Validation du nom
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Le nom est requis';
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide';
        }

        // Validation du mot de passe
        if (!formData.password) {
            newErrors.password = 'Le mot de passe est requis';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
        }

        // Validation de la confirmation du mot de passe
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        }

        return newErrors;
    };

    // Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Valider le formulaire
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Simuler l'envoi des données au serveur
        console.log('Données du formulaire soumises:', formData);

        // Réinitialiser le formulaire après soumission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

        // Afficher le message de succès
        setSuccess(true);

        // Cacher le message de succès après 3 secondes
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Créer un compte
                    </h2>
                </div>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        Inscription réussie ! Vous pouvez maintenant vous connecter.
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div>
                                <label htmlFor="firstName" className="sr-only">
                                    Prénom
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                                        errors.firstName ? 'border-red-300' : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                    placeholder="Prénom"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="lastName" className="sr-only">
                                    Nom
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                                        errors.lastName ? 'border-red-300' : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                    placeholder="Nom"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="sr-only">
                                Adresse email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                                    errors.email ? 'border-red-300' : 'border-gray-300'
                                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                placeholder="Adresse email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="sr-only">
                                Mot de passe
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                                    errors.password ? 'border-red-300' : 'border-gray-300'
                                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                placeholder="Mot de passe"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirmer le mot de passe
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                                    errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                placeholder="Confirmer le mot de passe"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            S'inscrire
                        </button>
                    </div>

                    <div className="text-sm text-center">
                        <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Vous avez déjà un compte ? Connectez-vous
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;