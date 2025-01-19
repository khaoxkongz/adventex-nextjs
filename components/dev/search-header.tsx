interface SearchHeaderProps {
  totalTours: number
}

export function SearchHeader({ totalTours }: SearchHeaderProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold">ค้นหาแพ็คเกจ</h2>
      <p className="text-sm text-muted-foreground">พบทั้งหมด {totalTours} ทัวร์</p>
    </div>
  )
}
