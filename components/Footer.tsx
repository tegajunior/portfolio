export function Footer() {
  return (
    <footer className="border-t bg-background/80 text-center">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4 px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Chidiebere Uzoma. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
