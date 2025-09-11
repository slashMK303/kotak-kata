export default function Footer() {
    return (
        <footer className="w-full py-4 px-8 bg-dark-card text-center text-dark-secondary text-sm">
            <div className="flex justify-center items-center space-x-4 mb-2">
                <a
                    href="https://github.com/slashMK303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-secondary hover:text-accent transition-colors"
                >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.982 4.472-9.982 9.982 0 4.412 2.865 8.169 6.848 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.367-1.34-3.367-1.34-.454-1.154-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.341 1.088 2.91.832.091-.645.349-1.088.636-1.338-2.22-.251-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.252-.446-1.272.098-2.65 0 0 .84-.267 2.753 1.024A9.956 9.956 0 0112 5.8c.846 0 1.68.113 2.474.331 1.913-1.291 2.753-1.024 2.753-1.024.546 1.379.202 2.398.1 2.65.64.699 1.029 1.592 1.029 2.683 0 3.842-2.339 4.687-4.562 4.935.359.309.678.932.678 1.884 0 1.36-.012 2.455-.012 2.784 0 .267.181.579.688.481 3.98-1.32 6.84-5.078 6.84-9.489C22.008 6.472 17.535 2 12.026 2z" />
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/nanang-marvin-kurniawan-343a762a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-secondary hover:text-accent transition-colors"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.568c0-1.325-.028-2.421-1.479-2.421-1.477 0-1.705 1.11-1.705 2.353v5.636h-3.555v-12.27h3.555v1.737h-.027c.48-1.054 1.677-1.737 3.486-1.737 3.732 0 4.422 2.454 4.422 5.642v6.335zM7.408 6.027c-1.13 0-1.802-.68-1.802-1.536 0-.845.656-1.536 1.776-1.536s1.802.691 1.802 1.536c0 .856-.672 1.536-1.776 1.536zm1.82 14.425h-3.64v-12.27h3.64v12.27zM22.225 0H1.774C.794 0 0 .794 0 1.774v20.452c0 .98.794 1.774 1.774 1.774h20.451c.981 0 1.774-.794 1.774-1.774V1.774C24 .794 23.206 0 22.225 0z" />
                    </svg>
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Kotak Cerita. Hak Cipta Dilindungi.</p>
            <p className="mt-1">Dibuat dengan ❤️ oleh N.</p>
        </footer>
    );
}