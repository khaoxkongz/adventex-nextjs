import dynamic from "next/dynamic"
import { LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

type IconName = keyof typeof dynamicIconImports

interface IconProps extends LucideProps {
  name: IconName
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
}

export type { IconName }

export { Icon }
