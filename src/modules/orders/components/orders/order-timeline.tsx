import { Check, Clock, Package, Truck, Home } from "lucide-react"

interface OrderTimelineProps {
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: string
}

const timelineSteps = [
  {
    key: "pending",
    label: "Order Placed",
    icon: Clock,
    description: "Your order has been received",
  },
  {
    key: "processing",
    label: "Processing",
    icon: Package,
    description: "We're preparing your items",
  },
  {
    key: "shipped",
    label: "Shipped",
    icon: Truck,
    description: "Your order is on the way",
  },
  {
    key: "delivered",
    label: "Delivered",
    icon: Home,
    description: "Order delivered successfully",
  },
]

const statusOrder = ["pending", "processing", "shipped", "delivered"]

export function OrderTimeline({ status, createdAt }: OrderTimelineProps) {
  const currentStatusIndex = statusOrder.indexOf(status)

  if (status === "cancelled") {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="h-6 w-6 text-red-600" />
        </div>
        <h3 className="font-semibold text-red-600 mb-2">Order Cancelled</h3>
        <p className="text-sm text-muted-foreground">
          This order was cancelled on {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {timelineSteps.map((step, index) => {
        const isCompleted = index <= currentStatusIndex
        const isCurrent = index === currentStatusIndex
        const IconComponent = step.icon

        return (
          <div key={step.key} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted
                    ? "bg-primary text-primary-foreground"
                    : isCurrent
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted && !isCurrent ? <Check className="h-5 w-5" /> : <IconComponent className="h-5 w-5" />}
              </div>
              {index < timelineSteps.length - 1 && (
                <div className={`w-0.5 h-12 mt-2 ${isCompleted ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
            <div className="flex-1 pb-8">
              <h4 className={`font-medium ${isCompleted ? "text-foreground" : "text-muted-foreground"}`}>
                {step.label}
              </h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              {isCurrent && <p className="text-xs text-primary mt-1">Current status</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
